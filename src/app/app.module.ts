import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserContainerComponent } from './modules/core/components/user/user-container/user-container.component';
import { UserListComponent } from './modules/core/components/user/user-list/user-list.component';
import { UserDetailComponent } from './modules/core/components/user/user-detail/user-detail.component';
import { OrderContainerComponent } from './modules/core/components/order/order-container/order-container.component';
import { OrderListComponent } from './modules/core/components/order/order-list/order-list.component';
import { OrderDetailComponent } from './modules/core/components/order/order-detail/order-detail.component';
import { OrderSigleComponent } from './modules/core/components/order/order-sigle/order-sigle.component';
import { OrderSingleComponent } from './modules/core/components/order/order-single/order-single.component';
import { UserSingleComponent } from './modules/shared/user-single/user-single.component';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { NotFoundComponent } from './modules/shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserListComponent,
    UserDetailComponent,
    OrderContainerComponent,
    OrderListComponent,
    OrderDetailComponent,
    OrderSigleComponent,
    OrderSingleComponent,
    UserSingleComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
