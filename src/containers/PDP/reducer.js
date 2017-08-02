import {
  FETCH_DATA_SUCCESS,
  FETCH_DELIVERY_SUCCESS,
  FETCH_DELIVERY_FAIL
} from './constants';

const initialState = {
  Delivery : {},
  PDP: {},
  deliveryStatus:"",
  source: null,
  knowMore:[],
  warranty:[],
  imagesList :[],
  fetching: true,
};

function PDPReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        PDP: action.payload.response,
        knowMore: action.payload.response.knowMore,
        warranty: action.payload.response.warranty,
         imagesList: action.payload.response.galleryImagesList,
        source: action.payload.response.source,
        fetching: false,
      }
    }
    case FETCH_DELIVERY_SUCCESS: {
      return {
        ...state,
        Delivery : action.payload.response,
        deliveryStatus: "good",
      }
    }
    case FETCH_DELIVERY_FAIL: {
      console.log("deliverieee");
      return {
        ...state,
        deliveryStatus: "bad",
      }
    }
    default: {
      return state;
    }
  }
}

export default PDPReducer;
