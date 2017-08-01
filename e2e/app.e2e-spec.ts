import { PracticeangularPage } from './app.po';

describe('practiceangular App', () => {
  let page: PracticeangularPage;

  beforeEach(() => {
    page = new PracticeangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
