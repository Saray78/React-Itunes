import React, { Component } from 'react';
import './Header.css'
import PropTypes from 'prop-types';
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from "@fortawesome/fontawesome";
import { faSearch} from '@fortawesome/free-solid-svg-icons'

fontawesome.library.add(faSearch);

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
        let term: string = this.state.textToSearch;
        console.log(e);
        e.preventDefault();
        if(term && term.includes(' ')){
            term = term.split(' ').join('+');
            console.log(term);
        }
        this.props.onSubmit(term);
    }

    render(){
        return (
            <div className="navbar-fixed">
                <nav className ="dark-blue">
                    <div className="nav-wrapper">
                        <div className="header-search-wrapper">
                            {/*<FontAwesomeIcon icon="search"/>*/}
                            <form className='Searcher' onSubmit={this.onSubmit}>
                                <input
                                    disabled={this.props.isLoading}
                                    onChange={this.onChange}
                                    placeholder='Find a Character'
                                    type='text'/>
                                <Button
                                    isLoading={this.props.isLoading}
                                    label={<FontAwesomeIcon icon="search"/>}
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