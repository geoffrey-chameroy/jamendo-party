import { HomePage } from './home.po';

describe('Home Page', () => {
  let page: HomePage;

  beforeAll(() => {
    page = new HomePage();
  });

  it('should display page\'s elements', () => {
    page.navigateToHomePage();

    expect(page.getCurrentUrl()).toEqual('http://localhost:4200/start');
    expect(page.getTitleText()).toEqual('EXPLORER');
    expect(page.getPlaylistsLink()).toEqual('PLAYLISTS');
  });

  it('should go on playlists page', () => {
    page.navigateToHomePage();
    page.clickOnPlaylistsLink();

    expect(page.getCurrentUrl()).toEqual('http://localhost:4200/explore/playlists');
  });
});
