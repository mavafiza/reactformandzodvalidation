import styled from "styled-components";
import { motion } from 'framer-motion';


export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 30px;
	width: 100%;
	color: grey;
	background-color: #202027;
	border: 1px solid #2E3852;
	font-size: 1rem;
`;

export const FormLabel = styled.label`
	display: inline-block;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color: white;
`;

export const FormWrapper = styled.form`
	/* max-width: 540px; */
	padding-top: 0;
	width: 45%;
	/* height: 30%; */
	background-color: #202027;
	padding: 2% 4% 3% 4%;
	border-radius: 10px;
`;

export const FormMessage = styled(motion.div)`
	color: ${({ error }) => (error ? 'red' : 'green')};
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
	background-color: #202027;
	color: grey;
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 1.4rem;

	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;