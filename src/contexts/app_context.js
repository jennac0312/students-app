import { createContext } from "react";
import students from '../models/students'

// create context
export const AppContext = createContext()

// function to provide context
const AppContextProvider = (props) => {
    //global context

    return (
        <AppContext.Provider value={{
            // global context to be passed
            students
        }}>
            {/* children who get access to global context */}
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContextProvider