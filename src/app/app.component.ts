import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodiesandchefs';

  invitationForm: FormGroup = new FormGroup({
    'name': new FormControl(null),
    'email': new FormControl(null),
    'country': new FormControl(null),
    'city': new FormControl(null),
    'postalCode': new FormControl(null),
    'from': new FormControl('facebook'),
    'notes': new FormControl(null)
  });

 

  
  

  onSubmit(){
    console.log(this.invitationForm.value);
  }
}
