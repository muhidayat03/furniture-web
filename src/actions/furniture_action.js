import API from "./API";
import { actionPending, actionSuccess, actionError } from "./index";

export const LIST_FURNITURE_PENDING = "LIST_FURNITURE_PENDING";
export const LIST_FURNITURE_SUCCESS = "LIST_FURNITURE_SUCCESS";
export const LIST_FURNITURE_ERROR = "LIST_FURNITURE_ERROR";

export const FILTER_FURNITURE = "FILTER_FURNITURE";
export const FILTER_INPUT = "FILTER_INPUT";
export const FILTER_STYLE = "FILTER_STYLE";
export const FILTER_DELIVERY = "FILTER_DELIVERY"; 

const LIST_FURNITURE_URL = "5c9105cb330000112b649af8";

function getDeliveryType(delivery_time) {
  if (Number(delivery_time) > 30) {
    return 4
  } else if (Number(delivery_time) > 14) {
    return 3
  } else if (Number(delivery_time) > 7) {
    return 2
  } else {
    return 1
  }
}

export function listFurniture() { 
  return async (dispatch) => {
    dispatch(actionPending(LIST_FURNITURE_PENDING));
    try { 

      const response = await API.get(
        LIST_FURNITURE_URL,
      );

      if (response) { 
        const data = response.data
        data.products = data.products.map(item => ({
          ...item,
          delivery_type: getDeliveryType(item.delivery_time)
        }));
        dispatch(actionSuccess(LIST_FURNITURE_SUCCESS, data));
      }

      return response;
    } catch (error) { 
      dispatch(actionError(LIST_FURNITURE_ERROR, error));
    }
  };
}

export function setInputFilter(string) { 
  return {
    type: FILTER_INPUT,
    data: string
  }
} 

export function setStyleFilter(styleOptions) { 
  return {
    type: FILTER_INPUT,
    data: styleOptions
  }
} 
export function setDeliverFilter(deliveryOptions) { 
  return {
    type: FILTER_INPUT,
    data: deliveryOptions
  }
} 