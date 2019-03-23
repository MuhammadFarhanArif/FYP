const employeesReducer=(state=[],action)=>{
    switch(action.type){
        
        case "ADD_EMPLOYEE":{
            return [...state,action.payload]
        }
        case "SET_EMPLOYEE":
        {
        return action.payload
        }
        default:
        return state
    }
}
export default employeesReducer