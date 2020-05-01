import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,LayoutModule
  ],
  exports: [ MatButtonModule, MatCheckboxModule,LayoutModule
  ]
})
export class MaterialModule { }
