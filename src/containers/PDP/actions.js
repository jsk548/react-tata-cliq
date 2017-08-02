import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  FETCH_DELIVERY,
  FETCH_DELIVERY_SUCCESS,
  FETCH_DELIVERY_FAIL
} from './constants';

export function fetchDelivery(pin) {
  return {
    type: FETCH_DELIVERY,
    payload: {
      pin,
    }
  };
}

export function fetchData(source) {
  return {
    type: FETCH_DATA,
    payload: {
      source,
    }
  };
}

export function fetchDataSuccess(response) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      response
    },
  };
}

export function fetchDeliverySuccess(response) {
  return {
    type: FETCH_DELIVERY_SUCCESS,
    payload: {
      response
    },
  };
}

export function fetchDataFail() {
  return {
    type: FETCH_DATA_FAIL,
  };
}

export function fetchDeliveryFail(err) {
  console.log("delivery failed");
  return {
    type: FETCH_DELIVERY_FAIL,
    payload: {
      err
    },
  };
}