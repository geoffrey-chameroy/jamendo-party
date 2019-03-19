import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PlaylistsComponent} from './playlists/playlists.component';

const routes: Routes = [
    {path: 'explore/playlists', component: PlaylistsComponent},
    {path: '**', redirectTo: '/explore/playlists'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
