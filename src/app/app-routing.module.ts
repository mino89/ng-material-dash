import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'users',
    title: 'users',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'products',
    title: 'products',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
