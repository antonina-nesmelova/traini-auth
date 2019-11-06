import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Header from '../Header';

import agent from '../../../redux/agent'
import { connect } from 'react-redux';
import {
    UPDATE_FIELD_AUTH,
    REGISTER,
    REGISTER_PAGE_UNLOADED
} from '../../../redux/constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
    onChangeEmail: value =>
        dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
    onChangePassword: value =>
        dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
    onChangeUsername: value => {
        dispatch({ type: UPDATE_FIELD_AUTH, key: 'name', value })
    },
    onSubmit: (username, email, password) => {
        const payload = agent.Auth.register(username, email, password);
        dispatch({ type: REGISTER, payload })
    },
    onUnload: () =>
        dispatch({ type: REGISTER_PAGE_UNLOADED })
});

class SignUp extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
        this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
        this.changePassword = ev => this.props.onChangePassword(ev.target.value);
        this.changeUsername = ev => this.props.onChangeUsername(ev.target.value);
        this.submitForm = (username, email, password) => ev => {
            ev.preventDefault();
            console.log(username)
            console.log(email)
            console.log(password)
            this.props.onSubmit(username, email, password);
        }
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        const email = this.props.email;
        const password = this.props.password;
        const name = this.props.name;
        const { t } = this.props

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
                                <h2 className="mb-4">{t('signup.title')}</h2>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <form
                                    id="loginForm"
                                    onSubmit={this.submitForm(name, email, password)}
                                    className="mt-4">
                                    <div className="form-group mb-4">
                                        <input
                                            value={this.props.username}
                                            onChange={this.changeUsername}
                                            type="text"
                                            placeholder={t('signup.name_placeholder')}
                                            className="form-control border-0 shadow form-control-lg text-violet"
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            value={this.props.email}
                                            onChange={this.changeEmail}
                                            type="text"
                                            placeholder={t('signup.email_placeholder')}
                                            className="form-control border-0 shadow form-control-lg"
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            value={this.props.password}
                                            onChange={this.changePassword}
                                            type="password"
                                            placeholder={t('signup.password_placeholder')}
                                            className="form-control border-0 shadow form-control-lg text-violet"
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <button
                                                className="btn btn-primary shadow w-100"
                                                disabled={this.props.inProgress}
                                                type="submit">
                                                {t('signup.button')}
                                            </button>
                                        </div>
                                        <div className="col-lg-5 text-center my-auto">
                                            <Link to="/login" >
                                                {t('login.button')}
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
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(SignUp))