import React from 'react';
import { View, Image, TouchableOpacity, Text, StatusBar } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { connect } from "react-redux";
import { logOutUser } from "../Store/Actions/userActions";

class Profile extends React.Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  redirect = (screen) => {
    const { navigate } = this.props.navigation;
    this.hideMenu();
    navigate(screen);
  }

  logOut = (screen) => {
    this.props.logOutUserNow()
    this.redirect(screen)
  }

  render() {     
    return (
      <View style={{ flex: 2, alignItems: 'flex-start', padding: 2, flexDirection: 'row' }}>
        <Menu
          ref={this.setMenuRef}
          button={<TouchableOpacity
            onPress={this.showMenu}>
              <Image source={this.props.user.image ? {uri: this.props.user.image} : require('../assets/2388994522.png')} style={{ height: StatusBar.currentHeight, width: StatusBar.currentHeight, borderRadius: 400/ 2 }} />
          </TouchableOpacity>
          }
        >
          {this.props.user.username ? 
            <MenuItem onPress={() => this.logOut('Home')}>Log Out</MenuItem>
            :
            <View>
              <MenuItem onPress={() => this.redirect('Login')}>Login</MenuItem>
              <MenuItem onPress={() => this.redirect('CreateAccount')}>Create Account</MenuItem>
            </View>
          }
          
        </Menu>
        <Text style={{color: 'white', fontSize: 18, padding: 6}}>{this.props.user.username || "Welcome"}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOutUserNow: () =>
          dispatch(logOutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

// export default Profile;