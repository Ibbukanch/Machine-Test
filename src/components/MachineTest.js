import { useEffect, useState } from "react"
import { Dashboard } from "./Dashboard";
import { setCredentials } from "./helper";
import { Login } from "./Login";

export const MachineTest = () => {

    const [is_authorized, setAuthorized] = useState(false);

    useEffect(()=>{
        setCredentials();
    }, []);

    return(
        is_authorized ? <Dashboard setAuthorized={setAuthorized} /> : <Login setAuthorized={setAuthorized} />
    )
}