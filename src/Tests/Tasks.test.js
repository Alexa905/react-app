import React, { PropTypes, Component } from 'react'
import Tasks from '../Components/Tasks'
import {data} from '../stubData';
import { shallow } from 'enzyme';
import {Provider} from 'react-redux'
const store = {subscribe: function(){}, dispatch: function(){}, getState: function(){} };

describe('Tasks Component', () => {
    let Component;

    beforeEach(() => {
        Component = shallow(<Provider store={store}>
            <Tasks
                tasks={data.tasks}
                filter={null}
            />
            </Provider>)

    });

    it('should render without crashing', () => {
        expect(Component.length).toBeTruthy();
    });

});