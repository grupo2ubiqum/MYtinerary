import React from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import ImageWithName from './ImageWithName';

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
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <TextInput
                    style={{width: '90%', height: 50, textAlign: 'center'}}
                    name="inputValue"
                    placeholder="Search city"
                    onChangeText={this.handleChange}
                    value={this.state.inputValue}
                />

                {this.state.cityNotFound ? 
                    <Text>City not found.</Text>
                     :
                    <View style={{ width: '90%' }}>
                        {this.state.filteredCities.map((city, index) => (
                            <ImageWithName key={index} city={city} width='100%' navigate={navigate}/>
                        ))}
                    </View>
                }           

                <View>
                    <TouchableOpacity onPress={() => navigate('Home')}>
                        <Image style={styles.logoSolo} source={require('../assets/img/homeIcon.png')}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    logoSolo: {
        height: 80,
        width: 80,
        },
});
export default CitiesScreen;
