import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isSubmitted = false;

  // City Names
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan', 'New York']

  constructor(public fb: FormBuilder) { }

  /*########### Form ###########*/
  leftForm = this.fb.group({
    cityName: ['', [Validators.required]]
  })
  rightForm = this.fb.group({
    cityName: ['', [Validators.required]]
  })

  // Getter method to access formcontrols
  get cityName() {
    return this.leftForm.get('cityName');
  }

  /*########### Template Driven Form ###########*/
  onSubmit() {
    this.isSubmitted = true;
    if (!this.leftForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.leftForm.value))
    }

  }

}