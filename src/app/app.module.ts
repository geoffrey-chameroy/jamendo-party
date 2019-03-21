import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './shared/navigation/navigation.component';
import {TopbarComponent} from './shared/topbar/topbar.component';
import {PlaylistsComponent} from './playlists/playlists.component';
import {HomeComponent} from './home/home.component';
import {PlaylistComponent} from './playlist/playlist.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        TopbarComponent,
        PlaylistsComponent,
        HomeComponent,
        PlaylistComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
