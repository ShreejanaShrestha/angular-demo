import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamePipe } from './pipe/name.pipe';
import { CapitalizePipePipe } from './pipe/capitalize-pipe.pipe';



@NgModule({
  declarations: [NamePipe, CapitalizePipePipe],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
