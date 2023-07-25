import { useState } from "react";
import Searchbar from "../components/SearchBar";
import Gallery_Button from "../components/Gallery_Button";
import Icon_label from "../components/Icon_label";
import { useQuery } from "@tanstack/react-query";

interface ChoiceRoomProp {
	platform: string;
	next: () => void;
	prev: () => void;
}

const ChoiceRoom = ({ platform, next, prev }: ChoiceRoomProp) => {
	const metaverse = "ustory"
	const imagePath = "/room/" + metaverse + "/"
	const [filterOptions, setFilterOptions] = useState(["sns", "home", "talk", "edu"]);
	const [search, setSearch] = useState("");
	const [room, setRoom] = useState({ name: "", desc: "", link: "" });
	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = event.target;
		if (checked) {
			setFilterOptions((prevOptions) => [...prevOptions, value]);
		} else {
			setFilterOptions((prevOptions) =>
				prevOptions.filter((option) => option !== value)
			);
		}
	};

	const { data, isLoading, error } = useQuery(['jsonData', { filter: { metaverse } }], () =>
		fetch('/room/ustory.json')
			.then((response) => response.json())
	);
	const applyFilters = () => {

		if (!data || !Array.isArray(data)) {
			// Handle the case when data is not available or not an array
			return [];
		}
		const filteredData = data.filter((item: any) =>
			item.category.some((cat: string) => filterOptions.includes(cat))
			&&
			(search.trim() === "" ||
				item.name.toLowerCase().includes(search.toLowerCase()))
		);

		return filteredData;
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Error</div>;
	}
	if (!data) {
		return <div>Item not found!</div>;
	}
	const filteredData = applyFilters();

	const showModal = (name: string) => {

		let choiceItem = filteredData.find(item => item.name === name);
		setRoom(choiceItem);
		window.my_modal.showModal()

	}
	const cilckHandler = () => {
		console.log("am I clicked?");

	}
	return (
		<>
			<h1 className='text-center leading-10 text-3xl font-bold'>공간 선택 </h1>
			<div className="form-control flex flex-row justify-center">
				<Icon_label icon="home" name="모임" handleChange={handleCheckboxChange} checked={filterOptions.includes("home")} />
				<Icon_label icon="edu" name="교육" handleChange={handleCheckboxChange} checked={filterOptions.includes("edu")} />
				<Icon_label icon="sns" name="홍보" handleChange={handleCheckboxChange} checked={filterOptions.includes("sns")} />
				<Icon_label icon="talk" name="상담" handleChange={handleCheckboxChange} checked={filterOptions.includes("talk")} />
			</div>

			<div className="mx-auto flex justify-center w-80 mt-3 mb-3">
				<Searchbar search={search} setSearch={setSearch} />

			</div>
			<div className=" h-[650px] overflow-y-scroll">
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5 px-5 ">
					{filteredData.map((item: any, index: number) => (
						<Gallery_Button name={item.name} key={index} img={imagePath + 'conssul-' + item.name + '.png'} show={showModal} />
					))}
				</div>

			</div >
			{/* You can open the modal using ID.showModal() method */}
			< dialog id="my_modal" className="modal" >
				<form method="dialog" className="modal-box">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					<h3 className="font-bold text-lg">{room.name}</h3>
					<img src={imagePath + 'conssul-' + room.name + '.png'} className="rounded-xl" />
					<a className="btn btn-neutral mt-3" target="_blank" href={'https://youstory.io/conssul-' + room.name}>
						<img src="/icon/see_white.svg" className="w-5" />
						구경하기
					</a>
					<div className="flex flex-row justify-between">
						<p> 다양한 공간들을 둘러보세요</p>
						<div className="relative ">
							<button className="btn btn-neutral" >
								선택
							</button>
						</div>
					</div>
				</form>
			</dialog >
		</>
	)
}
export default ChoiceRoom;
