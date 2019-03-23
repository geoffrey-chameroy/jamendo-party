import { HomePage } from './home.po';

describe('workspace-project App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display home page elements', () => {
    page.navigateToHomePage();

    expect(page.getCurrentUrl()).toEqual('http://localhost:4200/start');
    expect(page.getTitleText()).toEqual('EXPLORER');
    expect(page.getPlaylistsLink()).toEqual('PLAYLISTS');
  });

  it('should click on playlists link', () => {
    page.navigateToHomePage();
    page.clickOnPlaylistsLink();
    expect(page.getCurrentUrl()).toEqual('http://localhost:4200/explore/playlists');
  });
});
