import { VectorsPage } from './app.po';

describe('vectors App', () => {
  let page: VectorsPage;

  beforeEach(() => {
    page = new VectorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
