import React, { PropTypes, Component } from 'react'
import Sidebar from '../Components/Sidebar'
import {data} from '../stubData';
import { shallow } from 'enzyme';
import {Provider} from 'react-redux'
const store = {subscribe: function(){}, dispatch: function(){}, getState: function(){} };

describe('Sidebar Component', () => {
    let Component;

    beforeEach(() => {
        Component = shallow(<Provider store={store}>
            <Sidebar
                categories={data.categories}
                editTask={null}
            />
            </Provider>)

    });

    it('should render without crashing', () => {
        expect(Component.length).toBeTruthy();
    });

});