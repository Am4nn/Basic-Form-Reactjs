import React from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {

	const {
		value: enteredFirstName,
		isValid: isEnteredFirstNameValid,
		hasError: isEnteredFirstNameInvalid,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameInputBlurHandler,
		reset: resetFirstNameInput
	} = useInput(value => value.trim() !== '');

	const {
		value: enteredLastName,
		isValid: isEnteredLastNameValid,
		hasError: isEnteredLastNameInvalid,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameInputBlurHandler,
		reset: resetLastNameInput
	} = useInput(value => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: isEnteredEmailValid,
		hasError: isEnteredEmailInvalid,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailInputBlurHandler,
		reset: resetEmailInput
	} = useInput(value => (value.includes('@') && value.includes('.')));


	const isFormValid = isEnteredFirstNameValid && isEnteredLastNameValid && isEnteredEmailValid;

	const formSubmitHandler = event => {
		event.preventDefault();

		if (!isFormValid) return;
		console.log(enteredFirstName, enteredLastName, enteredEmail);

		resetFirstNameInput();
		resetLastNameInput();
		resetEmailInput();
	}

	const customFirstNameClass = isEnteredFirstNameInvalid ? 'form-control invalid' : 'form-control';
	const customLastNameClass = isEnteredLastNameInvalid ? 'form-control invalid' : 'form-control';
	const customEmailClass = isEnteredEmailInvalid ? 'form-control invalid' : 'form-control';

	return (
		<form onSubmit={formSubmitHandler}>
			<div className='control-group'>

				<div className={customFirstNameClass}>
					<label htmlFor='name'>First Name</label>
					<input onBlur={firstNameInputBlurHandler} onChange={firstNameChangeHandler} value={enteredFirstName} type='text' id='name' />
					{isEnteredFirstNameInvalid && <p className="error-text">First Name can't be empty !</p>}
				</div>

				<div className={customLastNameClass}>
					<label htmlFor='name'>Last Name</label>
					<input onBlur={lastNameInputBlurHandler} onChange={lastNameChangeHandler} value={enteredLastName} type='text' id='name' />
					{isEnteredLastNameInvalid && <p className="error-text">Last Name can't be empty !</p>}
				</div>

			</div>

			<div className={customEmailClass}>
				<label htmlFor='name'>E-Mail Address</label>
				<input onBlur={emailInputBlurHandler} onChange={emailChangeHandler} value={enteredEmail} type='text' id='name' />
				{isEnteredEmailInvalid && <p className="error-text">Please enter a valid E-Mail !</p>}
			</div>

			<div className='form-actions'>
				<button disabled={!isFormValid}>Submit</button>
			</div>

		</form>
	);
};

export default BasicForm;
