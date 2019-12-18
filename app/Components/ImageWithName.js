
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class CityCarousel extends React.Component {
  constructor(props){
    super();

    this.props = props;
  }

  render = () => {
    const containerWidthCustom =  {...styles.container};
    containerWidthCustom.width = this.props.width || styles.container.width;
    return (<View style={containerWidthCustom} >
            <Text style={styles.text}>{this.props.city.name}</Text>
            <Image 
                style={styles.image}
                source={{uri: this.props.city.image}}
            />
        
        </View>
    );
  }

}
//position absolute justi center top  0
const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
        margin: 5,
        elevation:2
      },
      image: {
        width: '100%',
        height: 150,
        borderRadius: 10
      },
      text: {
        color: 'black',
        position: 'absolute',
        fontWeight: 'bold',textAlign:'center',
        justifyContent:'center',
        alignContent:'center',top:80,left:0,right:0,
        alignSelf:'center',
        backgroundColor: '#fafafa',
        fontSize: 25,
        zIndex: 1000,
        opacity:0.7, 
      }
});