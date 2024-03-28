import { createContext  , useState} from "react";

export const Usercontext = createContext()

export  const Usercontextprovider = ({children}) =>{
    
    const [login , setLogin] = useState(false)

    return(
        <Usercontext.Provider value={{login , setLogin}}>
          {children}
        </Usercontext.Provider>
    )
}
   