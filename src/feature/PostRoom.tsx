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

const mutation = useMutation((data) => postToAirtable(data), {
	// onSuccess event listener
	onSuccess: (data) => {
		// Handle logic when the mutation is successful
		console.log('Mutation successful:', data);
		// You can perform additional actions here
	},
	// onError event listener
	onError: (error) => {
		// Handle logic when the mutation encounters an error
		console.error('Mutation error:', error);
		// You can perform additional error-handling actions here
	},
});
