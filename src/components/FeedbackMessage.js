/**
 * Created by Blue Butterfly on 14/11/2018.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import './FeedbackMessage.css'

export default class FeedbackMessage extends Component{
    constructor(...args){
        super(...args);
        this.status =
            [
                {
                    status: 'init',
                    feedbackMessage: 'Search albums'
                },

                {
                    status: 'loading',
                    feedbackMessage: 'Loading...'
                },
                {

                    status: 'no content',
                    feedbackMessage: 'No matching data'
                },
                {
                    status: 'error',
                    feedbackMessage: 'Error getting data'
                }
            ]
    }

    render(){
        return(
            <div className="message text-center">
                <span>{this.props.status === 'loading'? <Spinner className="load" name="circle" fadeIn='none' color="black" /> : null}{this.status ? this.status.find(e=> e.status === this.props.status) ? this.status.find(e=> e.status === this.props.status).feedbackMessage : null : null}</span>
            </div>
        );
    }

}
FeedbackMessage.propTypes = {
    status: PropTypes.any
};