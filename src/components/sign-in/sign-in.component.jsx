import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithGoogle} from '../../Firebase/firebase.utils'


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''

        };
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({ email: '', password: '' });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span> sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                       handleChange={this.handleChange}
                        value={this.state.email}
                        label="Email"
                        required />
                    
           

                    <FormInput
                        type='password'
                        name='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='Password'
                        required />
                    
                    <div className="buttons">     
                    <CustomButton type='submit' > SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {' '}
                        Sign In With Google{' '} </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
}
};

export default SignIn;