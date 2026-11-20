import react, { useState, useEffect } from 'react';
function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        console.log({email, password})
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type='email' value={email} onChange={e=>setEmail(e.target.value) } placeholder='email' required/>
            <input  type='password ' value={password} onChange={e=>setPassword(e.target.value)} placeholder='password' required/>
            <button type='submit' >Log in </button>

        </form>
        </>
    )
}export default Login;