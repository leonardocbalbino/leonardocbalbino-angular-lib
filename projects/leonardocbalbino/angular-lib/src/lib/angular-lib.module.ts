import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [ButtonComponent, InputComponent], //adicionar o componente aqui
  imports: [
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule
  ],
  exports: [ButtonComponent, InputComponent] //adicionar o componente aqui
})
export class AngularLibModule { }
