import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UIView, UIRouterModule} from 'ui-router-ng2';
import {STATES, MyUIRouterConfig} from './routes';
import { HttpModule, JsonpModule }  from '@angular/http';


import {MainComponent} from './main';
import {HeaderComponent} from './header/header';
import {TitleComponent} from './title/title';
import {FooterComponent} from './footer/footer';
import {FileViewComponent} from './files/fileView';

@NgModule({
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    UIRouterModule.forRoot({states: STATES, configClass: MyUIRouterConfig})
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FileViewComponent,
    FooterComponent
  ],
  bootstrap: [UIView]
})
export class AppModule {}
