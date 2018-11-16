import React, { Component } from 'react';

class MessageBoard extends Component {
    render () {
        return (
            <div className="message-board">
                <h1>{ this.props.message }</h1>
                <p>- {this.props.author}</p>
            </div>
        )
    }
}

class FetchMessageButton extends Component {
    render () {
        return (
            <button
                className="fetch-message-button"
                onClick={ this.props.onClick }>
                Fetch quote of the day
            </button>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "No message yet!",
            author: "",
            clicked: false,
        };
    }

    handleClick() {
        let that = this;
        fetch('http://quotes.rest/qod.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                console.log(result)
                that.setState({
                    clicked: true,
                    message: result.contents.quotes[0].quote,
                    author: result.contents.quotes[0].author,
                });
            });
    }

    render() {
        return (
            <div className="root">
                <MessageBoard
                    message={ this.state.message }
                    author={ this.state.author }
                />
                <FetchMessageButton onClick={() => this.handleClick()} />
            </div>
        );
    }
}

export default App;
