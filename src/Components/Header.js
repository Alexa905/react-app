import React from 'react';
import logo from '../../public/images/logo.svg';
class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App-header">
                <h2>{this.props.title} <img src={logo} className="App-logo" alt="logo"/></h2>
                {this.props.children}
            </div>
        );
    }

}


// Uncomment properties you need
// FirstComponent.propTypes = {};
// FirstComponent.defaultProps = {};

export default Header;
