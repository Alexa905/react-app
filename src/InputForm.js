import React from 'react';

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
                    <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}
                           placeholder={this.props.placeholder}/>
                    <button type="submit">Add</button>
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