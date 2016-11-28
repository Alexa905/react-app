import React from 'react';
import '../styles/InputForm.css';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <div className="InputForm">
                <form action="" onSubmit={this.addItem.bind(this)}>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input" type="text" value={this.state.value}
                               onChange={this.handleChange.bind(this)}
                               placeholder={this.props.placeholder}/>
                        <button type="submit"
                                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    addItem(event) {
        event.preventDefault();
        if (!!this.state.value) {
            this.props.addItem(this.state.value);
            this.setState({
                value: ''
            });
        }
    }


}

export default Form;