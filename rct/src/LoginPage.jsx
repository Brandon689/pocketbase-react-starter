import AuthForm from './AuthForm';

const LoginPage = ({ onLoginSuccess }) => {
  const handleLoginSubmit = (formData) => {
    console.log('Login form submitted with data:', formData);
    onLoginSuccess();
  };

  const handleSignupSubmit = (formData) => {
    console.log('Signup form submitted with data:', formData);
  };

  return (
    <div>
      <AuthForm isSignup={false} onSubmit={handleLoginSubmit} />
      <AuthForm isSignup={true} onSubmit={handleSignupSubmit} />
    </div>
  );
};

export default LoginPage;
