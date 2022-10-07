export const INITIAL_STATE = {
    darkmode : false,
};


export const darkModeReducer = (state,action)=>{

    switch(action.type){
        case "LIGHT":
            return {
                darkmode : false
            }

        case "DARK" :
            return {
                darkmode :true
            }

        case "TOGGLE" :
            return{
                darkmode : !state.darkmode
            }
        default:
        return state
    }


}






