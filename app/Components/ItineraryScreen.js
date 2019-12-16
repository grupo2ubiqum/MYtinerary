import React from 'react';
import axios from 'axios'
import { Text, View, ScrollView, TouchableHighlight, StyleSheet, TextInput,Image } from 'react-native';
import { List, ListItem, withTheme } from 'react-native-elements'
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ActivityCarousel from './ActivityCarousel';
import HomeComponent from './HomeComponent';

import ImageWithName from './ImageWithName'
import { connect } from "react-redux";

class ItineraryScreen extends React.Component {

    constructor(props) {
        super();

        this.props = props;

        this.state = {
            city: this.props.navigation.state.params.city,
            itineraries: [],
            fav: "red",
            type: "heart",
            newComment: '',
            itineraryCommented: ''
        }

        this.addComment = this.addComment.bind(this)
        this.deleteComment = this.deleteComment.bind(this)

    }

    async componentDidMount() {
        var city_name = this.state.city.name;
        const data = await axios.get(`https://mytinerary-grupo2.herokuapp.com/api/itineraries/${city_name}`)
        this.setState({ itineraries: data.data.itinerariesForACity })

    }

    checkFavourites(itinerary) {

        if (!itinerary.favouriteUsers || this.props.user.username.length === 0) {
            return "black"
        }

        for (var i = 0; i < itinerary.favouriteUsers.length; i++) {

            if (itinerary.favouriteUsers[i] === this.props.user.username)
                return "red"
        }

        return "black"

    }

    async changeFavourites(itinerary, fav) {

        var city_name = this.state.city.name;

        if (fav === true) {

            const data = await axios.put(`https://mytinerary-grupo2.herokuapp.com/api/itineraries/favon/${city_name}`, {
                title: itinerary.title,
                user: this.props.user.username
            })

            this.setState({ itineraries: data.data.itinerariesForACity })
        }

        if (fav === false) {

            const data = await axios.put(`https://mytinerary-grupo2.herokuapp.com/api/itineraries/favoff/${city_name}`, {
                title: itinerary.title,
                user: this.props.user.username
            })

            this.setState({ itineraries: data.data.itinerariesForACity })

        }
    }

    async addComment() {

        if(this.props.user.username.length == 0) {
            alert("Please log in to add comments")
            return
        }
        var city_name = this.state.city.name;

        await axios.put(`https://mytinerary-grupo2.herokuapp.com/api/itineraries/${city_name}`, this.state)
            .then(response => this.setState({ itineraries: response.data.itinerariesForACity }))
            .catch(error => console.log(error))

    }

    async deleteComment(comentario, index, title) {

        if(this.props.user.username.length == 0){
            alert("Please log in to delete comments")
            return
        }

        var city_name = this.state.city.name;

        axios.post(`https://mytinerary-grupo2.herokuapp.com/api/itineraries/del/${city_name}`, {
            key: index,
            comment: comentario,
            title: title
        })
            .then(response => this.setState({ itineraries: response.data.itinerariesForACity }))
            .catch(error => console.log(error))

    }

    render = () => {
        const { navigate } = this.props.navigation;
        return (
            <View>
            <ScrollView>
                <View style={{ flex: 1, width: '90%', marginBottom:'13%'}}>

                    <ImageWithName city={this.state.city} width={"100%"} navigate={this.props.navigate} />

                    {this.state.itineraries.length != 0 ?

                        this.state.itineraries.map((user, i) => {

                            return <ListItem key={i}

                                title={user.username}
                                subtitle={

                                    <View>
                                        <View style={{marginBottom:'25%'}}>
                                            <Text>{user.country}</Text>
                                            <Text>{user.city}</Text>
                                            <Text>{user.title}</Text>
                                            <Text>{user.rating}</Text>
                                            <Text>{user.duration}</Text>
                                            <Text>{user.price}</Text>
                                            <Text>{user.hashtags}</Text>
                                        </View>    
                                        {console.log(user.activities)}
                                        <ActivityCarousel activities={user.activities} />
                                        

                                        {user.comments.map((comentario, index) => {
                                            return (
                                                <View key={index}>
                                                    <Text>{comentario}</Text>
                                                    <TouchableHighlight
                                                        style={styles.button}
                                                        onPress={
                                                            () => this.deleteComment(comentario, index, user.title)} >
                                                        <Text style={styles.textButton}>Delete</Text>
                                                    </TouchableHighlight>
                                                </View>
                                            )


                                        })}

                                        <TextInput
                                            style={styles.input}
                                            onChangeText={(text) => this.setState({ newComment: text, itineraryCommented: user.title })}
                                        >
                                        </TextInput>

                                        <TouchableHighlight
                                            style={styles.button}
                                            onPress={this.addComment} >
                                            <Text style={styles.textButton}>Comment</Text>
                                        </TouchableHighlight>

                                    

                                    </View>
                                }

                                leftAvatar={{ source: { uri: user.userPhoto } }}


                                rightAvatar={
                                    <TouchableHighlight

                                        onPress={
                                            () => {

                                                if (this.checkFavourites(user) === "black") {
                                                    this.changeFavourites(user, true)
                                                } else {
                                                    this.changeFavourites(user, false)
                                                }

                                            }}
                                        {...this.state.isLoggedIn}
                                    >
                                    <AntDesign name="heart" size={30} color={this.checkFavourites(user)} />
                                    </TouchableHighlight>

                                }

                                bottomDivider

                            />

                        }
                        )

                        :
                        <View style={{height:425, backgroundColor:"white",justifyContent:'center',alignItems:'center'}}>

                            <Image source={require('../assets/loading.gif')} style={{width:200, height:200 }} />
                        
                        </View>
                    }
    
                </View>
            </ScrollView>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        
    },
    header: {
        flexDirection: 'row',
    },
    input: {
        marginLeft: 10,
        marginTop: 10,
        width: 250,
        height: 40,
        borderColor: 'red',
        borderWidth: 1
    },
    button: {
        alignItems: 'center',
        width: 70,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 4,
        marginLeft: 10,
        marginTop: 10
    },
    textButton: {
        marginTop: 10,
        color: 'white'
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 350,
        height: 70,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonItem: {
        alignItems: 'center',
        width: 70,
        height: 40,
        backgroundColor: '#FF7979',
        borderRadius: 2,
        marginLeft: 10,
    },
    textItem: {
        marginLeft: 30,
    }
});

export default connect(mapStateToProps)(ItineraryScreen);