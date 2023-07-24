interface CardProps {
	img: string;
	des: string;
}
const ShowCard = ({ img, des }: CardProps) => {
	const imagePath = `/icon/${img}.svg`;
	return (
		<div className="p-1 sm:w-40 w-full">
			<div className="border-2 border-black-200 rounded-lg">
				<img src={imagePath} className="mx-auto w-10" />
				<p className="leading-relaxed whitespace-pre-line break-words">{des}</p>
			</div>
		</div>

	);
}

export default ShowCard;
