import React from 'react'

class FooterButton extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            openDialog : false
        }
    }

    handleClick(e){
        console.log(e)
    }

    render() {
        return (
            <div className="fixed">
                <div className="fixed-inner" onClick={this.handleClick}>Напишите нам прямо сейчас и мы перезвоним в течении 10 минут</div>
            </div>
        )
    }
}



export default FooterButton