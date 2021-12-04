import { useState } from "react"

export const User = (props) => {
    const {setAuthorized} = props

    const [flag, setFlag] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = () => {
        console.log(newPassword);
        if(!newPassword){ alert('Please Enter New Password') }
        else { localStorage.setItem('password', newPassword); }
    }

    const Logout = () => {
        localStorage.setItem('email', '');
        localStorage.setItem('password', '');
        setAuthorized(false);
    }

    return (
    <div>
    <form onSubmit={(e)=>e.preventDefault()}>
    <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="email" name="email" disabled={true} value={localStorage.getItem('email')}/>
        </div>
    </div>
 
    <div class="row mb-3">
        <label for="password" class="col-sm-2 col-form-label">{flag ? 'New Password' : 'Password'}</label>
        <div class="col-sm-10">
            {flag ? 
            <input type="password" class="form-control" id="password"  required onChange={(e)=>{setNewPassword(e.target.value)}} /> :
            <span>*****</span>
            }       
            </div> 
    </div>      
    </form>
    
    <div class="row gy-4">
        <div class="col-md-3">
        {flag ?
            <button type="submit" class="btn btn-outline-secondary" onClick={handleSubmit}>Save Password</button> :    
            <button type="button" class="btn btn-outline-secondary" onClick={()=>setFlag('change_password')}>Change Password</button>
        }
        </div>
        <div class="col-md-3">
            <button type="button" class="btn btn-outline-secondary" onClick={()=>Logout()}>Logout</button>
        </div>
    </div>
    </div>
    )
}