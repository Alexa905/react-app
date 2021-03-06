import React, { PropTypes, Component } from 'react'
import App from '../Components/App'
import { shallow } from 'enzyme';
import {Provider} from 'react-redux'
const store = {subscribe: function(){}, dispatch: function(){}, getState: function(){} };

describe('App Component', () => {
    let Component;

    beforeEach(() => {
        Component = shallow(<Provider store={store}><App/></Provider>)

    });

    it('should render without crashing', () => {
        expect(Component.length).toBeTruthy();
    });

});
