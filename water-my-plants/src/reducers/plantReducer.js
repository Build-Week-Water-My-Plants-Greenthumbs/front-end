import { CREATE_PLANT, EDIT_PLANT, WATER } from "../actions";
const INITIAL_STATE = {
    plant: {
      id: '',
      nickname: '',
      species: '',
      h2oFrequency: ''  
    }
};

const plantReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default plantReducer;