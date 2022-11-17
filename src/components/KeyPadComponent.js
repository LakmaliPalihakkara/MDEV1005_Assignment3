import React, {Component} from 'react';
import './Tools.css';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="buttons">
                {/* Pass clicked button name */}
                <button id='cal-pad' name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button id='cal-pad' name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button id='cal-pad' name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button id='cal-pad' name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>


                <button id='cal-pad' name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button id='cal-pad' name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button id='cal-pad' name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button id='cal-pad' name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button id='cal-pad' name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button id='cal-pad' name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button id='cal-pad' name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button id='cal-pad' name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button id='cal-pad' name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button id='cal-pad' name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button id='cal-pad' name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button id='cal-pad' name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button id='cal-pad' name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button id='cal-pad' name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button id='cal-pad' name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button id='cal-pad' name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;