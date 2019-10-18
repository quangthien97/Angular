import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListProductComponent } from './list-product/list-product.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { AuthGuardService } from './auth-guard.service'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product', component: ListProductComponent, canActivate: [AuthGuardService] },
  { path: 'category', component: CreateCategoryComponent, canActivate: [AuthGuardService] },
  { path: 'category-list', component: ListCategoryComponent, canActivate: [AuthGuardService] },
  { path: 'category-edit/:id', component: EditCategoryComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
