import { Component, signal   } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../loginAuth/auth.service';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatIconModule ,MatCardModule ,MatButtonModule, MatGridListModule, MatDividerModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  user = signal<any>(null);

  constructor(private authService: AuthService, private router: Router) {}
   

  login() {
    this.authService.loginWithGoogle()
      .then(result => {
          this.user.set(result.user);
          this.router.navigate(['/home']);
      })
      .catch(err => console.error(err));
  }

  logout() {
    console.log("cerrando sesion");
    this.authService.logout()
      .then(() => this.user.set(null))
      .catch(err => console.error(err));
  }
}