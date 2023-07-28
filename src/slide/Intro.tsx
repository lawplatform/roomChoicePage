import anime from 'animejs'
import Card_mini from "../components/Card_mini";
import { ChangeEvent, useEffect, useState } from 'react';
interface IntroProp {
	next: () => void;
	changeName: (name: string) => void;
	name: string;
}

const Intro = ({ name, next, changeName }: IntroProp) => {
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		changeName(e.target.value);
		console.log(name);


	}


	useEffect(() => {
		anime({
			targets: 'card_mini', // Update to 'card_mini' without the dot
			opacity: [0, 1],
			easing: 'easeOutExpo',
			duration: 800,
			delay: (el, i) => i * 100,
		});
	}, []);
	return (
		<div className='flex flex-col  max-w-screen-lg mx-auto h-[700px]'>
			<div className="w-52 px-5 max-w-md mx-auto">
				<img src='/icon/city.svg' className='w-full items-center justify-center  ' />
			</div>
			<div className='mx-10 flex flex-col max-w-md'>
				<div className="flex flex-row">
					<input onChange={onChange} value={name} className="input input-bordered w-full max-w-xs" /><h1 className='text-3xl'>씨</h1>
				</div>
				<h1 className='text-start leading-10 text-3xl font-bold'>환영합니다</h1>
				<p className="py-6 text-start">원하는 목적에 어울리는 메타버스 공간을 가져보세요</p>
				<div className="flex flex-row card_mini">
					<Card_mini img='home' des="모임"></Card_mini>
					<Card_mini img="talk" des="상담"></Card_mini>
					<Card_mini img="sns" des="홍보"></Card_mini>
					<Card_mini img="edu" des="교육"></Card_mini>
				</div>

			</div>
		</div>

	)
}

export default Intro;
