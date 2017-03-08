import { PlanBPage } from './app.po';

describe('plan-b App', () => {
  let page: PlanBPage;

  beforeEach(() => {
    page = new PlanBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
