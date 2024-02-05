import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { AdminComponent } from './header/admin/admin.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { SubscribeService } from './Services/subscribe.service';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './Services/user.services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    HeroComponent,
    SidebarComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SubscribeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
