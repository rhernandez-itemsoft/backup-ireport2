import { NgModule, NO_ERRORS_SCHEMA,   CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTreeModule} from '@angular/material/tree';
import {MatListModule} from '@angular/material/list';



import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    MatCardModule,
    DragDropModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatMenuModule,
    MatStepperModule,
    MatTreeModule,
    MatListModule,
    
    ColorPickerModule,
  ],
  exports: [
    MatCardModule,
    DragDropModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatMenuModule,
    MatStepperModule,
    MatTreeModule,
    MatListModule,
    
    ColorPickerModule,
  ],
  schemas: [
    NO_ERRORS_SCHEMA, 
    CUSTOM_ELEMENTS_SCHEMA
 ]
})
export class AppMatModule { }
