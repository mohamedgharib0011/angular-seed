import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  api: ApiService;
  contact = { id: null, name: "", description: "", email: "" };

  constructor(api: ApiService) {
    this.api = api;
  }


  createContact() {
    this.api.post("https://5fdfc017eca1780017a30f42.mockapi.io/api/v1/contacts", this.contact).subscribe(data => {
      console.log(data);
    })
  }
}
