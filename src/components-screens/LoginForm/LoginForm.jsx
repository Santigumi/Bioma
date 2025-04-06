import { useForm } from 'react-hook-form';


const LoginForm = () => {
    // const {login, handleSubmit} = useForm();

    //     const onSubmit = (data) => {
    //         console.log(data);
    //     };

    return (
        <div className="login-container">
            <h2>Log In</h2>
            <form className="register-form">
                <div className="form-group">
                    <label>Username</label>
                    <input 
                        type="text" 
                        // {...login('username', { required: "Username is required" })}
                        />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        // {...login('password', { 
                        //     required: "Password is required"
                        // })}
                    />
                </div>
            </form>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default LoginForm;