import React, { Component } from 'react'
import { AUTH_TOKEN } from '../../../constants'
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import Header from "../Header";

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    render() {
        const { email, password } = this.state
        const { t } = this.props;

        return (
            <div>
                <Header />
                <div className="page-holder d-flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center py-5">
                            <div className="col-5 col-lg-7 mx-auto mb-5 mb-lg-0">
                                <div className="pr-lg-5"><img src="img/login.svg" alt="Login" className="img-fluid"></img></div>
                            </div>
                            <div className="col-lg-5 px-lg-4">
                                <h1 className="text-base text-primary text-uppercase mb-4">SpaceFides Dashboard</h1>
                                <h2 className="mb-4">{t('login.title')}</h2>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <form id="loginForm" action="index.html" className="mt-4">
                                    <div className="form-group mb-4">
                                        <input
                                            value={email}
                                            onChange={e => this.setState({ email: e.target.value })}
                                            type="text"
                                            placeholder={t('login.email_placeholder')}
                                            className="form-control border-0 shadow form-control-lg"
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            value={password}
                                            onChange={e => this.setState({ password: e.target.value })}
                                            type="password"
                                            placeholder={t('login.password_placeholder')}
                                            className="form-control border-0 shadow form-control-lg text-violet"
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <button className="btn btn-primary shadow w-100">
                                                {t('login.button')}
                                            </button>
                                        </div>
                                        <div className="col-lg-5 text-center my-auto">
                                            <Link to="/signup" >
                                                {t('signup.button')}
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <p className="mt-5 mb-0 text-gray-400 text-center">Design by <a href="https://bootstrapious.com/admin-templates" className="external text-gray-400">Bootstrapious</a> & TechFides</p>
                    </div>
                </div>
            </div>
        )
    }

    _confirm = async data => {
        const { token } = data.login
        this._saveUserData(token)
        this.props.history.push(`/account`)
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

export default withTranslation()(Login)