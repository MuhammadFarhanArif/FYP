const setCitizen = ( citizens ) => {
    return { type: "SET_CITIZEN", payload: citizens }
}

const addCitizen=(citizen)=>{
    return {type:"ADD_CITIZEN", payload:citizen}
}
export {addCitizen,setCitizen}