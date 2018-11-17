/**
 * Created by Saray Balbuena
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import './FeedbackMessage.css'

export default class FeedbackMessage extends Component {
    constructor(...args) {
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

    getFeedbackMessage(st: string) {
        let status = this.status.find(e => e.status === st);
        if (status) return status.feedbackMessage;
    }

    static getSpinner(st: string) {
        return st === 'loading' ? <Spinner className="load" name="circle" fadeIn='none' color="black"/> : null;
    }

    render() {
        return (
            <div className="message text-center">
                <span>{FeedbackMessage.getSpinner(this.props.status)}{this.getFeedbackMessage(this.props.status)}</span>
            </div>
        );
    }

}
FeedbackMessage.propTypes = {
    status: PropTypes.string
};