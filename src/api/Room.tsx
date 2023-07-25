import axios from "axios";
import { useMutation } from '@tanstack/react-query'
const API_KEY = import.meta.env.VITE_TOKEN;
const BASE_URL = 'https://api.airtable.com/v0/appfFDkFAS5nc32JC/Projects';

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

const sampleData = {
	records: [
		{
			fields: {
				Customer: '최대한',
				Date: '2023-07-23',
				Status: '의뢰',
				Metaverse: 'ustory',
				Room: 'office',
				Link: 'youstory.room',
			},
		},

	],
};



export default postToAirtable;
