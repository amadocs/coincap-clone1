import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { GET_ASSETS, GET_ASSETS_SUCCESS, GET_ASSETS_FAIL } from './constants';
import { getAssetsSuccess, getAssetsFail } from './actions';

export function* fetchAssetsSaga() {
  try {
    const response = yield call(axios.get, 'https://api.coincap.io/v2/assets');
    const assets = response.data.data;
    yield put(getAssetsSuccess(assets));
  } catch (error) {
    yield put(getAssetsFail(error));
  }
}

export function* assetsSaga() {
  yield takeLatest(GET_ASSETS, fetchAssetsSaga);
}
