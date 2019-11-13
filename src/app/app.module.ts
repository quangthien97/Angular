import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ListProductComponent } from './list-product/list-product.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { SearchCategoryComponent } from './category/search-category/search-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DetailCategoryComponent } from './category/detail-category/detail-category.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PopModalComponent } from './pop-modal/pop-modal.component';
import { EditAvatarComponent } from './user/edit-avatar/edit-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListProductComponent,
    CreateCategoryComponent,
    ListUserComponent,
    ListCategoryComponent,
    SearchCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    CreateProductComponent,
    EditProductComponent,
    DetailCategoryComponent,
    PopModalComponent,
    EditAvatarComponent,

  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
