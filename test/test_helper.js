/**
 * Something to run tests - Mocha, loads tests, run them one by one, cleans up after each. Doesn't test anything, just runs tests.
 *    Describe, beforeEach and it are from Mocha.
 * Something to write tests - Chai, helpers for asserting certain properties about the test subject.
 *    Expect and other assertions are from Chai.
 *
 * In the helper we need to do:
 *    1) Set up testing environment to run like a browser in the command line
 *    2) Build 'renderComponent' helper that should render a given React class.
 *    3) Build helper for simulating events
 *    4) Set up chai-jQuery
 * **/

//1)Set up testing environment to run like a browser in the command line
//  When we create a bundle.js we usually load it up inside a browser. When we write our specs to run them, we run them in
//  our terminal. When we execute from the terminal, we have no browser, no window, no eventHandlers etc.
//First set up jQuery to work from the commandline, where it doesn't have what it expects to have.
//JSDom to do this. Makes our application think it's running inside the browser.
import jsdom from 'jsdom';
import _$ from 'jquery'; //Use the underscore because this gives us more control over jQuery. Default doesn't understand how to find document.
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';//Wherever we use JSX we have to import React as well.
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers'
import chaiJquery from 'chai-jquery';
//Create a fake HTML document and assign it to a global variable. Window scope is the global environment in a browser.
//When we're using Node, we use global instead of window. It's the equivalent of assigning to a window
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>'); //Sets up our fake browser for the command line.
global.window = global.document.defaultView;
const $ = _$(global.window); //We want you to be responsible for just the fake window we made. Don't try to find the window.
//jQuery can't find the document by default, so we have to tell it how to do it
function renderComponent(ComponentClass, props = {}, state = {}) {
//2) Build 'renderComponent' helper that should render a given React class.
  const componentInstance = TestUtils.renderIntoDocument(//Second argument is default state in store.
      //props={props} would show up as namespaced this.props.props, not what we want. To get them as top level properties use the spread operator.
      <Provider store={createStore(reducers, state)}>
        <ComponentClass {...props}/>
      </Provider>
  ); //Rendered version of our React element.
  //jQuery is here so that we'd have the helper methods from chai-jQuery.
  return $(ReactDOM.findDOMNode(componentInstance)); //Produces HTML.
}

//3) Build helper for simulating events.
$.fn.simulate = function(eventName, value) {
  if(value) {
    this.val(value);
  }
  //Square brackets to pass in different events on the fly. Don't reference a direct property using .change(), instead use the square brackets
  //to reference object property.
  TestUtils.Simulate[eventName](this[0]);//This refers to the element that the function was called on. Can return an array, so just choose the first element.
}//Add function to jQuery with fn.

//4) Set up chai-jQuery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };