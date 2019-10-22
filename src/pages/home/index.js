// containers/Home.js
import React from 'react';
import { connect } from 'react-redux';
import { changeName, getWeather } from './action';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // this.props.getWeather();
    }

    linkToUser() {
        this.props.history.push('/user');
    }

    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <button onClick={() => this.props.changeName('lilei')}>
                    changeName
                </button>
                <br />
                <button onClick={() => this.linkToUser()}>link user</button>
                <div>
                    <span>fetch code: </span>
                    <span>{this.props.weather && this.props.weather.code}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state, ownProps) {
    return { ...state.homeStore };
};

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        changeName: function(name) {
            dispatch(changeName('lilei'));
        }
        // getWeather: function() {
        //     dispatch(getWeather());
        // }
    };
};

Home.loadData = function(store) {
    return store.dispatch(getWeather());
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
