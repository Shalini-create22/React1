/*import React, {useState} from 'react';
import './Login.css';
import { FaUser, FaLock, FaFacebookSquare } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const Loginsign = () => {

    const [action,setAction] = useState("Signup");


  return (
    <div className='wrapper'>
      
        <h1>{action}</h1>
        {action==="Login"?<div></div>:<div className="input-box">
          <input type="text" placeholder='Name' required />
          <FaUser className='icon' />
        </div>}
        <div className="input-box">
          <input type="text" placeholder='Email address' required />
          <MdEmail className='icon' />
        </div>

        <div className="input-box">
          <input type="password" placeholder='Password' required />
          <FaLock className='icon' />
        </div>
         {action==="Sign up"?<div></div>:<div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
          </div>}
    

        <div className="button-container">
          <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
          <div className={action==="Sign up"?"submit gray":"submit"}onClick={()=>{setAction("Signup")}}>Signup</div>
          </div>

      
    </div>
  );
};

import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock, FaFacebookSquare } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const Loginsign = () => {
    const [action, setAction] = useState("Signup");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let validationErrors = {};

        if (action === "Signup" && !formData.name) {
            validationErrors.name = "Name is required";
        }

        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is invalid";
        }

        if (!formData.password) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters";
        }

        return validationErrors;
    };

    const handleSubmit = () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted successfully", formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className='wrapper'>
            <h1>{action}</h1>

            {action === "Signup" && (
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder='Name' 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <FaUser className='icon' />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
            )}

            <div className="input-box">
                <input 
                    type="text" 
                    placeholder='Email address' 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <MdEmail className='icon' />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="input-box">
                <input 
                    type="password" 
                    placeholder='Password' 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <FaLock className='icon' />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>

            {action === "Login" && (
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>
            )}

            <div className="button-container">
                {/* Only one button, which changes based on action 
                <button onClick={handleSubmit} className="submit">
                    {action === "Login" ? "Login" : "Signup"}
                </button>

                /* Toggle between Login and Signup */
                /*<button 
                    className={action === "Login" ? "submit gray" : "submit"} 
                    onClick={() => setAction(action === "Login" ? "Signup" : "Login")}
                >
                    {action === "Login"? "Signup" : "Login"}
                </button>
            </div>
        </div>
    );
};

export default Loginsign;

            

import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const Loginsign = () => {
    const [action, setAction] = useState("Signup");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({}); // To track if the input field has been touched

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle when input is focused
    const handleFocus = (e) => {
        setTouched({
            ...touched,
            [e.target.name]: true
        });
    };

    // Form validation logic
    const validateForm = () => {
        let validationErrors = {};

        if (action === "Signup" && !formData.name.trim()) {
            validationErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is invalid";
        }

        if (!formData.password) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters";
        }

        return validationErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            if (action === "Signup") {
                // Handle Signup logic
                console.log("Signup successful", formData);
                // You can reset the form or redirect the user here
            } else {
                // Handle Login logic
                console.log("Login successful", formData);
                // You can reset the form or redirect the user here
            }
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className='wrapper'>
            <h1>{action}</h1>
            <form onSubmit={handleSubmit}>
                {/* Name field 
                {action === "Signup" && (
                    <>
                        <div className="input-box">
                            <input 
                                type="text" 
                                placeholder='Name' 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={() => setErrors(validateForm())} // Validate when the field loses focus
                            />
                            <FaUser className='icon' />
                        </div>
                        {touched.name && errors.name && (
                            <div className="error-box">{errors.name}</div>
                        )}
                    </>
                )}

                {/* Email field 
                <div className="input-box">
                    <input 
                        type="email" 
                        placeholder='Email address' 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={() => setErrors(validateForm())}
                    />
                    <MdEmail className='icon' />
                </div>
                {touched.email && errors.email && (
                    <div className="error-box">{errors.email}</div>
                )}

                {/* Password field 
                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder='Password' 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={() => setErrors(validateForm())}
                    />
                    <FaLock className='icon' />
                </div>
                {touched.password && errors.password && (
                    <div className="error-box">{errors.password}</div>
                )}

                <div className="button-container">
                    <button type="submit" className="submit">
                        {action === "Signup" ? "Signup" : "Login"}
                    </button>
                </div>
            </form>
            <div className="button-container">
                <button
                    className={action === "Login" ? "submit gray" : "submit"} 
                    onClick={() => setAction(action === "Login" ? "Signup" : "Login")}
                >
                    {action === "Login" ? " Signup" : "Login"}
                </button>
            </div>
        </div>
    );
};

export default Loginsign;

import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loginsign = () => {
    const [action, setAction] = useState("Signup");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFocus = (e) => {
        setTouched({
            ...touched,
            [e.target.name]: true
        });
    };

    const validateForm = () => {
        let validationErrors = {};

        if (action === "Signup" && !formData.name.trim()) {
            validationErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is invalid";
        }

        if (!formData.password) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters";
        }

        return validationErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            if (action === "Signup") {
                toast.success("Signup successful!");
                console.log("Signup successful", formData);
            } else {
                toast.success("Login successful!");
                console.log("Login successful", formData);
            }
        } else {
            setErrors(validationErrors);
            toast.error("Please fix the form errors before submitting.");
        }
    };

    return (
        <div className='wrapper'>
            {/* ToastContainer to display toast messages 
            <ToastContainer />

            <h1>{action}</h1>
            <form onSubmit={handleSubmit}>
                {action === "Signup" && (
                    <>
                        <div className="input-box">
                            <input 
                                type="text" 
                                placeholder='Name' 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={() => setErrors(validateForm())}
                            />
                            <FaUser className='icon' />
                        </div>
                        {touched.name && errors.name && (
                            <div className="error-box">{errors.name}</div>
                        )}
                    </>
                )}

                <div className="input-box">
                    <input 
                        type="email" 
                        placeholder='Email address' 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={() => setErrors(validateForm())}
                    />
                    <MdEmail className='icon' />
                </div>
                {touched.email && errors.email && (
                    <div className="error-box">{errors.email}</div>
                )}

                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder='Password' 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={() => setErrors(validateForm())}
                    />
                    <FaLock className='icon' />
                </div>
                {touched.password && errors.password && (
                    <div className="error-box">{errors.password}</div>
                )}
                {action === "Login" && (
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>
            )}

    
            </form>
            <div className="button-container">
                <button
                 className={action === "Login" ? "submit gray" : "submit"}
                    onClick={() => setAction(action === "Login" ? "Signup" : "Login")}
                  >
                  {action === "Login" ? "Signup" : "Login"}
        </button>
          </div>
            </div>
    
    );
};

export default Loginsign;
import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loginsign = () => {
    const [action, setAction] = useState("Login");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFocus = (e) => {
        setTouched({
            ...touched,
            [e.target.name]: true
        });
    };

    const validateForm = () => {
        let validationErrors = {};

        if (action === "Signup" && !formData.name.trim()) {
            validationErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is invalid";
        }

        if (!formData.password) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters";
        }

        return validationErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            if (action === "Signup") {
                toast.success("Signup successful!");
                console.log("Signup successful", formData);
            } else {
                toast.success("Login successful!");
                console.log("Login successful", formData);
            }
        } else {
            setErrors(validationErrors);
            toast.error("Please fix the form errors before submitting.");
        }
    };

    return (
        
            {/* ToastContainer to display toast messages 
            <ToastContainer/>

            <div className='wrapper'>
                <h1>{action}</h1>
                <form onSubmit={handleSubmit}>
                    {action === "Signup" && (
                        <>
                            <div className="input-box">
                                <input 
                                    type="text" 
                                    placeholder='Name' 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={() => setErrors(validateForm())}
                                />
                                <FaUser className='icon' />
                            </div>
                            {touched.name && errors.name && (
                                <div className="error-box">{errors.name}</div>
                            )}
                        </>
                    )}

                    <div className="input-box">
                        <input 
                            type="email" 
                            placeholder='Email address' 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={() => setErrors(validateForm())}
                        />
                        <MdEmail className='icon' />
                    </div>
                    {touched.email && errors.email && (
                        <div className="error-box">{errors.email}</div>
                    )}

                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder='Password' 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={() => setErrors(validateForm())}
                        />
                        <FaLock className='icon' />
                    </div>
                    {touched.password && errors.password && (
                        <div className="error-box">{errors.password}</div>
                    )}
                    {action === "Login" && (
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>
                    )}

                    <div className="button-container">
                        <button>
                
                          <div className={action === "Login" ? "submit gray" : "submit"}>onClick={() => {setAction("Signup")}}Signup</div>
                          <div className={action === "Signup" ? "submit gray" : "submit"}>onClick={() => {setAction("Login")}}Login</div>
                </button>
            </div>
            </form>
    </div>
    );
};

export default Loginsign;


import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loginsign = ({ handleLogin, handleSignup }) => {
    const [action, setAction] = useState("Signup");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFocus = (e) => {
        setTouched({
            ...touched,
            [e.target.name]: true
        });
    };

    const validateForm = () => {
        let validationErrors = {};

        if (action === "Signup" && !formData.name.trim()) {
            validationErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is invalid";
        }

        if (!formData.password) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters";
        }

        return validationErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            if (action === "Signup") {
                toast.success("Signup successful!");
                console.log("Signup successful", formData);
            } else {
                toast.success("Login successful!");
                console.log("Login successful", formData);
            }
        } else {
            setErrors(validationErrors);
            toast.error("Please fix the form errors before submitting.");
        }
    };

    return (
        <>
            {/* ToastContainer to display toast messages 
            <ToastContainer />

            <div className='wrapper'>
                <h1>{action}</h1>
                <form onSubmit={handleSubmit}>
                    {action === "Signup" && (
                        <>
                            <div className="input-box">
                                <input 
                                    type="text" 
                                    placeholder='Name' 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={() => setErrors(validateForm())}
                                />
                                <FaUser className='icon' />
                            </div>
                            {touched.name && errors.name && (
                                <div className="error-box">{errors.name}</div>
                            )}
                        </>
                    )}

                    <div className="input-box">
                        <input 
                            type="email" 
                            placeholder='Email address' 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={() => setErrors(validateForm())}
                        />
                        <MdEmail className='icon' />
                    </div>
                    {touched.email && errors.email && (
                        <div className="error-box">{errors.email}</div>
                    )}

                    <div  className="input-box">
                        <input 
                            type="password" 
                            placeholder='Password' 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={() => setErrors(validateForm())}
                        />
                        <FaLock className='icon' />
                    </div>
                    {touched.password && errors.password && (
                        <div className="error-box">{errors.password}</div>
                    )}
                    {action === "Login" && (
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>
                    )}

                    <div className="button-container">
                        <button
                        className={action === "Login" ? "submit gray" : "submit"}
        onClick={() => setAction("Signup")}
    >
        Signup
    </button>
    
    <button
        className={action === "Signup" ? "submit gray" : "submit"}
        onClick={() => setAction("Login")}
    >
        Login
                          
                </button>
            </div>
            </form>
    </div>
        
        </>
    );
};

export default Loginsign;*/

