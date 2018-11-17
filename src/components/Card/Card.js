/**
 * Created by Saray Balbuena
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Card.css'

export default class Card extends Component {
    render() {
        const item = this.props.item;
        return (
            <div className="card-wrapper mr-3 my-2">
                <div className="card">
                    <div className="card-cover">
                        <img className="image" alt={item.artistName} src={item.artworkUrl100.replace('100x100', '1200x1200')}/>
                    </div>
                    <div className="card-footer">
                        <p className="card-title"><strong>{item.artistName}</strong></p>
                        <p className="card-text">{item.collectionName}</p>
                    </div>
                </div>
            </div>
        );
    }
}
Card.propTypes = {
    item: PropTypes.object
};