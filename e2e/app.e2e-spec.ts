import { SweetskinsPage } from './app.po';

describe('sweetskins App', function() {
  let page: SweetskinsPage;

  beforeEach(() => {
    page = new SweetskinsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
