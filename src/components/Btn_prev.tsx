interface Button_Props {
	prev: () => void;
}
const Btn_prev = ({ prev, next }: Button_Props) => {
	return (
		<div className="flex flex-row mx-auto">
			<button className="btn  group px-12 normal-case" onClick={prev}>
				<span>뒤로</span></button>
			<button className="btn btn-ghost group px-12 normal-case mx-2">다음
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block">
					<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
				</svg></button>
		</div>

	)
}

export default Btn_prev;
