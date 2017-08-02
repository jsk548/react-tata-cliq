import { call, put, takeLatest } from 'redux-saga/effects'
import {
  FETCH_DATA,
  FETCH_DELIVERY,
} from './constants';
import {
  fetchDataSuccess,
  fetchDataFail,
  fetchDeliverySuccess,
  fetchDeliveryFail
} from './actions';
import { configs } from 'utils/configs';
import request from 'utils/request';


function* fetchListItem(action) {
   try {
     const { source } = action.payload;
     const requestURL = `https://tmppprd.tataunistore.com/marketplacewebservices/v2/mpl/products/${source}`;
     const response = yield call(request, requestURL, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Authorization': 'Basic Z2F1cmF2akBkZXdzb2x1dGlvbnMuaW46U2VwdEAyMDE2', // Need to get from store once login done
          'Content-Type': 'application/json'
        }
      });
     console.log(response);
     yield put(fetchDataSuccess(response));
   } catch (err) {
    console.log("error response");
     //yield put(fetchDataFail(err));
   }
}

function* fetchDeliveryPin(action) {
   try {
     const { pin } = action.payload;
    
    const requestURL = `https://tmppprd.tataunistore.com/marketplacewebservices/v2/mpl/users/anonymous/checkPincode?pin=${pin}&productCode=MP000000000067856`;
     const response = yield call(request, requestURL,{
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Authorization': 'Basic Z2F1cmF2akBkZXdzb2x1dGlvbnMuaW46U2VwdEAyMDE2', // Need to get from store once login done
          'Content-Type': 'application/json'
        }
         });
   
     yield put(fetchDeliverySuccess(response));
   } catch (err) {
     yield put(fetchDeliveryFail(err));
   }
}

function* getNewsData() {
  // const watcher = yield takeLatest(FETCH_DATA, fetchListItem);
  //  // Suspend execution until location changes
  // yield take(LOCATION_CHANGE);
  // yield cancel(watcher);
  yield takeLatest(FETCH_DATA, fetchListItem);
   yield takeLatest(FETCH_DELIVERY, fetchDeliveryPin);

}

export default getNewsData;
