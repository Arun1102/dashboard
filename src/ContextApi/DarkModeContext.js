import React , {createContext,useReducer} from 'react';
import { darkModeReducer, INITIAL_STATE } from './DarkModeReducer';

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children})=>{

    const [state,dispatch] = useReducer(darkModeReducer,INITIAL_STATE)

    return (
        <DarkModeContext.Provider value={{darkmode:state.darkmode,dispatch}}>
            {children}
        </DarkModeContext.Provider>
    )

}