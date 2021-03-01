import React from 'react'
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import PropTypes from 'prop-types'


const children = [
    <MenuItem key="2">Написать нам</MenuItem>,
    <MenuItem key="3">Заказы</MenuItem>,
    <MenuItem key="4">О нас</MenuItem>,
];

class MenuHeader extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    handleClick(e){
        console.log(e)
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                mode={"horizontal"}
                style={{margin:0}}
            >
                {children}
            </Menu>
        )
    }
}

MenuHeader.propTypes={
    title : PropTypes.string
}


export default MenuHeader