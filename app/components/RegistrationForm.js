'use client';

import { useState } from 'react';

export function Registration() {
  // Add state for username and usernameErrorText
  const [userName, setUserName] = useState('');
  const [usernameErrorText, setUserNameError] = useState('');

  // Add state for confirmPassword and confirmPasswordErrorText
  const [password, setPassword] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');

  // Add state for confirmPassword and confirmPasswordErrorText
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('');

  // Extra - add state for email and emailErrorText
  const [email, setEmail] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');

  // Add state for isFormValid
  const [isFormValid, setisFormValid] = useState('false');
  const [isFormValidError, setIsFormValidError] = useState();

  // Add state to set formData
  const [formData, setFormData] = useState(null); // For storing and displaying results

  // Add function to validateForm
  function validateForm(value) {
    if (value.length > 4) {
      setIsFormValidError('');
      return true;
    } else {
      setIsFormValidError('');
    }
    return false;
    console.log(validateForm);
  }
  // Add function to validate username
  function validateName(value) {
    if (value.length < 4) {
      setUserNameError('Name must be at least 3 characters.');
    } else {
      setUserNameError('');
    }
  }

  // Add function to validate password
  function validatePassword(value) {
    if (value.length < 8) {
      setPasswordErrorText('Name must be at least 8 characters.');
    } else {
      setPasswordErrorText('');
    }
    console.log(setPassword);
  }

  // Add function to validate confirm password
  function validateConfirmPasdword(value) {
    if (value.length < 8) {
      setConfirmPasswordErrorText('Name must be at least 8 characters.');
    } else {
      setConfirmPasswordErrorText('');
    }
    console.log(confirmPassword);
  }

  // Extra add function to validate email

  function validEmail(value) {
    if (value.length) {
      setEmailErrorText('Not a correct email.');
    } else {
      setEmailErrorText('');
    }
    console.log(validEmail);
  }
  // Add function to handle username change

  // Add function to handle password change

  // Add function to handle confirm password change

  // Extra - Add function to handle email value change

  // Create a handleSubmitFunction
  function handleSubmit(currentUserName, password, email) {
    const formDataToShow = {
      username: `${currentUserName}`,
      email: `${validateEmail(email) ? email : `N/A`}`,
      password: `${password}`,
    };
    setFormData(formDataToShow);
    return formDataToShow;
  }

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 w-full justify-center">
        {/* Form Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-blue-500 mb-6 text-center">
            Registration Form
          </h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block font-semibold mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => {
                  const value = e.target.value;
                  setUserName(value);
                  if (value < 3) {
                    setUserNameError('Must be at least 3 characters.');
                  } else {
                    setUserNameError('Must be at least 3 characters.');
                  }
                  console.log(value);
                }}
              />
              <p className="text-red-500 text-sm mt-2"></p>
            </div>

            <div>
              <label htmlFor="password" className="block font-semibold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => {
                  const value = e.target.value;
                  passwordassword(value);
                  if (value < 8) {
                    setPasswordErrorText('Must be at least 8 characters.');
                  } else {
                    setPasswordErrorText('Must be at least 8 characters.');
                  }
                  console.log(value);
                }}
              />
              <p className="text-red-500 text-sm mt-2"></p>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block font-semibold mb-2"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => {
                  const value = e.target.value;
                  confirmPassword(value);
                  if (value) {
                    setConfirmPasswordErrorText(
                      'Must match the password field.'
                    );
                  } else {
                    setConfirmPasswordErrorText(
                      'Must match the password field.'
                    );
                  }
                  console.log(value);
                }}
              />
              <p className="text-red-500 text-sm mt-2"></p>
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email (Optional):
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => {
                  setEmail(value);
                  validEmail(value);
                }}
              />
              <p className="text-red-500 text-sm mt-2"></p>
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded bg-gray-600 text-gray-400 cursor-not-allowed`}
            >
              Register
            </button>
          </form>
        </div>

        {/* Results Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold text-blue-500 mb-4">
            Registration Results
          </h2>
          {formData ? (
            <div>
              <p className="mb-2">
                <span className="font-semibold">Username:</span>
                {formData.username}
              </p>
              <p>
                <span className="font-semibold">Email:</span>
                {formData.email || 'N/A'}
              </p>
            </div>
          ) : (
            <p className="text-gray-400">No registration details to show.</p>
          )}
        </div>
      </div>
    </div>
  );
}
