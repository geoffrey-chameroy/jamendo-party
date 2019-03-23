import { browser, by, element } from 'protractor';

export class SearchPage {
  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  navigateToSearchPage() {
    return browser.get(browser.baseUrl + '/search/best of') as Promise<any>;
  }

  getPivotBarText() {
    return element(by.css('app-root .pivot-bar a')).getText() as Promise<string>;
  }

  getNbPlaylists() {
    return element.all(by.css('app-root .row--list-grid li')).count() as Promise<number>;
  }

  clickOnPlaylistLink() {
    return element(by.css('app-root .row--list-grid li:first-child a')).click();
  }
}
