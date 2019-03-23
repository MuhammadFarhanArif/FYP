const citizensReducer=(state=[],action)=>{
    switch(action.type){
        case "ADD_CITIZEN":
        return [...state,action.payload]
        case "SET_CITIZEN":
        return action.payload
        default:
        return state
    }
}
export default citizensReducer
// case "addCitizen":

// var options={
//     method: 'POST',
//     body: JSON.stringify({data: action.payload}),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }
// fetch('/addCitizen', options)
// .then((res)=>res.text())
// .then((message)=>console.log(message))
// .catch((error)=>console.log(error))