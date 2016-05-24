//Rule of thumb - one React component, one test file.
//When we create a new file, Mocha doesn't realize we have a new file. Whenever we create a new file, we need to stop the process
//And rerun the tests.

import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
    let component;

    beforeEach(() => { //Function that runs before any of our it statements.
        component = renderComponent(CommentBox);
    });

    it('Has the correct class', () => {
        expect(component).to.have.class('comment-box');
    });

    it('Has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('Has a button', () => {
        expect(component.find('button')).to.exist;
    });
});