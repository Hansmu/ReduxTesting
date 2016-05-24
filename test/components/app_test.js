/** Tests the <App> component.
 *  Always ask yourself what do you actually want to test.
 *  Just text in there right now, so check that text is on the component.
 * **/
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// The purpose of wrapping here is because then the tests can be run safely. If an error happens, then everything doesn't just die.
// Use describe to group together similar tests.
describe('App', () => { //The string's only importance is for the report. Just a tool to help you understand tests. The name doesn't have to be the same as component. But it's the best name.
  // Use it to test a single attribute of a target.
  it('Shows the correct text', () => { //Group one single test. I'm testing blablabla. The name here is also only used for the report.
    // Use expect to make an assertion(belief that something is true) about a target(what we're testing).
    //Create an instance of App
    const component = renderComponent(App);

    expect(component).to.contain('React simple starter');

    /**
     *       The thing we
     *       want to make
     *       an assert                 The value we
     *       about                     expect
     *        __|______                 _____|______
     *        |        |               |            |
     * except(component).to.have.class('comment-box');
     *                   |____________|
     *                         |
     *                   Assert matcher-
     *                   how to compare
     *                   the  two given
     *                   values
     * **/
  });
});
