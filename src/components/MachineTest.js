import { useState } from "react"
import { Dashboard } from "./Dashboard";
import { getToken } from "./helper";
import { Login } from "./Login";

export const MachineTest = () => {

    const [is_authorized, setAuthorized] = useState(false);

    return(
        getToken() ? <Dashboard /> : <Login setAuthorized={setAuthorized}/>
    )
}