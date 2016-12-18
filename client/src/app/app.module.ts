import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { UploaderComponent } from './uploader/uploader.component';
import { PuppiesComponent } from './puppies/puppies.component';

const appRoutes: Routes = [
    { path: 'files', component: FilesComponent },
    { path: 'puppies', component: PuppiesComponent }
    // { path: '', component: AppComponent } this will recurse as setup now
]

@NgModule({
    declarations: [
        AppComponent,
        FilesComponent,
        UploaderComponent,
        PuppiesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
