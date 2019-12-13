import Axios from 'axios';

const logInUser = (user) => {
    return {
        type: "LOG_IN_USER",
        user: user
    }
};

export const reloadLogIn = () => {
    return {
        type: "RELOAD_LOG_IN"
    }
}

export const logOutUser = () => {
    return {
        type: "LOG_OUT_USER"
    }
}

export const logUser = (user) => dispatch => {

    return Axios.post('https://mytinerary-grupo2.herokuapp.com/api/users/login/', user)
        .then((user) => {

            if (user.data === 'x') {
                return true


            } else {

                dispatch(logInUser(user))
                return false

            }
        })

} 