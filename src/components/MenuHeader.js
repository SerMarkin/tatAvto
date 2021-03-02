import React from 'react'
import Menu, { Item as MenuItem } from 'rc-menu';
import { Link } from "react-scroll";
import PropTypes from 'prop-types'


const children = [
    <MenuItem key="2" >
        <Link activeClass="active" to="section1" smooth duration={500}> Написать нам </Link>
    </MenuItem>,
    <MenuItem key="3" >
        <Link activeClass="active" to="section2" smooth duration={500}> Заказы </Link>
    </MenuItem>,
    <MenuItem key="4" >
        <Link activeClass="active" to="section3" smooth duration={500}> О нас </Link>
    </MenuItem>,
];

class MenuHeader extends React.PureComponent {
    render() {
        return (
            <Menu onClick={this.handleClick}
                mode={"horizontal"}
                style={
                    { margin: 0, borderBottom: 'none', borderRadius: 0, color: 'white', background: '#61ae56' }} >
                { children}
            </Menu>
        )
    }
}

MenuHeader.propTypes = {
    title: PropTypes.string
}


export default MenuHeader