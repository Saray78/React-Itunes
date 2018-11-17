import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import './Button.css'
export default function Button(props) {
    return(
        <button disabled={props.term === ''}>{
            props.isLoading
                ? <Spinner className="spinner" name="circle" fadeIn='none' color="dark-blue"/>
                : props.label
        }</button>
    )
}
Button.propTypes = {
    term: PropTypes.string,
    label: PropTypes.any,
    isLoading: PropTypes.bool
};