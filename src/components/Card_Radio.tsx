interface Card_RadioProps {
	name: string;
	meta: string;
	setMeta: (name: string) => void;
}
const Card_Radio = ({ name, meta, setMeta }: Card_RadioProps) => {
	const imagePath = `/logo/${name}.png`;
	const handleClick = () => {
		setMeta(name);
	};
	return (
		<div className="flex flex-col-reverse  justify-between sm:flex-col-reverse  items-center card  my-2 mx-1 sm:mx-1 py-1 pb-3  sm:h-30 w-24 sm:w-64 border-2 border-black-200 rounded-lg" onClick={handleClick}>
			<div className=" overflow-hidden mx-2 flex items-center">
				<input type="radio" value={name} className="radio w-4 h-4 " checked={meta == name} />
			</div>
			<div className="px-0 sm:px-2 w-14  sm:w-32">
				<img src={imagePath} alt="metaverse" className="w-full" />
			</div>
		</div>
	)
}

export default Card_Radio;
