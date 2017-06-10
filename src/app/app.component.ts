import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [
    { path: '/home', icon: 'home', label: 'Home'},
    { path: '/artists', icon: 'work', label: 'Artists'},
  ];
}
