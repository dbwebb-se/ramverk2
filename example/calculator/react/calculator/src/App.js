import React, { Component } from 'react';
import './App.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            decimals: null,
            previous: 0,
            operator: null,
            operatorClicked: false,
        };
    }

    clear() {
        this.setState({
            current: 0,
        });
    }

    sign() {
        this.setState({
            current: -this.state.current,
        });
    }

    percentage() {
        this.setState({
            current: this.state.current / 100,
        });
    }

    append(number) {
        if (this.state.operatorClicked) {
            this.setState({
                current: 0,
                decimals: null,
                operatorClicked: false,
            }, () => {
                this.appendNumber(number);
            });
        } else {
            this.appendNumber(number);
        }
    }

    appendNumber(number) {
        if (this.state.decimals) {
            this.setState({
                decimals: this.state.decimals + 1,
                current: this.state.current + number / 10**(this.state.decimals + 1),
            });
        } else {
            this.setState({
                current: this.state.current * 10 + number,
            });
        }
    }

    dot() {
        if (String(this.state.current).indexOf(".") === -1) {
            this.setState({
                decimals: 1,
            });
        }
    }

    setPrevious() {
        this.setState({
            previous: this.state.current,
            operatorClicked: true,
        });
    }

    divide() {
        this.setState({
            operator: (a, b) => a / b
        });
        this.setPrevious();
    }

    multiply() {
        this.setState({
            operator: (a, b) => a * b
        });
        this.setPrevious();
    }

    subtract() {
        this.setState({
            operator: (a, b) => a - b
        });
        this.setPrevious();
    }

    add() {
        this.setState({
            operator: (a, b) => a + b
        });
        this.setPrevious();
    }

    equal() {
        this.setState({
            current: this.state.operator(
                this.state.current,
                this.state.previous
            ),
            previous: 0,
        });
    }

    render() {
        return (
            <div className="calculator">
                <div className="display">{ this.state.current || 0 }</div>
                <div onClick={() => this.clear()} className="btn">C</div>
                <div onClick={() => this.sign()} className="btn">+/-</div>
                <div onClick={() => this.percentage()} className="btn">%</div>
                <div onClick={() => this.divide()} className="btn operator">÷</div>
                <div onClick={() => this.append(7)} className="btn">7</div>
                <div onClick={() => this.append(8)} className="btn">8</div>
                <div onClick={() => this.append(9)} className="btn">9</div>
                <div onClick={() => this.multiply()} className="btn operator">x</div>
                <div onClick={() => this.append(4)} className="btn">4</div>
                <div onClick={() => this.append(5)} className="btn">5</div>
                <div onClick={() => this.append(6)} className="btn">6</div>
                <div onClick={() => this.subtract()} className="btn operator">-</div>
                <div onClick={() => this.append(1)} className="btn">1</div>
                <div onClick={() => this.append(2)} className="btn">2</div>
                <div onClick={() => this.append(3)} className="btn">3</div>
                <div onClick={() => this.add()} className="btn operator">+</div>
                <div onClick={() => this.append(0)} className="btn zero">0</div>
                <div onClick={() => this.dot()} className="btn">.</div>
                <div onClick={() => this.equal()} className="btn operator">=</div>
            </div>
        );
    }
}


class App extends Component {
  render() {
    return (
        <Calculator />
    );
  }
}

export default App;
