import React from 'react';
import { Text, Button, View, StyleSheet, Image, ScrollView,TouchableOpacity} from 'react-native';
import CityCarousel from './CityCarousel';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '#teamwork',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView >
            <View style={styles.container}>
                <View style={styles.imgLogo}>
                <Image source={require('../assets/img/MYtineraryLogo2.png')} />
                </View>
                <View style={styles.texto1}>
                    <Text>
                        Find your perfect trip,
                    </Text>
                    <Text>
                        designed by insiders who know and love their cities.
                    </Text>
                </View>
                <TouchableOpacity style={styles.flechita} onPress={() => navigate('Cities')}>
                    <Image source={require('../assets/img/circled-right-2.png')} />
                </TouchableOpacity>
                <CityCarousel navigate={navigate}/>
                
                <TouchableOpacity style={styles.imgHome} onPress={() => navigate('Home')}>
                    <Image style={styles.logoSolo} source={require('../assets/img/homeIcon.png')}/>
                </TouchableOpacity>
                
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imgHome: {
        alignItems: 'flex-end',
        paddingTop: 40,    
    },
    texto1: {
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        
    },
    logoSolo: {
        height: 80,
        width: 80,
        }
});

export default HomeScreen;