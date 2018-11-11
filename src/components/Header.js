import React, { Component } from 'react';
import './Header.css'
import PropTypes from 'prop-types';
import Button from './Button'
// import {FontAwesome} from ''
export default class Header extends Component{
    constructor(...args){
        super(...args);
        this.state = {
            textToSearch: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            textToSearch: e.currentTarget.value
        })
    }

    onSubmit(e){
        console.log(e);
        e.preventDefault();
        this.props.onSubmit(this.state.textToSearch);
    }

    render(){
        return (
            <div className="navbar-fixed">
                <nav className ="dark-blue">
                    <div className="nav-wrapper">
                        <div className="header-search-wrapper">
                            {/*<FontAwesome className="check-square"/>*/}
                            <i className="fas fa-search">Search</i>
                            <form className='Searcher' onSubmit={this.onSubmit}>
                                <input
                                    disabled={this.props.isLoading}
                                    onChange={this.onChange}
                                    placeholder='Find a Character'
                                    type='text'/>
                                <Button
                                    isLoading={this.props.isLoading}
                                    label='Search'
                                />

                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

Header.propTypes = {
    isLoading: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired
};

Header.defaultProps = {
    onSubmit: ()=> {}
};