import React, { Component } from 'react'
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import { connect } from "react-redux";
import { logUser } from "../Store/Actions/userActions";
import axios from 'axios'

class CreateAccountScreen extends React.Component {

    static navigationOptions = {
        title: 'Create Account',
    };

    constructor(props) {

        super(props)

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

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit() {

        axios.post('https://mytinerary-grupo2.herokuapp.com/api/users/adduser/', this.state)
            .then(res => {

                if (res.data === 'x') {

                    alert("ERROR: The email you entered already has an associated account");

                } else {

                    alert("Your account has been successfully created!");

                    this.props.logUserNow(this.state)
                        .then((data) => {

                            if (data === false) {

                                alert("You are successfully logged!");
                                // this.props.history.push("/index");

                            } else {

                                alert("Incorrect username or password")
                            }
                        })
                        .catch(error => console.log(error));
                }
            })
            .catch(error => console.log(error))
    }

    render() {

        const { navigate } = this.props.navigation;

        return (

            <ScrollView>
            
                <View style={styles.container}>
            
                    <Image style={styles.imgLogo} source={require('../assets/img/MYtineraryLogo2.png')} />

                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="gray"
                        style={styles.input} 
                        onChangeText={text => this.setState({ username: text })} />

                    <TextInput
                        placeholder="password"
                        placeholderTextColor="gray"
                        secureTextEntry
                        style={styles.input}
                        onChangeText={text => this.setState({ password: text })} />

                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="gray"
                        style={styles.input}
                        onChangeText={text => this.setState({ email: text })} />

                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor="gray"
                        style={styles.input}
                        onChangeText={text => this.setState({ firstname: text })} />

                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor="gray"
                        style={styles.input}
                        onChangeText={text => this.setState({ lastname: text })} />

                    <TextInput
                        placeholder="Country"
                        placeholderTextColor="gray"
                        style={styles.input} 
                        onChangeText={text => this.setState({ country: text })} />

                    <TextInput
                        placeholder="Profile Photo URL"
                        placeholderTextColor="gray"
                        style={styles.input}
                        onChangeText={text => this.setState({ image: text })} />

                    <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                        <Text style={styles.colortextbutton}>SUBMIT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.imgHome} onPress={() => navigate('Home')}>
                        <Image style={styles.logoSolo} source={require('../assets/img/homeIcon.png')} />
                    </TouchableOpacity>

                </View>

            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'lightgrey',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoSolo: {
        height: 80,
        width: 80,
    },
    imgHome: {
        //paddingTop: "105%",    
    },
    input: {
        height: 40,
        marginBottom: 20,
        width: "100%",
        backgroundColor: 'lightgrey',
        color: 'black'
    },
    // button: {
    //     // backgroundColor: '#00bfff',
    //     height: 40,
    //     // width: 60,
    //     justifyContent: 'center',
    //     alignSelf: 'center',

    //     marginBottom: 20
    // },
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