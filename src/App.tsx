import { useState } from 'react'
import './App.css'
import Intro from './slide/Intro'
import Warn from './slide/Warn'
import ChoiceMetaverse from './slide/ChoiceMetaverse'
import ChoiceRoom from './slide/ChoiceRoom'
import anime from 'animejs'
import Btn_start from './components/Btn_start'
import Btn_Middle from './components/Btn_middle'
import Btn_prev from './components/Btn_prev'
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query'


function App() {
	const [currentIndex, setActiveIndex] = useState(0);
	const next = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % slide.length);
		animateProgressBar((currentIndex + 1) % slide.length);

	};
	const prev = () => {
		setActiveIndex((prevIndex) => (prevIndex + -1) % slide.length);
		animateProgressBar((currentIndex - 1 + slide.length) % slide.length);
	};

	const slide = [
		< Intro next={next} />,
		<Warn next={next} prev={prev} />,
		<ChoiceMetaverse next={next} prev={prev} />,
		<ChoiceRoom next={next} prev={prev} platform='ustory' />];

	const slideBtn = [
		<Btn_start next={next} />,
		<Btn_Middle next={next} prev={prev} />,
		<Btn_Middle next={next} prev={prev} />,
		<Btn_prev prev={prev} />

	];

	const animateProgressBar = (newValue: number) => {
		anime({
			targets: '.progress-info',
			value: newValue * 25,
			easing: 'easeInOutExpo',
			duration: 400,
		});
	};
	const API_KEY = import.meta.env.VITE_TOKEN;
	//const API_KEY = 'pat22tMTRwlrvbaGH.870d356d7f903bb1406ca6688f3dca1876ac140e1aa08bae7bf251dcdd9313d9'; // Replace with your actual Airtable API key
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



	const sendData = () => {
		mutation.mutate(sampleData);


	}
	return (

		<>
			<div className=" h-full sm:h-[1100px]  object-center sm:items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-cover ">
				<div className="mx-auto w-full max-w-3xl h-full bg-white rounded-lg  flex flex-col justify-center items-center   sm:pt-10">
					<progress className="progress progress-info  mt-3 w-80 mx-10 items-center justify-center" value={25 * currentIndex} max="100"></progress>
					<div className='flex flex-col mt-3 px-10 '>
						<button onClick={sendData}>send data Test </button>

						{slide[currentIndex]}
						<div className='mt-1 fixed left-0 bottom-0
            flex justify-center items-center w-full mb-3'>
							{slideBtn[currentIndex]}
						</div>
					</div>
				</div>
			</div >
		</>
	);
}

export default App
