import {ADD_TO_CART} from './constants'
import {REMOVE_FROM_CART} from './constants'
import { GET_ASSETS, GET_ASSETS_SUCCESS, GET_ASSETS_FAIL } from './constants'

export const addToCart = (data)=>{
    console.warn("action called-addToCart", data)
    return {
        type:'ADD_TO_CART',
        data
    }
}

export const removeFromCart = (data)=>{
    console.warn("action called-removeFromCart", data)
    return {
        type:'REMOVE_FROM_CART',
        data
    }
}

export const emptyCart = ()=>{
  console.warn("action called-emptyCart",)
  return {
      type:'EMPTY_CART'
  }
}



export function getAssets() {
    return {
      type: GET_ASSETS,
    };
  }
  
  export function getAssetsSuccess(assets) {
    return {
      type: GET_ASSETS_SUCCESS,
      assets,
    };
  }
  
  export function getAssetsFail(error) {
    return {
      type: GET_ASSETS_FAIL,
      error,
    };
  }