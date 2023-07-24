import Card_mini from "../components/Card_mini";
interface WarnProp {
	next: () => void;
	prev: () => void;
}
const Warn = ({ next, prev }: WarnProp) => {
	return (
		<div className='flex flex-col'>
			<div className="w-52 px-5 max-w-md mx-auto">
				<img src='/icon/info.svg' className='w-full items-center justify-center  ' />
			</div>
			<div className='mx-10 flex flex-col max-w-md'>
				<h1 className=' leading-10 text-3xl font-bold text-center'>주의! </h1>
				<p className="py-6 text-start"> 공간을 선택하기 전에 참고해주세요</p>
				<div className="flex flex-col sm:flex-row ">
					<Card_mini img='home' des="1계정에 1공간이 제공됩니다."></Card_mini>
					<Card_mini img="trash" des="공간 변경시 시간이 소요됩니다"></Card_mini>
					<Card_mini img="stop" des="메타버스마다 차이가 있습니다"></Card_mini>
				</div>

			</div>
		</div>

	)
}

export default Warn;
