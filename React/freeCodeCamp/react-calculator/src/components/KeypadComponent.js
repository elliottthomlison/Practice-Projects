import React, { Component } from 'react';

class KeyPadComponent extends Component {
    render() {
        return (
            <div className="button">
                {/* first row */}
                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="x" onClick={e => this.props.onClick(e.target.name)}>x</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
                {/* second row */}
                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="x" onClick={e => this.props.onClick(e.target.name)}>x</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
                {/* third row */}
                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>

                {/* equal button and 4x4 */}
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                
                {/* fourth row */}
                <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
            </div>
        )
    }
}

export default KeyPadComponent;