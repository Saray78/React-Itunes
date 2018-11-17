import React, {Component} from 'react';
import './Searcher.css'
import PropTypes from 'prop-types';
import Button from '../Button/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import fontawesome from "@fortawesome/fontawesome";
import {faSearch, faTh, faThList} from '@fortawesome/free-solid-svg-icons'

fontawesome.library.add(faSearch, faTh, faThList);

export default class Searcher extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            textToSearch: '',
            isGrid: true,
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeView = this.onChangeView.bind(this);
    }

    onChange(e) {
        this.setState({
            textToSearch: e.currentTarget.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        let term: string = this.state.textToSearch;
        if (term && term.includes(' ')) {
            term = term.split(' ').join('+');
        }
        this.props.onSubmit(term);
    }

    onChangeView(isGrid: boolean) {
        this.props.onChangeView(isGrid);
    }

    static addClassActive(isGrid: boolean){
        return isGrid ? 'active' : ''
    }

    render() {
        return (
            <div className="container">
                <nav>
                    <div className="nav-wrapper">
                        <div className="header-search-wrapper">
                            <form className='Searcher' onSubmit={this.onSubmit}>
                                <div className="control-group">
                                    <input
                                        className="form-control"
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
                                    {/*Grid-Vertical*/}
                                    <div onClick={() => this.onChangeView(true)}
                                         className={"cards-position " + (Searcher.addClassActive(this.props.isGrid))}
                                         alt="grid"
                                         title="Grid"><FontAwesomeIcon icon="th"/>
                                    </div>
                                    <div onClick={() => this.onChangeView(false)}
                                         className={"cards-position " + (Searcher.addClassActive(!this.props.isGrid))}
                                         alt="vertical"
                                         title="Vertical"><FontAwesomeIcon icon="th-list"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

Searcher.propTypes = {
    isLoading: PropTypes.bool,
    isGrid: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    onChangeView: PropTypes.func
};

Searcher.defaultProps = {
    onSubmit: () => {
    },
    onChangeView: () => {
    }
};