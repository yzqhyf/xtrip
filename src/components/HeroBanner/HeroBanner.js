import React from "react";
import styles from "./HeroBanner.module.scss";
import heroBackgroundImage from "../../../public/hero-image-lg.jpg";
import { TextField, Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const HeroBanner = () => {
	const handleOnClick = (event) => {
		console.log(event.currentTarget);
	};

	return (
		<>
			<div
				style={{
					backgroundImage: `linear-gradient(180deg, transparent, #fff), url(${heroBackgroundImage.src})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100%",
					height: "50vh",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					// background: `linear-gradient(to bottom, gray, transparent)`,
				}}
			>
				<h1 style={{ fontSize: 50, color: "white" }}>X.trip</h1>
				<div className="max-w-screen-lg w-3/6">
					<TextField
						fullWidth
						label="Search Destination"
						id="search-destination"
						slotProps={{
							input: {
								endAdornment: (
									<InputAdornment position="end">
										<SearchIcon style={{fontSize: 36}} className="hover:cursor-pointer"
											onClick={handleOnClick}
										/>
									</InputAdornment>
								),
							},
						}}
					/>
				</div>
				{/* <div className={styles['hero-image']}></div> */}
			</div>
		</>
	);
};
