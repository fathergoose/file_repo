import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { UploaderComponent } from './uploader/uploader.component';
import { PuppiesComponent } from './puppies/puppies.component';
import { PuppyDetailComponent } from './puppies/puppy-detail/puppy-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Ng2UploaderModule } from 'ng2-uploader';
import { MusicPlayerComponent } from './music-player/music-player.component';

const appRoutes: Routes = [
    { path: 'files', component: FilesComponent },
    { path: 'puppies', component: PuppiesComponent },
    { path: 'puppies/detail/:id', component: PuppiesComponent },
    { path: 'music', component: MusicPlayerComponent }
    // { path: '', component: AppComponent } this will recurse as setup now
]

@NgModule({
    declarations: [
        AppComponent,
        FilesComponent,
        UploaderComponent,
        PuppiesComponent,
        PuppyDetailComponent,
        NavbarComponent,
        MusicPlayerComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        Ng2UploaderModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
