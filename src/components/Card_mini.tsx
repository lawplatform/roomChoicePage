interface CardProps {
	img: string;
	des: string;
}
const Card_mini = ({ img, des }: CardProps) => {
	const imagePath = `/icon/${img}.svg`;
	return (
		<div className="p-1 sm:w-25 w-full flex justify-center ">
			<div className="border-2 border-black-200 rounded-lg px-3 py-3">
				<img src={imagePath} className="mx-auto w-10" />
				<p className="leading-relaxed whitespace-pre-line break-words">{des}</p>
			</div>
		</div>

	);
}

export default Card_mini;
