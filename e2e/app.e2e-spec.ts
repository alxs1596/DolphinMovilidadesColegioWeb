import { DolphinMovilidadesColegioWebPage } from './app.po';

describe('dolphin-movilidades-colegio-web App', () => {
  let page: DolphinMovilidadesColegioWebPage;

  beforeEach(() => {
    page = new DolphinMovilidadesColegioWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
