import axios from "axios";
import { useMutation } from '@tanstack/react-query'
const API_KEY = import.meta.env.VITE_TOKEN;
const BASE_URL = 'https://api.airtable.com/v0/appfFDkFAS5nc32JC/Projects'

const postToAirtable = async (data) => {
	const config = {
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			'Content-Type': 'application/json',
		},
	};

	try {
		const response = await axios.post(BASE_URL, data, config);
		return response.data;
	} catch (error) {
		throw new Error('Error posting data to Airtable.');
	}
};

export default postToAirtable;
