import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    .sr-only {
	position: absolute;
	left: -9999px;
}
    label,
button {
	cursor: pointer;
}
`;

const Container = styled.div`
	max-width: 393px;
	height: 99vh;
	margin: 0 auto;
	text-align: center;
`;

const Form = styled.form`
	text-align: center;
	> label {
		display: block;
		margin: 35vh 0 30px;
		font-weight: 600;
		font-size: 24px;
	}

	> input {
		background: none;
		border: none;
		outline: none;
		display: block;
		width: 60%;
		margin: 0 auto 100px;
		color: #a799ff;
		font-size: 22px;
		font-weight: 800;
		text-align: center;
		border-bottom: 2px solid #d9d9d9;
	}
`;

const Button = styled.button`
	background: none;
	border: none;
	outline: none;
	width: 60%;
	padding: 10px 0;
	color: #fff;
	font-weight: 800;
	background-color: #a799ff;
	border-radius: 20px;
`;

const Login = () => {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Form autocomplete="off">
					<label for="username">What’s your name?</label>
					<input type="text" id="username" value="둘리" autofocus maxlength="5" required />
					<Button>START</Button>
				</Form>
			</Container>
		</>
	);
};

export default Login;
