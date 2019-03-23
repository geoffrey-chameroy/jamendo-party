import { SearchPage } from './search.po';

describe('Search Page', () => {
  let page: SearchPage;

  beforeAll(() => {
    page = new SearchPage();
  });

  it('should display page\'s elements', () => {
    page.navigateToSearchPage();

    expect(page.getCurrentUrl()).toEqual('http://localhost:4200/search/best%20of');
    expect(page.getPivotBarText()).toEqual('SEARCH');
    expect(page.getNbPlaylists()).toEqual(10);
  });

  it('should go on playlist page', () => {
    page.navigateToSearchPage();
    page.clickOnPlaylistLink();

    expect(page.getCurrentUrl()).toEqual('http://localhost:4200/playlist/500487414');
  });
});
