import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';
  isPressed:boolean=false;

  update(val:boolean){
    this.isPressed=val;

  }
}
