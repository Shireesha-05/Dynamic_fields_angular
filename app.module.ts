import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioButton, MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule, 
    MatButtonModule,
    MatIconModule, 
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



