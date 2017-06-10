import { MasterDetailViewTestPage } from './app.po';

describe('master-detail-view-test App', () => {
  let page: MasterDetailViewTestPage;

  beforeEach(() => {
    page = new MasterDetailViewTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
