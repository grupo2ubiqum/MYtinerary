import { FETCH_ITINERARIES_FOR_A_CITY } from '../constants';

const initialState = ""

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITINERARIES_FOR_A_CITY: {
            return Object.assign({}, state, { itinerariesForACity: action.itineraries })
        }
        default: return state
    }
}