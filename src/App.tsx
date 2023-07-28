import { createContext, useState } from 'react'
import './App.css'
import Intro from './slide/Intro'
import Warn from './slide/Warn'
import ChoiceMetaverse from './slide/ChoiceMetaverse'
import ChoiceRoom from './slide/ChoiceRoom'
import anime from 'animejs'
import Btn_Confirm from './components/Btn_Confirm'
import Btn_start from './components/Btn_start'
import Btn_Middle from './components/Btn_middle'
import Btn_prev from './components/Btn_prev'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import postToAirtable from './api/Room'
import Empty from './slide/Empty'
import LastCheck from './slide/LastCheck'
import Thank from './slide/Thank'
import getCurrentDate from './util/getCurrentDate'


function App() {
	const [currentIndex, setActiveIndex] = useState(0);
	const [record, setRecord] = useState(
		{
			Customer: '고양시',
			Metaverse: 'ustory',
			Room: 'office',
			Link: 'youstory.room',
		},
	);
	const updateRoom = (newName, newLink) => {
		setRecord((prevRecord) => ({
			...prevRecord,
			Room: newName,
			Link: newLink
		}));
	};

	const setName = (Name) => {
		setRecord((prevRecord) => ({
			...prevRecord,
			Customer: Name,
		}));
	};

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
		<ChoiceRoom next={next} prev={prev} platform='ustory' change={updateRoom} />,
		<LastCheck record={record} />,
		<Thank />
	];



	const animateProgressBar = (newValue: number) => {
		anime({
			targets: '.progress-info',
			value: newValue * 25,
			easing: 'easeInOutExpo',
			duration: 400,
		});
	};

	const mutation = useMutation((data) => postToAirtable(data), {
		onSuccess: (data) => {
			console.log('Mutation successful:', data);
		},
		onError: (error) => {
			console.error('Mutation error:', error);
		},
	});
	const addRoom = async (data: any) => {
		mutation.mutate(data);
	}

	const sendData = () => {
		let date = getCurrentDate();
		console.log("data loading");

		let Data = {
			records: [
				{
					fields: {
						Customer: record.Customer,
						Date: date,
						Status: '의뢰',
						Metaverse: 'ustory',
						Room: record.Room,
						Link: record.Link,
					},
				},]

		};

		addRoom(Data);
	}
	const slideBtn = [
		<Btn_start next={next} />,
		<Btn_Middle next={next} prev={prev} />,
		<Btn_Middle next={next} prev={prev} />,
		<Btn_prev prev={prev} />,
		<Btn_Confirm next={sendData} prev={prev} />,
		<Empty></Empty>

	];
	return (

		<>
			<div className=" h-full sm:h-[1100px]  object-center sm:items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-cover ">
				<div className="mx-auto w-full max-w-3xl h-full bg-white rounded-lg  flex flex-col justify-center items-center   sm:pt-10">
					<progress className="progress progress-info  mt-3 w-80 mx-10 items-center justify-center" value={25 * currentIndex} max="100"></progress>
					<div className='flex flex-col mt-3 px-5 '>
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
