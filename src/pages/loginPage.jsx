import React from 'react';
import Logo from '../components/Logo';
import LoginForm from '../components/login';

const LoginPage = () => {
  return (
    <div className='container justify-content-center text-center mt-5'>
  
        <div className="row">
          <div className="col-12">
             <Logo />
          </div>
         <div className='col-12'>
             <LoginForm />
         </div>
        </div>
        
     

    </div>
    
     
  );
};

export default LoginPage;