import ShowCard from "../components/ShowCard";
interface WarnProp {
	next: () => void;
	prev: () => void;
}
const Warn = ({ next, prev }: WarnProp) => {
	return (
		<div className='flex flex-col sm:flex-row'>
			<div className="w-52 px-5 max-w-md mx-auto">
				<img src='/icon/info.svg' className='w-full items-center justify-center bg-blue-100 ' />
			</div>
			<div className='mx-10 flex flex-col max-w-md'>
				<h1 className=' leading-10 text-3xl font-bold text-center'>주의! </h1>
				<p className="py-6 text-start"> 공간을 선택하기 전에 참고해주세요</p>
				<div className="flex flex-row">
					<ShowCard img='home' des="1계정에 1공간이 제공됩니다."></ShowCard>
					<ShowCard img="trash" des="변경시 이전 공간에 있던 자료들은 지워집니다"></ShowCard>
					<ShowCard img="stop" des="메타버스마다 지원되는 기능이 차이가 있습니다"></ShowCard>
				</div>
				<div className="flex flex-row mx-auto">
					<a className="btn  group px-12 normal-case">
						<span className="inline sm:hidden">뒤로</span></a>
					<a className="btn btn-neutral group px-12 normal-case">다음
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
						</svg></a>
				</div>
			</div>
		</div>

	)
}

export default Warn;
