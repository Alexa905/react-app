import React, { PropTypes, Component } from 'react'
import UndoRedoBtns from '../Components/UndoRedoBtns'
import { shallow } from 'enzyme';
import {Provider} from 'react-redux'
const store = {subscribe: function(){}, dispatch: function(){}, getState: function(){} };

describe('UndoRedoBtns Component', () => {
    let Component;

    beforeEach(() => {
        Component = shallow(<Provider store={store}><UndoRedoBtns/></Provider>)

    });

    it('should render without crashing', () => {
        expect(Component.length).toBeTruthy();
    });

});