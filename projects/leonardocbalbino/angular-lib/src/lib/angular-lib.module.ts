import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [ButtonComponent, InputComponent],
  imports: [
    MatButtonModule,
    MatSlideToggleModule
  ],
  exports: [ButtonComponent]
})
export class AngularLibModule { }
