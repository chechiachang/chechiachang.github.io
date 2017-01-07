import { ChechiachangPage } from './app.po';

describe('chechiachang App', function() {
  let page: ChechiachangPage;

  beforeEach(() => {
    page = new ChechiachangPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
