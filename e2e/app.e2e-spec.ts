import { EaBusyPage } from './app.po';

describe('ea-busy App', () => {
  let page: EaBusyPage;

  beforeEach(() => {
    page = new EaBusyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
