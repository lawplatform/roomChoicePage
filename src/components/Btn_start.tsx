interface Button_StartProp {
	next: () => void;
}
const Btn_Start = ({ next }: Button_StartProp) => {
	return (
		<button className='btn btn-neutral' onClick={next}>시작하기</button>
	)
}

export default Btn_Start;
