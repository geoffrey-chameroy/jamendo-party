import { browser, by, element } from 'protractor';

export class PlaylistPage {
  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  navigateToPlaylistPage() {
    return browser.get(browser.baseUrl + '/playlist/500487414') as Promise<any>;
  }

  getTitle() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getPivotBarText() {
    return element(by.css('app-root .pivot-bar a')).getText() as Promise<string>;
  }

  getActionPlayText() {
    return element(by.css('app-root .btn-action.js-play-me')).getText() as Promise<string>;
  }

  getMusicReaderTitle() {
    return element(by.css('app-music-reader .player-mini_track_information_title')).getText() as Promise<string>;
  }

  getNbTracks() {
    return element.all(by.css('app-root .list-track li')).count() as Promise<number>;
  }

  clickOnPlayPlaylist() {
    return element(by.css('app-root .btn-action.js-play-me')).click();
  }

  clickOnPlayTrack() {
    return element(by.css('app-root .list-track li:nth-child(3) .track_play')).click();
  }
}
