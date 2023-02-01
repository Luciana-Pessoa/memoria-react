import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GameOver extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                 <div id="gameOver">
        <div>
            Parabéns, você completou o jogo!
        </div>
        <button id="restart">Jogue novamente</button>
    </div>
            </div>
        );
    }
}

GameOver.propTypes = {

};

export default GameOver;