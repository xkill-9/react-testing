
import { renderComponent, expect } from '../utils/TestHelpers';;
import CommentList from './CommentList';

describe('CommentList', () => {
  let component;
  beforeEach(() => {
    const props = { comments: ['My first comment', 'Another comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows and <li> for every comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('show each comment that is provided', () => {
    expect(component).to.contain('My first comment');
    expect(component).to.contain('Another comment');
  });
});