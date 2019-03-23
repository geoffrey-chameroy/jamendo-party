import { PlaylistPage } from './playlist.po';

describe('Playlists Page', () => {
  let page: PlaylistPage;

  beforeAll(() => {
    page = new PlaylistPage();
  });

  it('should display page\'s elements', () => {
    page.navigateToPlaylistPage();

    expect(page.getCurrentUrl()).toEqual('http://localhost:4200/playlist/500487414');
    expect(page.getTitle()).toEqual('best of the best');
    expect(page.getPivotBarText()).toEqual('PLAYLIST');
    expect(page.getNbTracks()).toEqual(12);
  });

  it('should play tracks of playlist', () => {
    page.navigateToPlaylistPage();

    expect(page.getActionPlayText()).toEqual('PLAY');
    page.clickOnPlayPlaylist();
    expect(page.getActionPlayText()).toEqual('PAUSE');
    expect(page.getMusicReaderTitle()).toEqual('Presage');
    page.clickOnPlayPlaylist();
    expect(page.getActionPlayText()).toEqual('PLAY');
  });

  it('should play selected track', () => {
    page.navigateToPlaylistPage();

    expect(page.getActionPlayText()).toEqual('PLAY');
    page.clickOnPlayTrack();
    expect(page.getActionPlayText()).toEqual('PAUSE');
    expect(page.getMusicReaderTitle()).toEqual('Inside a Dream');
    page.clickOnPlayTrack();
    expect(page.getActionPlayText()).toEqual('PLAY');
  });
});
