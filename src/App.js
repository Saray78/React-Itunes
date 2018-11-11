import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Card from './components/Card'
// library.add(faStroopwafel);
// library.add(faEnvelope, faKey);

const API_URL = 'https://itunes.apple.com';

export default class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            initialState: true,
            isLoading: false,
            results: [],
        };
        this.onClick = this.onClick.bind(this);
    }

        onClick(term: string){
            // console.log(term);
            this.setState({
                initialState: false,
                isLoading: true
            });
            const FETCH_URL = `${API_URL}/search?term=${term}&entity=album&limit=20`;
            fetch(FETCH_URL)
                .then(res => res.json())
                .then(res => {

                    this.setState({
                        results: res.results,
                        isLoading: false,
                    });
                    console.log(this.state)
                })
                .catch(err => {
                    this.setState({isLoading: false});
                    console.log(err);
                })

        }


  render() {
    return (
      <div>
        <header className="text-center">
         <Header
             isLoading={this.state.isLoading}
             onSubmit={this.onClick}/>
        </header>
          <div className="container">
              {this.state.results.map(item => {
                  return(
                      <Card item={item}/>
                  )
              })}
            {/*<Card item={this.state.results}/>*/}
          </div>
      </div>
    );
  }
}

