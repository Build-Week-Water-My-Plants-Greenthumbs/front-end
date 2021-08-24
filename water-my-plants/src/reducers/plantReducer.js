import { CREATE_PLANT, EDIT_PLANT, FETCH_PLANTS, TOGGLE_EDIT, WATER } from "../actions";
const INITIAL_STATE = {
    plant: {
      plantId: '',
      nickname: '',
      species: '',
      frequency: '',
      lastWatered: '',
      
    },
    editing: false
};

const plantReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_PLANTS: 
            return {
                ...state,
                plant: action.payload,
                editing: false
            }
        case CREATE_PLANT: 
        return {
            ...state,
            plant: action.payload,
            editing: false
        }

        case EDIT_PLANT: 
            return {
                ...state,
                plant: action.payload,
                editing: true
            }
        case TOGGLE_EDIT: 
        return {
            ...state,
            editing: !state.ed
        }
        default:
            return state
    }
}

export default plantReducer;