import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
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
    //console.log("ARRAY",item)
  
    return (
      <View style={styles.container}>
        <Text key={index} style={{fontWeight: "bold",textAlign:"left"}}  >
          {item.Name}{'\n'}
        </Text>
        <Text>
              {item.Comments}{'\n'}
        </Text>
      </View>
    );
  }

  render = () => {
    console.log(this.props.activities)
    return (
   
   
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',backgroundColor:'#fafafa',width:'100%'}}>
              <AntDesign name="left" size={20} />

        <Carousel
                  data={this.props.activities}
                  renderItem={this._renderItem.bind(this)}
                  sliderWidth={100}
                  itemWidth={200}
              />
        <AntDesign name="right" size={20} />

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
    textAlign:'left',
    
  },
  image: {
    width: '55%', 
    height: 200,
    margin: 5
  },
});


