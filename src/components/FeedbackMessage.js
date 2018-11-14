/**
 * Created by Blue Butterfly on 14/11/2018.
 */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

// import './Card.css'

export default class FeedbackMessage extends Component{
    // constructor(...args){
    //     super(...args);
    // }

    render(){
        return(
            <div className="message"><span>
                <Spinner name="circle" fadeIn='none' color="black" />Loading...</span>
            </div>
        );
    }

}
// FeedbackMessage.propTypes = {
//     item: PropTypes.Array
// };