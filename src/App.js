import React, {Component} from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faStroopwafel} from "@fortawesome/free-solid-svg-icons";
import FeedbackMessage from "./components/FeedbackMessage";
library.add(faStroopwafel);


const API_URL = 'https://itunes.apple.com';

export default class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            status: 'init',
            results: [],
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(term: string) {
        this.setState({
            isLoading: true,
            status: 'loading'
        });
        const FETCH_URL = `${API_URL}/search?term=${term}&media=music&entity=album&limit=20`;
        fetch(FETCH_URL)
            .then(res => res.json())
            .then(res => {

                this.setState({
                    status: res.results.length === 0 ? 'no content' : 'content',
                    results: res.results,
                    isLoading: false,
                });
                console.log(this.state)
            })
            .catch(e => this.setState({status: 'error', isLoading: false}));
    }

    render() {
        return (
            <div>
                <header className="text-center dark-blue">
                    <Header
                        isLoading={this.state.isLoading}
                        onSubmit={this.onClick}/>
                </header>
                <div className={"container my-4 " + (this.state.status === 'content' ? 'wrapper' : '')}>
                    {this.state.status === 'content'
                        ? this.state.results.map(item => {
                            return (
                                <Card
                                    item={item}
                                    key={item.collectionId}
                                />
                            )
                        }) : <FeedbackMessage status={this.state.status}/>
                    }
                </div>
            </div>
        );
    }
}

