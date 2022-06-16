import React from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

	const {
		value: enteredName,
		isValid: isEnteredNameValid,
		hasError: isEnteredNameInvalid,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameInputBlurHandler,
		reset: resetNameInput
	} = useInput(value => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: isEnteredEmailValid,
		hasError: isEnteredEmailInvalid,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailInputBlurHandler,
		reset: resetEmailInput
	} = useInput(value => (value.includes('@') && value.includes('.')));


	let isFormValid = isEnteredNameValid && isEnteredEmailValid;


	const formSubmitHandler = event => {
		event.preventDefault();

		if (!isFormValid) return;
		console.log(enteredName);
		console.log(enteredEmail);

		resetNameInput();
		resetEmailInput();
	}

	const customNameInputClass = isEnteredNameInvalid ? 'form-control invalid' : 'form-control';
	const customEmailInputClass = isEnteredEmailInvalid ? 'form-control invalid' : 'form-control';

	return (
		<form onSubmit={formSubmitHandler}>
			<div className={customNameInputClass}>
				<label htmlFor='name'>Your Name</label>
				<input onBlur={nameInputBlurHandler} onChange={nameChangeHandler} value={enteredName} type='text' id='name' />
			</div>
			{isEnteredNameInvalid && <p className='error-text'>Name is not valid !</p>}
			<div className={customEmailInputClass}>
				<label htmlFor='email'>Email</label>
				<input onBlur={emailInputBlurHandler} onChange={emailChangeHandler} value={enteredEmail} type='email' id='email' />
			</div>
			{isEnteredEmailInvalid && <p className='error-text'>Email is not valid !</p>}
			<div className="form-actions">
				<button disabled={!isFormValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;