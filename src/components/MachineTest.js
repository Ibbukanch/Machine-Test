import { useState } from "react"
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";

export const MachineTest = () => {

    const [is_authorized, setAuthorized] = useState(false);

    return(
        is_authorized ? <Dashboard setAuthorized={setAuthorized} /> : <Login setAuthorized={setAuthorized} />
    )
}