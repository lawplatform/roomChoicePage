import { useState } from 'react'
import './App.css'
import Intro from './slide/Intro'
import Warn from './slide/Warn'
import ChoiceMetaverse from './slide/ChoiceMetaverse'
import ChoiceRoom from './slide/ChoiceRoom'



function App() {

	const [currentIndex, setActiveIndex] = useState(0);
	const next = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % slide.length);
		console.log(currentIndex);

	};
	const prev = () => {
		setActiveIndex((prevIndex) => (prevIndex + -1) % slide.length);
	};

	const slide = [< Intro next={next} />, <Warn next={next} prev={prev} />, <ChoiceMetaverse next={next} prev={prev} />, <ChoiceRoom next={next} prev={prev} />];

	return (

		<>
			<div className="mx-auto w-full max-w-3xl  flex flex-col justify-center items-center">
				<progress className="progress progress-info mt-3  w-80 mx-10 items-center justify-center" value={25 * currentIndex} max="100"></progress>
				<div className='mt-3'>

					{slide[currentIndex]}</div>
			</div >
		</>
	)
}

export default App
