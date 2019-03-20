import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../service/playlist.service';
import {Playlist} from '../entity/playlist';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.less']
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlist[];

  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.getPlaylists();
  }

  getPlaylists(): void {
    this.playlistService.getPlaylistsObserver()
        .subscribe(playlists => this.playlists = playlists.results);
  }
}
