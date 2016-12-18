import React from 'react';
import '../styles/InputForm.css';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    render() {
        return (
            <div className="InputForm">
                <form action="" onSubmit={this.addItem.bind(this)}>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input" type="text" ref="input" placeholder={this.props.placeholder}/>
                        <button type="submit"
                                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    addItem(event) {
        event.preventDefault();
        var input = ReactDOM.findDOMNode(this.refs.input);
        if (input.value) {
            this.props.addItem(input.value);
            input.value = '';
        }
    }
}

export default Form;