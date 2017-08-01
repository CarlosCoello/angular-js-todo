import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
model: FormM = new FormM();
@ViewChild('f') form: any;

  constructor() { }

  ngOnInit() {
  }

onSubmit(){
  console.log('Form Submitted');
  console.log(this.form.value);
  console.log(this.form.value.name);
  this.form.reset();
}

}

export class FormM {
  constructor(public name: string = '',
              public email: string = '',
              public message: string = '') {
  }
}
