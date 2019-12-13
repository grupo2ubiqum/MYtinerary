import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import { AntDesign  } from '@expo/vector-icons'

export default class CityCarousel extends React.Component {
  constructor(props){
    super();
    this.state = {

      errors: []
    }

    this.props = props;
    this.init();
  }

  init(){
    this.state = {
      com:[ 
        {name: 'London',
         address: '123',
         photo: '.jpg',
         time: '2hs',
         cost: '$5000',
         comments: 'Food is super cheap, the only reason its so expensive is because we stayed and kept ordering canyas (beers) :L Really cool square, people come and sit with their own beers and chill in the sun. Super Guay!'
      },
        {name: 'Barcelona',
        address: '123',
        photo: '.jpg',
        time: '2hs',
        cost: '$5000',
        comments: 'que tal'
      },
        {name: 'BsAs',
        address: '123',
        photo: '.jpg',
        time: '2hs',
        cost: '$5000',
        comments: 'que tal'
      },
        {name: 'Mordor',
        address: '123',
        photo: '.jpg',
        time: '2hs',
        cost: '$5000',
        comments: 'que tal'
      },
        {name: 'Londor',
        address: '123',
        photo: '.jpg',
        time: '2hs',
        cost: '$5000',
        comments: 'que tal'
        }
      ]
    }
  }

  _renderItem = ( {item, index} ) => {
    console.log("ARRAY",item)
  
    return (
      <View style={styles.container}>
          <Text key={index} style={{fontWeight: "bold"}}>
              Name: {item.name}{'\n'}
              Address: {item.address}{'\n'}
              Photo: {item.photo}{'\n'}
              Time: {item.time}{'\n'}
              Cost: {item.cost}{'\n'}
              Comments: {item.comments}{'\n'}
          </Text>
      </View>
    );
  }

  render = () => {
    return (<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <AntDesign name="leftcircle" size={30} />

      <Carousel
                data={this.state.com}
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


