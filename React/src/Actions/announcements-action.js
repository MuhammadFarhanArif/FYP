const setAnnouncement = ( announcements ) => {
    return { type: "SET_ANNOUNCEMENT", payload: announcements }
}


const addAnnouncement=(announcement)=>{
    return {type:"ADD_ANNOUNCEMENT",payload:announcement}

}
export {addAnnouncement,setAnnouncement}