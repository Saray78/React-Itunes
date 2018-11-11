import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
export default function Button(props) {
    return(
        <button>{
            props.isLoading
                ? <Spinner name="circle" fadeIn='none' color="white"/>
                : props.label
        }</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    isLoading: PropTypes.bool
};