import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Ng2UploaderModule } from 'ng2-uploader';
import { MusicPlayerComponent } from './main/player/player.component';
import { PlaylistComponent } from './main/player/playlist/playlist.component';
import { LibraryComponent } from './main/library/library.component';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './settings/settings.component';
import { TracksComponent } from './main/library/tracks/tracks.component';
import { ArtistsComponent } from './main/library/artists/artists.component';
import { AlbumsComponent } from './main/library/albums/albums.component';

const appRoutes: Routes = [
    { path: 'listen', component: MainComponent },
    { path: 'configure', component: SettingsComponent },
    { path: '', redirectTo: '/listen', pathMatch: 'full' },
]

@NgModule({
    declarations: [
        AppComponent,
        UploaderComponent,
        NavbarComponent,
        MusicPlayerComponent,
        PlaylistComponent,
        LibraryComponent,
        MainComponent,
        SettingsComponent,
        TracksComponent,
        ArtistsComponent,
        AlbumsComponent,
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
