import { CREATE_PLANT, EDIT_PLANT, FETCH_PLANTS, TOGGLE_EDIT, FETCH_PLANT_LIST } from "../actions";
const INITIAL_STATE = {
  plantsList: [],
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
      case FETCH_PLANT_LIST:
        return {
          ...state,
          plantsList: action.payload
        }
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