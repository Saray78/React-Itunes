import React, { Component } from 'react';
import './Header.css'
import PropTypes from 'prop-types';
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from "@fortawesome/fontawesome";
import { faSearch, faTh, faThList} from '@fortawesome/free-solid-svg-icons'

fontawesome.library.add(faSearch, faTh, faThList);

export default class Header extends Component{
    constructor(...args){
        super(...args);
        this.state = {
            textToSearch: '',
            isGrid: true,
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeView = this.onChangeView.bind(this);
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

    onChangeView(isGrid: boolean){
        this.props.onChangeView(isGrid);
    }



    render(){
        return (
            <div className="container">
                <nav>
                    <div className="nav-wrapper">
                        <div className="header-search-wrapper">
                            <form className='Searcher' onSubmit={this.onSubmit}>
                                <div className={"control-group " +
                                (this.state.textToSearch === '' ? 'error' : '' )}>
                                <input
                                    className={"form-control " +
                                    (this.state.textToSearch === '' ? 'is-invalid' : '' )}
                                    disabled={this.props.isLoading}
                                    onChange={this.onChange}
                                    placeholder='Search'
                                    type='text'
                                    required

                                />
                                <Button
                                    term={this.state.textToSearch}
                                    isLoading={this.props.isLoading}
                                    label={<FontAwesomeIcon icon="search"/>}
                                />
                                    <div onClick={() => this.onChangeView(true)} className={"cards-position grid " + (this.props.isGrid ? 'active' : '')} alt="grid"> <FontAwesomeIcon icon="th"/></div>
                                    <div onClick={() => this.onChangeView(false)} className={"cards-position grid " + (!this.props.isGrid ? 'active' : '')} alt="vertical"> <FontAwesomeIcon icon="th-list"/></div>
                                </div>

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
    isGrid: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    onChangeView: PropTypes.func
};

Header.defaultProps = {
    onSubmit: ()=> {},
    onChangeView: ()=> {}
};