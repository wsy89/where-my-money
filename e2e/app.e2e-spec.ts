import { WhereMyMoneyPage } from './app.po';

describe('where-my-money App', function() {
  let page: WhereMyMoneyPage;

  beforeEach(() => {
    page = new WhereMyMoneyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
