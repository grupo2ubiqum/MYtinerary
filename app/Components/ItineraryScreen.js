import React from 'react';
import {Text} from 'react-native';

export default class ItineraryScreen extends React.Component {
    constructor(props){
      super();
  
      this.props = props;

      this.state = {
          city: this.props.navigation.state.params.city
      }
    }
  
    render = () => {
        return (
            <Text>{this.state.city.name}</Text>
        );
    }
  }