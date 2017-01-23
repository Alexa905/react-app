import React, { PropTypes, Component } from 'react'
import Task from '../Components/Task'
import { shallow } from 'enzyme';

describe('Task Component', () => {
    const updateTask = jasmine.createSpy('updateTask');
    const index = 0;
    const task = {id: 0, name:'Poland', categoryId:2, description:'Test Description'};
    let Component;

    beforeEach(() => {
        Component = shallow(
            <Task
                update={updateTask}
                key={index}
                item={task}
                filter={null}
            />
        );
    });

    it('should render', () => {
        expect(Component.length).toBeTruthy();
        expect(document.getElementsByClassName('Task')).toBeTruthy();
        expect(Component.find('span').last().text()).toBe(task.description);
    });

});