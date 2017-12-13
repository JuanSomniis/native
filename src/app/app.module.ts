//#region external
import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//#endregion external
//#region modules
import { TreeModule } from './modules/tree.module';
import { MaterialModule } from './modules/material.module';
//#endregion modules
//#region components
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductoComponent } from './components/producto/producto.component';
//#endregion components
//#region providers 
import { Banner } from './components/banner/banner.service';
import { FooterComponent } from './components/footer/footer.component';
//#endregion providers

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    BannerComponent,
    HomeComponent,
    MenuComponent,
    ProductoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    TreeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [Banner],
  bootstrap: [AppComponent]
})
export class AppModule { }
