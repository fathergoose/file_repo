import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Ng2UploaderModule } from 'ng2-uploader';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { PlaylistComponent } from './music-player/playlist/playlist.component';

const appRoutes: Routes = [
    { path: 'music', component: MusicPlayerComponent }
    // { path: '', component: AppComponent } this will recurse as setup now
]

@NgModule({
    declarations: [
        AppComponent,
        UploaderComponent,
        NavbarComponent,
        MusicPlayerComponent,
        PlaylistComponent,
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
