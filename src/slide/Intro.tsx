import ShowCard from "../components/ShowCard";


interface IntroProp {
	next: () => void;
}

const Intro = ({ next }: IntroProp) => {
	return (
		<div className='flex flex-col sm:flex-row max-w-screen-lg mx-auto'>
			<div className="w-52 px-5 max-w-md mx-auto">
				<img src='/icon/city.svg' className='w-full items-center justify-center  ' />
			</div>
			<div className='mx-10 flex flex-col max-w-md'>
				<h1 className='text-start leading-10 text-3xl font-bold'>환영합니다</h1>
				<p className="py-6 text-start">원하는 목적에 어울리는 메타버스 공간을 가져보세요</p>
				<div className="flex flex-row">
					<ShowCard img='home' des="모임"></ShowCard>
					<ShowCard img="talk" des="상담"></ShowCard>
					<ShowCard img="sns" des="홍보"></ShowCard>
					<ShowCard img="edu" des="교육"></ShowCard>
				</div>

				<button className='btn btn-neutral' onClick={next}>시작하기</button>
			</div>
		</div>

	)
}

export default Intro;
