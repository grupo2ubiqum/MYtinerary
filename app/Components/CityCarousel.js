import React from 'react';
import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ImageWithName from './ImageWithName';
import axios from 'axios';

export default class CityCarousel extends React.Component {
  constructor(props){
    super();
    this.state = {
      cities: {}
    }

    this.props = props;
  }

  async componentDidMount() {
    try{
      const data = await axios.get("https://mytinerary-grupo2.herokuapp.com/api/cities");
      this.setState({ cities: data.data.ciudadesFromRoutes });
    }catch(e){
      console.log(e);
    }
  }

  getRandomCities(numOfGroups){
    var arr = [];
    var temparray = [];
    var i,j;
    var groupLength;

    if(this.state.cities.length > 0) {
      this.randomNums(12, this.state.cities.length).forEach((i) => {
        arr.push(this.state.cities[i]);
      });

      groupLength = Math.floor(arr.length / numOfGroups);
      for (i = 0, j = arr.length; i < j; i += groupLength) {
        temparray.push(arr.slice(i,i+groupLength));
      }
    }
    
    return temparray;
  }

  randomNums(arraySize, maxNumer) {
    let arr = [];
    for (let i = 0; i < arraySize; ) {
      let r = Math.floor(Math.random() * maxNumer);
      if (arr.indexOf(r) === -1) {
        arr.push(r);
        i++;
      }
    }
    return arr;
  }

  _renderItem = ( {item} ) => {
    return (
      <View style={styles.container}>
        {item.map((img, index) =>
          <TouchableOpacity key={index} style={{margin: 5, width:'45%'}} onPress={() => this.props.navigate('Itinerary', {city: img})}>
          <ImageWithName city={img}/>
      </TouchableOpacity>
        )}
      </View>
    );
  }

  render = () => {
    return (
        <Carousel
          data={this.getRandomCities(3)}
          renderItem={this._renderItem.bind(this)}
          sliderWidth={410}
          itemWidth={410}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '95%', 
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    alignItems: 'center'}
});