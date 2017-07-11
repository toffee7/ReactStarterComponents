import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import NavigationBar from '../components/commonComponents/navigationBar';

describe('Navigation Bar', () => {
    it('renders without props', () => {
        var root = TestUtils.renderIntoDocument(<NavigationBar/>);
        expect(root).toExist();
    });
});