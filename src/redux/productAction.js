import { PRODUCT_LIST } from './constants'

export const productList = ()=>{
    let data = "hello"
    console.warn("PRODUCT_LIST condition", data)
    return {
        type:'PRODUCT_LIST',
        data
    }
}