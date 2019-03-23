import { PlaylistsPage } from './playlists.po';

describe('Playlists Page', () => {
  let page: PlaylistsPage;

  beforeAll(() => {
    page = new PlaylistsPage();
  });

  it('should display page\'s elements', () => {
    page.navigateToPlaylistsPage();

    expect(page.getCurrentUrl()).toEqual('http://localhost:4200/explore/playlists');
    expect(page.getPivotBarText()).toEqual('PLAYLISTS');
    expect(page.getNbPlaylists()).toEqual(10);
  });

  it('should go on playlist page', () => {
    page.navigateToPlaylistsPage();
    page.clickOnPlaylistLink();

    expect(page.getCurrentUrl()).toEqual('http://localhost:4200/playlist/500487414');
  });
});
