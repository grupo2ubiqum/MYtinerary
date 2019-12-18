import React from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import ImageWithName from './ImageWithName';
import HomeComponent from './HomeComponent';

class CitiesScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            filteredCities: [],
            inputValue: "",
            cityNotFound: false
        }

        this.handleChange = this.handleChange.bind(this);
    }   

    static navigationOptions = {
        title: ' ',

    };

    async componentDidMount() {
        const data = await axios.get("https://mytinerary-grupo2.herokuapp.com/api/cities");
        this.setState({ cities: data.data.ciudadesFromRoutes, filteredCities: data.data.ciudadesFromRoutes});
    }

    async handleChange(inputValue){
        await this.setState({inputValue: inputValue});
        this.filterCities();
    }

    filterCities() {
        if (this.state.inputValue != '') {
            const citiesArray = this.state.cities.filter(
                ciudad =>
                    ciudad.name.toLowerCase().startsWith(this.state.inputValue.toLowerCase())
            );

            this.setState({ filteredCities: citiesArray, cityNotFound: citiesArray.length == 0 });
        } else {
            this.setState({ filteredCities: this.state.cities, cityNotFound: false });
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (<View>
            <View style={{marginTop:5}}>
            <ScrollView contentContainerStyle={styles.container}>
                <TextInput
                    style={{width: '90%', height: 50, textAlign: 'center', borderLeftWidth: 1,
                    borderRightWidth: 1,borderBottomWidth:1,borderTopWidth:1}}
                    name="inputValue"
                    placeholder="Search city"
                    onChangeText={this.handleChange}
                    value={this.state.inputValue}
                />

                {this.state.cityNotFound ? 
                    <View style={{marginBottom:'144%'}}><Text>City not found.</Text></View>
                     :
                    <View style={{ width: '90%' }}>
                        {this.state.filteredCities.map((city, index) => (
                            <TouchableOpacity key={index} style={{margin: 5}} onPress={() => navigate('Itinerary', {city: city})}>
                            <ImageWithName city={city}/>
                        </TouchableOpacity>
                        ))}
                    </View>
                }
            </ScrollView><View style={{background:'red',width:'100%',heigth:'100%'}} />
            </View>
            <HomeComponent navigate={navigate}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        justifyContent: 'center', 
        alignContent: 'center'
    },
    logoSolo: {
        height: 80,
        width: 80,

        },
});
export default CitiesScreen;
