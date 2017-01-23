import React, { PropTypes, Component } from 'react'
import ProgressBar from '../Components/ProgressBar'
import {data} from '../stubData';
import { shallow } from 'enzyme';
import {Provider} from 'react-redux'
const store = {subscribe: function(){}, dispatch: function(){}, getState: function(){} };

describe('ProgressBar Component', () => {
    let Component;

    beforeEach(() => {
        Component = shallow(<Provider store={store}>
            <ProgressBar
                categories={data.categories}
                tasks={[data.tasks]}
            />
            </Provider>)

    });

    it('should render without crashing', () => {
        expect(Component.length).toBeTruthy();
        expect(Component.find('progress')).toEqual(jasmine.any(Object));
    });

});