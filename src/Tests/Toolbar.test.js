import React, { PropTypes, Component } from 'react'
import Toolbar from '../Components/Toolbar'
import { shallow } from 'enzyme';
import {Provider} from 'react-redux'
const store = {subscribe: function(){}, dispatch: function(){}, getState: function(){} };

describe('Toolbar Component', () => {
    let Component;

    beforeEach(() => {
        Component = shallow(<Provider store={store}>
            <Toolbar
                toggleState={false}
                filter={null}
            />
            </Provider>)

    });

    it('should render without crashing', () => {
        expect(Component.length).toBeTruthy();
    });

});