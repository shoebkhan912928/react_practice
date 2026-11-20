import React, { useState } from "react";
export const Logins = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    function hundlesubmit(e) {
        e.preventDefault()
        console.log("Name : ", name)
        console.log("password : ", password)
        console.log("Email : ", email)

    }
    return (
        <>
            <form action="" method="GET" onSubmit={hundlesubmit}>
                <input
                    type="text"
                    value={name}
                    placeholder="Enter your name "
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input type="password"
                    value={password}
                    placeholder="Enter the password"
                    onChange={(e) => setPassword(e.target.value)}
                    required

                />
                <input type="email"
                    value={email}
                    placeholder="Enter the email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" >Login</button>

            </form>
        </>
    )
}