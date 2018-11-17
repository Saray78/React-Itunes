import React, {Component} from "react";
import "./App.css";
import Searcher from "./components/Searcher/Searcher";
import Card from "./components/Card/Card";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faStroopwafel} from "@fortawesome/free-solid-svg-icons";
import FeedbackMessage from "./components/FeedbackMessage/FeedbackMessage";
library.add(faStroopwafel);


const API_URL = 'https://itunes.apple.com';

export default class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            status: 'init',
            isGrid: true,
            isLoading: false,
            results: [],
        };
        this.searchAlbum = this.searchAlbum.bind(this);
        this.changeView= this.changeView.bind(this);
    }

    changeView(isGrid: boolean){
        this.setState({
            isGrid: isGrid
        })
    }

    searchAlbum(term: string) {
        this.setState({
            isLoading: true,
            status: 'loading'
        });
        const FETCH_URL = `${API_URL}/search?term=${term}&entity=album&limit=20`;
        fetch(FETCH_URL)
            .then(res => res.json())
            .then(resp => {
                this.setState({
                    status: resp.results.length === 0 ? 'no content' : 'content',
                    results: resp.results,
                    isLoading: false,
                });
            })
            .catch(e => this.setState({status: 'error', isLoading: false}));
    }

    render() {
        return (
            <div>
                <header className="text-center dark-blue">
                    <Searcher
                        isGrid={this.state.isGrid}
                        isLoading={this.state.isLoading}
                        onChangeView={this.changeView}
                        onSubmit={this.searchAlbum}
                    />
                </header>
                <div className={"container my-4 " + (this.state.status === 'content' &&
                    this.state.isGrid ? 'wrapper' : 'vertical-wrapper')}>
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

