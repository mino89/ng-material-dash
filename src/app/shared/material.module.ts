import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

const modules = [
  CommonModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,
  RouterModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules

})
export class MaterialModule { }
