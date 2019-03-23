const setEmp = ( employees ) => {
    return { type: "SET_EMPLOYEE", payload: employees }
}

const addEmp=(employee)=>{
    return{type:"ADD_EMPLOYEE",payload:employee}
}
export {addEmp,setEmp}