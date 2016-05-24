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

    // Can nest tests that are very similar to one another, in a describe block.
    // Before each runs before every it
    describe('Entering some text', () => {
        // Add another beforeEach here to specify a beforeEach that would only be
        // executed for the its that are in this block of describe.
        beforeEach(() => {
            //Find a textarea element. Simulate simulates an event, clicks on the element, types in text.
            //Simulate a change to the textarea, fake enter a text 'new comment'.
            component.find('textarea').simulate('change', 'new comment');
        });

        it('Shows that text in the textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('When submitted clears the input', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});