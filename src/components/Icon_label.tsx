interface Icon_labelprops {
	name: string;
	icon: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	checked: boolean;
}
const Icon_label = ({ name, icon, handleChange, checked }: Icon_labelprops) => {
	const imagePath = `/icon/${icon}.svg`;
	return (
		<label className="label cursor-pointer mx-1">
			<div className="flex flex-col ">
				<img src={imagePath} className="mx-auto w-10" />
				<div className="flex flex-row items-center">
					<span className="label-text text-sm text-center">{name}</span>
					<input type="checkbox" value={icon}
						checked={checked} onChange={handleChange} className="ml-1 checkbox w-3 h-3" />

				</div>
			</div>
		</label>
	)
}

export default Icon_label;
