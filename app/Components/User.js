import React, { Component } from 'react'
import { connect } from "react-redux";
import { reloadLogIn } from "../Store/Actions/userActions";
import { AsyncStorage, Text, View } from 'react-native';

class User extends Component {

    componentDidMount() {

        if (AsyncStorage.getItem('token') && !this.props.token) {
            this.props.reloadLogInNow();
        }

    }

    render() {
        return (
            <View>
                {/* {console.log(this.props.user)}
                {this.props.user ? <Text>Hello, {this.props.user}! </Text> : <Text></Text>} */}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        reloadLogInNow: () => dispatch(reloadLogIn())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);