import {ChangeDetectionStrategy, Component,OnInit} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})


export class AppComponent implements OnInit {
  title = 'Dynamic';
  


  form: FormGroup;
  formDataArray: any[] = [];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      dynamicFields: this.fb.array([
        this.createField()
      ])
    });
  }
  ngOnInit(): void {
    
  }
 
  get dynamicFields() {
    return this.form.get('dynamicFields') as FormArray;
  }
 
  createField(): FormGroup {
    return this.fb.group({
      value: ['', Validators.required]
    });
  }
 
  addField(): void {
    this.dynamicFields.push(this.createField());
  }
 
  removeField(index: number): void {
    if (this.dynamicFields.length > 1) {
      this.dynamicFields.removeAt(index);
    }
  }
 
  getSkillsFromDynamicform(){
    return this.dynamicFields.value.map((field: any) => field.value);
  }
 
  onSubmit(): void {
    if (this.form.valid) {
      let tableObj = {
        name: this.form.get('name')?.value,
        gender: this.form.get('gender')?.value,
        skills:this.getSkillsFromDynamicform()
      }
      this.formDataArray.push(tableObj);
      console.log(this.form.value);
      this.form.reset();
      this.form.setControl('dynamicFields', this.fb.array([this.createField()]));
    } else {
      alert('Form is invalid');
    }
  }
 
  }

