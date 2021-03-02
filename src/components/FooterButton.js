import React from 'react'
import axios from 'axios'

const classNameBlock = (e) => {
    return e ? "o2t-element" : " o2t-element--hidden o2t-element"
}

const classNameHigh = (e) => {
    return e ? " fixed-high" : ""
}
const hostname = window.location.hostname


class FooterButton extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            openDialog: false,
            errorPhone: false,
            phone: undefined,
            comment: undefined,
            name: undefined,
        }
    }


    handleClick = (e) => {
        this.setState({ openDialog: e , errorPhone: false})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.phone) {
            this.setState({
                errorPhone: true
            })
            return;
        }
        axios.get('http://'+hostname+':8081/sendEmail?body='+(this.state.name + " " + this.state.phone + " " + this.state.comment))
        this.setState({ openDialog: false, errorPhone: false })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        const { openDialog, errorPhone } = this.state
        return (
            <div className={"fixed" + classNameHigh(openDialog)}>
                <div className={"dialog-inner " + classNameBlock(openDialog)}>
                    <div>
                        <span style={{ position: 'absolute', right: '12%' }} onClick={() => (this.handleClick(false))}>закрыть</span>
                        <h3>
                            Введите номер телефона
                        </h3>
                        <div className="form">
                            
                        <input name="name" onInput={this.handleChange} placeholder="Ваше Имя" />
                        {errorPhone ? <span style={{ color: 'red' }}>Неверный формат номера</span> : null}
                        <input type="tel" name="phone" onInput={this.handleChange} pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$" placeholder="+7" />
                        
                        <input type="text" name="comment" onInput={this.handleChange} placeholder="Комментарий (по желанию)" />

                        <button type="submit" onClick={this.handleSubmit}>Отправить</button>
                        </div>
                    </div>
                </div>
                <div className={"fixed-inner " + classNameBlock(!openDialog)} onClick={() => (this.handleClick(true))}>
                    <div>
                        Напишите нам прямо сейчас и мы перезвоним в течении 10 минут
                            </div>
                </div>
            </div>
        )
    }
}



export default FooterButton