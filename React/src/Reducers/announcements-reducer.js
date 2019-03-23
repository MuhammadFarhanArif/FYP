const announcementsReducer=(state=[],action)=>{
    switch(action.type){
        case "ADD_ANNOUNCEMENT":
        return [...state,action.payload]
        case "SET_ANNOUNCEMENT":
        return action.payload
        default:
        return state
    }
}
export default announcementsReducer