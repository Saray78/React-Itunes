/**
 * Created by Blue Butterfly on 11/11/2018.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css'

export default class Card extends Component{
    // constructor(...args){
    //     super(...args);
    // }

    render(){
        const item = this.props.item;
        return(
          <div className="card-wrapper">
              {/*<div className="grid">*/}
                  <div className="card">
                  <div className="card-header">
                    <img key={item.trackId} className="image" alt="it" src={item.artworkUrl100.replace('100x100', '300x300')}/>
                    {/*<img alt="it" src={item.artworkUrl100}/>*/}
                  </div>
                  <div className="card-footer"></div>
              </div>
              </div>
          // </div>
        );
    }

}
Card.propTypes = {
    item: PropTypes.object
};