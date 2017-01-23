import React, { PropTypes, Component } from 'react'
import Header from '../Components/Header'
import { shallow } from 'enzyme';
import {Provider} from 'react-redux'
const store = {subscribe: function(){}, dispatch: function(){}, getState: function(){} };

describe('Header Component', () => {
    let Component;

    beforeEach(() => {
        Component = shallow(<Provider store={store}>
            <Header editTask={{}}/>
            </Provider>)

    });

    it('should render without crashing', () => {
        expect(Component.length).toBeTruthy();
    });

});