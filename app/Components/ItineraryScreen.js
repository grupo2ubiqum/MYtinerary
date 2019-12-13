import React from 'react';
import axios from 'axios'
import { Text, View, ScrollView,TouchableHighlight } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Comentarios from './Comentarios';
import ImageWithName from './ImageWithName';


export default class ItineraryScreen extends React.Component {
    constructor(props) {
        super();

        this.props = props;

        this.state = {
            city: this.props.navigation.state.params.city,
            itineraries: [],
            fav: "red",
            type:"heart"
        }
    }
    


    async componentDidMount() {
        var city_name = this.state.city.name;
        const data = await axios.get(`https://mytinerary-grupo2.herokuapp.com/api/itineraries/${city_name}`)
        this.setState({ itineraries: data.data.itinerariesForACity })
    }

    render = () => {

        return (

            <ScrollView>
                <View style={{ flex: 1, width: '90%' }}>

                <ImageWithName city={this.state.city} width={"100%"} navigate={this.props.navigate}/>

                    {this.state.itineraries.map((user, i) => {

                        return <ListItem key={i}

                            title={user.username}
                            subtitle={
                                <View>
                                    <Text>{user.country}</Text>
                                    <Text>{user.city}</Text>
                                    <Text>{user.title}</Text>
                                    <Text>{user.rating}</Text>
                                    <Text>{user.duration}</Text>
                                    <Text>{user.price}</Text>
                                    <Text>{user.hashtags}</Text>
                                </View>
                            }
                            leftAvatar={{ source: { uri: user.userPhoto } }}
                            rightAvatar={
                                <TouchableHighlight
                                    // style={styles.button}
                                    onPress={
                                        () => {
                                            if(this.state.fav === "red")
                                                return this.setState({fav: "black", type:"hearto"})
                                            else return this.setState({fav: "red", type:"heart"})
                                        }} >
                                    <AntDesign name ={this.state.type} size={30} color={this.state.fav} />
                                </TouchableHighlight>}
                            // Component={Comentarios}
                            bottomDivider

                        />

                    })}

                </View>
            </ScrollView>
        );
    }
}