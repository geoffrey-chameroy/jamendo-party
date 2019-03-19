import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PlaylistsComponent} from './playlists/playlists.component';
import {HomeComponent} from './home/home.component';
import {PlaylistComponent} from './playlist/playlist.component';
import {TrackComponent} from './track/track.component';

const routes: Routes = [
    {path: 'start', component: HomeComponent},
    {path: 'track', component: TrackComponent},
    {path: 'playlist', component: PlaylistComponent},
    {path: 'explore/playlists', component: PlaylistsComponent},
    {path: '**', redirectTo: '/start'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
