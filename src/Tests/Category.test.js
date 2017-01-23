import React, { PropTypes, Component } from 'react'
import Category from '../Components/Category'
import { shallow } from 'enzyme';

describe('Category Component', () => {
    const deleteCategory = jasmine.createSpy('deleteCategory');
    const editTask = jasmine.createSpy('editTask');
    const updateTask = jasmine.createSpy('updateTask');
    const updateCategory = jasmine.createSpy('updateCategory');
    const addCategory = jasmine.createSpy('addCategory');
    const index = 0;
    const category = {id: 0, name:'Visit Asia', childNodes:[]};
    let Component;

    beforeEach(() => {
        Component = shallow(
            <Category
                delete={deleteCategory}
                editTask={editTask}
                updateTask={updateTask}
                add={addCategory}
                update={updateCategory}
                key={index}
                node={category}
            />
        );
    });

    it('should render', () => {
        expect(Component.length).toBeTruthy();
        expect(Component.find('span').text()).toBe(category.name);
    });

});