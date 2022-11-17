import React, { Component } from 'react';
import './Tools.css';

class ResultComponent extends Component {

    render() {
        let { result } = this.props;
        return (

            <div className="result">

                {/* Display result */}
                <div id='display'>
                    <p className='result'>{result}</p>
                </div>
            </div>
        )
            ;
    }
}


export default ResultComponent;