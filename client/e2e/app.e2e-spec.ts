import { NgCommandAppPage } from './app.po';

describe('ng-command-app App', function() {
  let page: NgCommandAppPage;

  beforeEach(() => {
    page = new NgCommandAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
