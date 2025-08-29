import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { StepProductAdd } from '../step-product-add/step-product-add';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-dialog-comp',
  templateUrl: './dialog-comp.html',
  styleUrl: './dialog-comp.css',
  imports: [StepProductAdd, MatStepperModule, MatIconModule,MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DialogComp {}
