import { browser, by, element } from 'protractor';

export class HomePage {
  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  navigateToHomePage() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getPlaylistsLink() {
    return element(by.css('app-root .tile a')).getText() as Promise<string>;
  }

  clickOnPlaylistsLink() {
    return element(by.css('app-root .tile a')).click();
  }
}
