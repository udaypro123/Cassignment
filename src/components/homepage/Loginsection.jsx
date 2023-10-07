import React from 'react'

const Loginsection = () => {
    return (
        <>
            <div className="loginsection">
                <div className="loginleftsection">
                    <img src="./images/Trial-Illustration.png" alt="" />
                </div>
                <div className="loginrightsection">

                    <p>Get Started with your trial</p>
                    <form action="">
                        <input type="text" id="fname" name="fname" placeholder='company name' /> <br />
                        <input type="text" id="lname" name="lname" placeholder='email address' /> <br />
                        <input type="text" id="fname" name="fname" placeholder='phone number' /> <br />
                        <input type="text" id="lname" name="lname" placeholder='passowrd' /> <br />
                        <input type="text" id="lname" name="lname" placeholder='confirm passowrd' /> <br />
                    </form>
                      <div>
                      <input type="checkbox"/> <span> Agree with terms & conditions </span>
                      </div>
                        <button>Create Account</button>
                </div>
            </div>
        </>
    )
}

export default Loginsection;
