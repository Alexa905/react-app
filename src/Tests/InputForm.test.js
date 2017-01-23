import React, { PropTypes, Component } from 'react'
import InputForm from '../Components/InputForm'
import ReactDOM from 'react-dom';

describe('App ', () => {
    it('should create component', () => {
        expect(typeof InputForm).toEqual('function')
    });

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<InputForm />, div);
    });

});