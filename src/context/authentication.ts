import { createContext } from "react";

interface authentication {
    user: string,
    setUser: (user: string) => void,
}


const AuthenticationContext = createContext <authentication>({
    user: "",
    setUser: (user: string) => {},
})


export { AuthenticationContext }