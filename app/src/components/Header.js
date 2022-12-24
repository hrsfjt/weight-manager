import React from 'react';
import Style from './Header.module.css';

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
            <header className={Style.header}>
                <h1 className={Style.title}>{ title }</h1>
            </header>
        );
    }
  }
  
  export default Header;