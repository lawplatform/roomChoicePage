interface CardProps {
	img: string;
	des: string;
}
const Card_mini = ({ img, des }: CardProps) => {
	const imagePath = `/icon/${img}.svg`;
	return (
		<div className="p-1 w-full flex justify-center h-30  sm:w-32">
			<div className="border-2 border-black-200 rounded-lg px-2 py-3">
				<img src={imagePath} className="mx-auto w-10 sm:w-20" />
				<p className="leading-relaxed whitespace-pre-line break-words text-center">{des}</p>
			</div>
		</div>

	);
}

export default Card_mini;
