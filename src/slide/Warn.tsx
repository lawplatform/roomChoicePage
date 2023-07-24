import Card_mini from "../components/Card_mini";
interface WarnProp {
	next: () => void;
	prev: () => void;
}
const Warn = ({ next, prev }: WarnProp) => {
	return (
		<div className='flex flex-col sm:flex-row'>
			<div className="w-52 px-5 max-w-md mx-auto">
				<img src='/icon/info.svg' className='w-full items-center justify-center  ' />
			</div>
			<div className='mx-10 flex flex-col max-w-md'>
				<h1 className=' leading-10 text-3xl font-bold text-center'>주의! </h1>
				<p className="py-6 text-start"> 공간을 선택하기 전에 참고해주세요</p>
				<div className="flex flex-row">
					<Card_mini img='home' des="1계정에 1공간이 제공됩니다."></Card_mini>
					<Card_mini img="trash" des="변경시 이전 공간에 있던 자료들은 지워집니다"></Card_mini>
					<Card_mini img="stop" des="메타버스마다 지원되는 기능이 차이가 있습니다"></Card_mini>
				</div>
				<div className="flex flex-row mx-auto">
					<button className="btn  group px-12 normal-case" onClick={prev}>
						<span>뒤로</span></button>
					<button className="btn btn-neutral group px-12 normal-case mx-2" onClick={next}>다음
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block">
							<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
						</svg></button>
				</div>
			</div>
		</div>

	)
}

export default Warn;
