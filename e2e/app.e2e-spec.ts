import { OriginAnsiblePage } from './app.po';

describe('origin-ansible App', function() {
  let page: OriginAnsiblePage;

  beforeEach(() => {
    page = new OriginAnsiblePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
