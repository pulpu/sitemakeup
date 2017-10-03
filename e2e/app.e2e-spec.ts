import { DoraPage } from './app.po';

describe('dora App', () => {
  let page: DoraPage;

  beforeEach(() => {
    page = new DoraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
