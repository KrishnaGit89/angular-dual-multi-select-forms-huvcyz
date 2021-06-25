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
  CityLeft: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan', 'New York']

  CityRight: any =["Hyderabad"];

  constructor(public fb: FormBuilder) { }

  /*########### Form ###########*/
  leftForm = this.fb.group({
    CityLeft: ['', [Validators.required]]
  })
  rightForm = this.fb.group({
    CityRight: ['', [Validators.required]]
  })

  // Getter method to access formcontrols
  get cityName() {
    return this.leftForm.get('CityLeft');
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