import { InjectionToken, NgModule } from '@angular/core';
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
import { LoggerService } from './Services/logger.service';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';
// import { TestifyComponent } from './testify/testify.component';

export const USER_TOKEN = new InjectionToken<UserService>('USER_SERVICE');  // create injection token

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    HeroComponent,
    SidebarComponent,
    UserListComponent,
    UserDetailComponent,
    // TestifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    SubscribeService, 
    {provide: USER_TOKEN, useClass:UserService}, // injection token
    // LoggerService                       // providing service w/o declaring and let angular handle it.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
