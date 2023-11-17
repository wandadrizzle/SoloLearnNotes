import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
FormControl

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  //name = new FormControl('');
  name = new FormControl('Wanda Drizzle');

  myForm: FormGroup;
  name2: string = '';
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { 
    this.myForm = this.fb.group({
      name2: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  showName() {
    alert(this.name.value);
  }

  onSubmit() {
    this.submitted = true;
    console.log('Form submitted with value:', this.myForm.value);
  }
}
