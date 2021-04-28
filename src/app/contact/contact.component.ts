import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls:['contact.component.css']
  
})
export class ContactComponent {
  title = 'home';
  get(){
    alert("Thanks for Contacting us ! we will come back to you soon");
  }
}
