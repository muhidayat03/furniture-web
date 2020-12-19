import {
  LIST_FURNITURE_PENDING,
  LIST_FURNITURE_SUCCESS,
  LIST_FURNITURE_ERROR,  
} from "../actions/furniture_action";

const initialState = {
  pending: false,
  error: null,
  products: [],
  filteredProducts: [],
  furnitureStyles: [],
  filter: {
    text: '',
    furnitureStyles: [],
    deliveryType: []
  }
};


export function listFurniture(state = initialState, action) { 
  switch (action.type) {
    case LIST_FURNITURE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case LIST_FURNITURE_SUCCESS: 
      return {
        ...state,
        pending: false,
        products: action.data.products,
        filteredProducts: action.data.products,
        furnitureStyles: action.data.furniture_styles
      };
    case LIST_FURNITURE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
