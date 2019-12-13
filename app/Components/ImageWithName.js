
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class CityCarousel extends React.Component {
  constructor(props){
    super();

    this.props = props;
  }

  render = () => {
    const containerWidthCustom =  {...styles.container};
    containerWidthCustom.width = this.props.width || styles.container.width;
    return (
        <View style={containerWidthCustom}>
            <Text style={styles.text}>{this.props.city.name}</Text>
            <Image 
                style={styles.image}
                source={{uri: this.props.city.image}}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        width: '45%',
        justifyContent: 'center', 
        alignItems: 'center',
        margin: 5
      },
      image: {
        width: '100%', 
        height: 150
      },
      text: {
        color: 'white',
        position: 'absolute', 
        fontSize: 25,
        zIndex: 9
      }
});