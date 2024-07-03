import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() title = 'Enviando Label via input/output';
  @Output() title2 = 'Outro  1014';

}
