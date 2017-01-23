import React, { PropTypes, Component } from 'react'
import EditForm from '../Components/EditForm'
import { shallow } from 'enzyme';
import {Provider} from 'react-redux'
import {data} from '../stubData';
const store = {subscribe: function(){}, dispatch: function(){}, getState: function(){} };

describe('EditForm Component', () => {
    let Component;

    beforeEach(() => {
        Component = shallow(<Provider store={store}>
            <EditForm tasks={data.tasks}/>
            </Provider>)

    });

    it('should render without crashing', () => {
        expect(Component.length).toBeTruthy();
    });

});