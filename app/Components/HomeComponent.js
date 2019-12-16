import React from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import ImageWithName from './ImageWithName';

class HomeComponent extends React.Component {

    render() {

        return(
            <View style={{
            position:"absolute",
            flex:2,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor:'white',
            flexDirection:'row',
            height:"8%",
            alignItems:'center' ,
            justifyContent:'space-around',
            elevation: 24,shadowOpacity: 0.58,
            shadowRadius: 16.00,
            borderWidth:0.5
            }}>
                <TouchableOpacity onPress={() => this.props.navigate('Home')}>
                    <Image style={styles.logoSolo} source={require('../assets/img/homeIconR.png')}/>
                </TouchableOpacity>
            </View>
        )

    }
}

const styles = StyleSheet.create({

    logoSolo: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default HomeComponent;