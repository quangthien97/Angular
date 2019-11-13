import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { DetailCategoryComponent } from './category/detail-category/detail-category.component';
import { PopModalComponent } from './pop-modal/pop-modal.component';
import { EditAvatarComponent } from './user/edit-avatar/edit-avatar.component';
import { AuthGuardService } from './auth-guard.service'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product', component: ListProductComponent, canActivate: [AuthGuardService] },
  { path: 'product-create', component: CreateProductComponent, canActivate: [AuthGuardService] },
  { path: 'product-edit/:id', component: EditProductComponent, canActivate: [AuthGuardService] },
  { path: 'category', component: CreateCategoryComponent, canActivate: [AuthGuardService] },
  { path: 'category-list', component: ListCategoryComponent, canActivate: [AuthGuardService] },
  { path: 'category-edit/:id', component: EditCategoryComponent, canActivate: [AuthGuardService] },
  { path: 'category-detail/:id', component: DetailCategoryComponent, canActivate: [AuthGuardService] },
  { path: 'popup', component: PopModalComponent },
  { path: 'edit-ava', component: EditAvatarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
