
import { renderComponent, expect } from './utils/TestHelpers';
import App from './App';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});

