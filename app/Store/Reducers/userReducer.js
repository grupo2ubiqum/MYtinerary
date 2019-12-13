import {AsyncStorage} from 'react-native';

const initialState = {
   username: "",
   image: "",
   token: ""
}

export default (state = initialState, action) => {
 
   switch (action.type) {
 
       case "LOG_IN_USER": {

        AsyncStorage.clear()

        AsyncStorage.setItem('token', action.user.data.token)
        AsyncStorage.setItem('image', action.user.data.image)
        AsyncStorage.setItem('username', action.user.data.username)

            return {...state,
               token: action.user.data.token,
               image: action.user.data.image,
               username: action.user.data.username
           }
   
        }

        case "RELOAD_LOG_IN": {
 
           return {...state,
               token: AsyncStorage.getItem('token'),
               image: AsyncStorage.getItem('image'),
               username: AsyncStorage.getItem('username')    
           }
        }

        case "LOG_OUT_USER": {

            AsyncStorage.clear()

           return {...state,
               token: '',
               image: '',
               username: ''
           }

        }

        default: return state
    }
}