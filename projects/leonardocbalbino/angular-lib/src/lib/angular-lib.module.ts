import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [ButtonComponent, InputComponent],
  imports: [
  ],
  exports: [ButtonComponent]
})
export class AngularLibModule { }
