import React from "react";

const Login = () => {
    return(
        <div className="dFlex ml130">
            <div style={{width:'570'}} className="logindiv">
                <h1>Log in</h1>
                <h3>Why do I need to log in?</h3>
                <p>
                Log in
                        Why do I need to log in?

                        To use any version of Live (including Live Lite or our free trial) you need an Ableton account. It takes less than a minute to create one, and even less to log in if you already have one.
                </p>
                <h5>E-mail or username</h5>
                <input></input>
                <div className="dFlex"><h5>Password</h5> <h5 style={{paddingLeft:'200px', color:'blue'}}>Forgot password?</h5></div>
                <input></input><br/>
                <button>Log in</button>
            </div>
            <div style={{width:'570',marginLeft:'100px'}} className="logindiv">
                <h1>Register</h1>
                <h3>New Customer? Please create an account.</h3>
                <p>
                Your account lets you authorize and download Live plus your included library content.
                </p>
                <h5>E-mail</h5>
                <input></input>
                <h5>Password</h5>
                <input></input>
                <h5>First name</h5>
                <input placeholder="Optional"></input>
                <h5 style={{color:'#00A2B0'}}>So that we know what to call you if we email you.</h5>
                <h5>Last name</h5>
                <input placeholder="Optional"></input>
                <h5>Country or Region</h5>
                <select>
                    <option>Pakistan</option>
                    <option>India</option>
                    <option>Nepal</option>
                    <option>Bangladesh</option>
                    <option>Srilanka</option>
                    <option>Iran</option>
                    <option>Turkey</option>
                    <option>Japan</option>
                    <option>Chaina</option>
                    </select><br />
                    <h3>Sign up to the Ableton newsletter to stay up to date with the latest special offers, tutorial videos, downloads, surveys and other news.</h3>


                <button style={{width:'150px'}}>Create account</button>
            </div>
        </div>
    );
}

export default Login;