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

	const slide = [< Intro next={next} />, <Warn />, <ChoiceMetaverse />, <ChoiceRoom />];

	return (

		<>
			<div className="mx-auto w-full bg-blue-200 flex flex-col justify-center">
				<progress className="progress progress-info mt-3  w-80 mx-10" value={25 * currentIndex} max="100"></progress>

				{slide[currentIndex]}
			</div >
		</>
	)
}

export default App
