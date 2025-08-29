import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidenav } from '../sidenav/sidenav';
import { User } from '@angular/fire/auth';
import { LogService } from '../login-service/login-service';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule, Sidenav],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit{
  user: User | null = null;
  
    constructor(private logService: LogService) {}
  
    ngOnInit() {
      this.logService.currentUser$.subscribe((u) => {
        this.user = u;
        console.log('Usuario en app:', this.user);
      });
    }
}
