import { expect } from '../test_helper';

import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions/index';

describe('Actions', () => {
    describe('saveComment', () => { //Compared to React, where you just checked the HTML, you have to be more particular
        //With actions, which means testing the type and payload.
        it('has the correct type', () => {
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
        });

        it('has the correct payload', () => {
            const action = saveComment('New Comment');
            expect(action.payload).to.equal('New Comment');
        });
    });
});

//Command to run tests: npm run test:watch