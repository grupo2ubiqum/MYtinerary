import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { AntDesign  } from '@expo/vector-icons'

export default class ActivityCarousel extends React.Component {
  constructor(props){
    super();
    this.state = {
      errors: []
    }

    this.props = props;
    // this.init();
  }

  _renderItem = ( {item, index} ) => {
    console.log("ARRAY",item)
  
    return (
      <View style={styles.container}>
          <Text key={index} style={{fontWeight: "bold"}}>
              Name: {item.Name}{'\n'}
              Address: {item.Address}{'\n'}
              Photo: {item.Photo}{'\n'}
              Time: {item.Time}{'\n'}
              Cost: {item.Cost}{'\n'}
              Comments: {item.Comments}{'\n'}
          </Text>
      </View>
    );
  }

  render = () => {
    console.log(this.props.activities)
    return (
   
   
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <AntDesign name="leftcircle" size={30} />

      <Carousel
                data={this.props.activities}
                renderItem={this._renderItem.bind(this)}
                sliderWidth={300}
                itemWidth={210}
            />
        <AntDesign name="rightcircle" size={30} />

    </View>
            
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  image: {
    width: '45%', 
    height: 150,
    margin: 5
  },
});


