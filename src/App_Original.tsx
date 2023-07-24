import { useState } from 'react'
import './App.css'
import Intro from './slide/Intro'
import Warn from './slide/Warn'
import ChoiceMetaverse from './slide/ChoiceMetaverse'
import ChoiceRoom from './slide/ChoiceRoom'
import anime from 'animejs'


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
		<ChoiceRoom next={next} prev={prev} />];

	const animateProgressBar = (newValue) => {
		anime({
			targets: '.progress-info',
			value: newValue * 25,
			easing: 'easeInOutExpo',
			duration: 400,
		});
	};

	return (

		<>
			<div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">


				<div className="mx-auto w-full max-w-3xl  bg-white rounded-lg  flex flex-col justify-center items-center ">
					<progress className="progress progress-info mt-3  w-80 mx-10 items-center justify-center" value={25 * currentIndex} max="100"></progress>
					<div className='mt-3'>

						{slide[currentIndex]}</div>
				</div >
			</div >
		</>
	)
}

export default App
