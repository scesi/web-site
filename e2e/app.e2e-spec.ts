import { ScesiPagePage } from './app.po';

describe('scesi-page App', () => {
  let page: ScesiPagePage;

  beforeEach(() => {
    page = new ScesiPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
