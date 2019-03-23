import { browser, by, element } from 'protractor';

export class PlaylistsPage {
  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  navigateToPlaylistsPage() {
    return browser.get(browser.baseUrl + '/explore/playlists') as Promise<any>;
  }

  getPivotBarText() {
    return element(by.css('app-root .pivot-bar a')).getText() as Promise<string>;
  }

  getNbPlaylists() {
    return element.all(by.css('app-root .row--list-grid li')).count() as Promise<number>;
  }

  clickOnPlaylistLink() {
    return element(by.css('app-root .row--list-grid li a:first-child')).click();
  }
}
