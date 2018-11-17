import React from "react";
import FeedbackMessage from "./FeedbackMessage";

function newClass() {
   return new FeedbackMessage();
}

function getFeedbackMessageByStatus(status: string) {
    let feedbackMessage = newClass();
    return feedbackMessage.getFeedbackMessage(status);
}

function getSpinnerByStatus(status: string) {
    return FeedbackMessage.getSpinner(status);
}

function checkFeedbackMessage(status: string, message: string) {
   let messageByStatus = getFeedbackMessageByStatus(status);
    expect(messageByStatus).toEqual(message);
}

function checkSpinner(status: string) {
    let spinner = getSpinnerByStatus(status);
    status === 'loading' ? expect(spinner).not.toEqual(null) : expect(spinner).toEqual(null)
}

it('feedbackMessage and spinner when init the app', () => {
    checkFeedbackMessage('init', 'Search albums');
    checkSpinner('init');
});

it('feedbackMessage and spinner when searching albums', () => {
    checkFeedbackMessage('loading', 'Loading...');
    checkSpinner('loading');
});

it('feedbackMessage and spinner when data is empty', () => {
    checkFeedbackMessage('no content', 'No matching data');
    checkSpinner('no content');
});

it('feedbackMessage and spinner when data is not empty', () => {
    checkFeedbackMessage('content', undefined);
    checkSpinner('content');
});

it('feedbackMessage and spinner when there are an error', () => {
    checkFeedbackMessage('error', 'Error getting data');
    checkSpinner('error');
});