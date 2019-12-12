import React from 'react';

import { View, Image ,TouchableOpacity} from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

class Hamburguer extends React.PureComponent {
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

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Menu
            ref={this.setMenuRef}
            button={    <TouchableOpacity
                            onPress={this.showMenu}>
                            <Image source={require('../assets/hamburguer.png')} style={{width:40, height:40 }} />
                        </TouchableOpacity>
            }
        >
          <MenuItem onPress={this.hideMenu}>Home</MenuItem>
          <MenuItem onPress={this.hideMenu}>Cities</MenuItem>
          <MenuItem onPress={this.hideMenu} disabled>
            Itineraries
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}>Log Out</MenuItem>
        </Menu>
      </View>
    );
  }
}

export default Hamburguer;