import { renderComponent, expect } from '../test_helper';

import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('Shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('Shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