import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Loginsign = ({ handleLogin, handleSignup }) => {  
    const [action, setAction] = useState("Signup");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    
    const navigate = useNavigate();  // Use navigate for manual redirection

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFocus = (e) => {
        setTouched({
            ...touched,
            [e.target.name]: true
        });
    };

    const validateForm = () => {
        let validationErrors = {};

        if (action === "Signup" && !formData.name.trim()) {
            validationErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is invalid";
        }

        if (!formData.password) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters";
        }

        return validationErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            if (action === "Signup") {
                handleSignup(formData);  // Trigger handleSignup function
                toast.success("Signup successful!");
            } else {
                handleLogin(formData);  // Trigger handleLogin function
                toast.success("Login successful!");
            }
            navigate("/");  // Set redirection state to true
        } else {
            setErrors(validationErrors);
            toast.error("Please fix the form errors before submitting.");
        }
    };

    

    return (
        <>
            <ToastContainer />
            <div className="wrapper">
                <h1>{action}</h1>
                <form onSubmit={handleSubmit}>
                    {action === "Signup" && (
                        <>
                            <div className="input-box">
                                <input 
                                    type="text" 
                                    placeholder="Name" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={() => setErrors(validateForm())}
                                />
                                <FaUser className="icon" />
                            </div>
                            {touched.name && errors.name && (
                                <div className="error-box">{errors.name}</div>
                            )}
                        </>
                    )}

                    <div className="input-box">
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={() => setErrors(validateForm())}
                        />
                        <MdEmail className="icon" />
                    </div>
                    {touched.email && errors.email && (
                        <div className="error-box">{errors.email}</div>
                    )}

                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={() => setErrors(validateForm())}
                        />
                        <FaLock className="icon" />
                    </div>
                    {touched.password && errors.password && (
                        <div className="error-box">{errors.password}</div>
                    )}
                    
                    {action === "Login" && (
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>
                    )}

                    <div className="button-container">
                        <button
                        type="button"
                            className={action === "Login" ? "submit gray" : "submit"}
                            onClick={() => setAction("Signup")}
                        >
                            Signup
                        </button>
                        
                        <button
                            className={action === "Signup" ? "submit gray" : "submit"}
                            onClick={() => setAction("Login")}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Loginsign;

