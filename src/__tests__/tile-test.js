import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import Tile from '../components/commonComponents/tile';

describe('Tile', () => {
    it('renders without props', () => {
        var root = TestUtils.renderIntoDocument(<Tile title= {"sampleTitle"} description={"description"} buttonText={"Next >"} tileClassName={"card card-success mb-3"}/>);
        console.log(root);
        expect(root).toExist();
    });
});