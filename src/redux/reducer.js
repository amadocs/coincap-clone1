export const cartData = (data=[], action)=>{
if(action.type === "ADD_TO_CART")
{
    console.warn("reducer called", action)
    return action.data
}
else{
    return "no action matched"
}

}