import React, { Component } from 'react'
import { StyleSheet, TextInput, Text, View, KeyboardAvoidingView, TouchableOpacity, Image, Button } from 'react-native'
import { connect } from "react-redux";
import { logUser } from "../Store/Actions/userActions";
import HomeComponent from './HomeComponent';

class LoginScreen extends React.Component {

    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {

        super(props);

        this.state = {
            username: '',
            password: '',
            image: '',
            email: '',
            firstname: '',
            lastname: '',
            country: '',
            isGoogle: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    redirect = (screen) => {
        const { navigate } = this.props.navigation;
        navigate(screen);
    }

    handleSubmit() {
        this.props.logUserNow(this.state)
            .then((data) => {

                if (data === false) {

                    alert("You are successfully logged!");
                    this.props.navigation.navigate('Home');
                    

                } else {

                    alert("Incorrect username or password")
                }
            })
            .catch(error => console.log(error));
    }


    render() {

        const { navigate } = this.props.navigation;

        return (

            <View style={styles.container}>
                <Image style={styles.imgLogo} source={require('../assets/img/myTin.jpg')} />

                <TextInput
                    placeholder="Username or email"
                    placeholderTextColor="gray"
                    style={styles.input}
                    onChangeText={text => this.setState({ email: text})} />

                <TextInput
                    placeholder="password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    style={styles.input}
                    onChangeText={text => this.setState({ password: text})} />

                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                    <Text style={styles.colortextbutton}>LOGIN</Text>
                </TouchableOpacity>

                <HomeComponent navigate={navigate}/>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logUserNow: user =>
            dispatch(logUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'lightgrey',
        padding: 20,
        // justifyContent: 'center'
        //justifyContent: 'space-between'
    },
    logoSolo: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 80,
        width: 80,
    },
    imgHome: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: "105%",
    },
    input: {
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: 'lightgrey',
        color: 'black'
    },
    button: {
        backgroundColor: '#3399FF',
        // borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        height: 20,
        width: 60,
        justifyContent: 'center',
        alignSelf: 'center'
        // marginBottom: 10
    },
    colortextbutton: {
        color: 'white'
    },
    imgLogo: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 50
    }
});