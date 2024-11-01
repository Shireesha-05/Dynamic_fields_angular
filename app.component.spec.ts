import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {  FormBuilder, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';

describe('AppComponent', () => {
  let formbuilder:FormBuilder 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers:[FormBuilder,
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: AppComponent,
          multi: true
        }
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    formbuilder = TestBed.inject(FormBuilder);

    app.form = formbuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      dynamicFields: formbuilder.array([
        app.createField()
      ])
    });

    expect(app).toBeTruthy();
  });

  it(`should have as title 'Dynamic'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Dynamic');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Dynamic app is running!');
  });
});
