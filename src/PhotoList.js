import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

function PhotoList() {
	const [photo, setPhoto] = useState([]);
	useEffect(() => {
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=bZq7dvX9tzei9EUf1T2t5ZY1vBwyXZGcgda4yg86&date=2020-09-24"
			)
			.then((response) => {
				console.log(response);
				setPhoto(response.data);
			});
	}, []);

	return (
		<div>
			<PhotoCard data={photo} />
		</div>
	);
}
export default PhotoList;
