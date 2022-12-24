import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title
        }
    }

    render() {
        const {title} = this.state;
        return (
            <header className="header">
                <h1>{ title }</h1>
            </header>
        );
    }
  }
  
  export default Header;