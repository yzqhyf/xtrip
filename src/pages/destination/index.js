import React, { useState } from "react";
import Image from "next/image";
import {
	Tabs,
	Tab,
	useTheme,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	Grid2,
	Box,
	Typography,
	InputLabel,
	FormControl,
	NativeSelect,
	useMediaQuery,
	Paper,
	Card,
	CardContent,
	CardMedia,
	Avatar,
	Select,
	MenuItem,
	CardActionArea,
	IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import Panel from "./Panel";
import HeroBanner from "../../components/HeroBanner";
import ImageCard from "../../components/ImageCard";
import { desitination } from "../../utils/destination";
import { travelMoments } from "../../utils/travelMoments";
import { getImageUrl } from "../../utils/getImageUrl";

const Destination = () => {
	const theme = useTheme();
	const regionList = Object.keys(desitination);
	const [value, setValue] = useState(0);
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

	const handleRegionChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleRegionSelect = (event) => {
		console.log(event);
		setValue(Number(event.target.value));
	};

	const handleCardClick = (event) => {
		event.preventDefault();
		console.log("Card Click");
	};

	const handleShareClick = (event) => {
		event.stopPropagation();
		console.log("share click");
	};

	const handleFavoriteClick = (event) => {
		event.stopPropagation();
		console.log("Favor Click");
	};

	const stringAvatar = (name) => {
		return {
			children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
		};
	};

	const imageCols = () => {
		if (isMobile) return 1;
		if (isDesktop) return 3;
		return 2;
	};

	const renderDestinationSection = (regionList) => {
		return (
			<>
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{regionList.map((citi, index) => {
						return (
							<ImageListItem key={`${citi.name}-${index}`}>
								<div className="relative overflow-hidden rounded-md">
									<Image
										className="scale-100 hover:scale-110 transition duration-1000 ease-in-out"
										src={getImageUrl(citi.imageId)}
										alt={citi.name}
										sizes="100vw"
										// Make the image display full width
										width={500}
										height={350}
										style={{ objectFit: "fill" }}
										loading="lazy"
									/>
								</div>
								<ImageListItemBar
									title={citi.name}
									subtitle={`@${citi.region}`}
									actionIcon={
										// <div
										// 	style={{
										// 		width: "16px",
										// 		height: "16px",
										// 		margin: "6px",
										// 		color: "lightgray",
										// 	}}
										// >
										// 	<svg
										// 		xmlns="http://www.w3.org/2000/svg"
										// 		viewdiv="0 0 16 16"
										// 		fill="currentColor"
										// 		className="size-4"
										// 	>
										// 		<path
										// 			fillRule="evenodd"
										// 			d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z"
										// 			clipRule="evenodd"
										// 		/>
										// 	</svg>
										// </div>
										<InfoIcon
											sx={{
												margin: "6px",
												color: "lightgray",
											}}
										/>
									}
								/>
							</ImageListItem>
						);
					})}
				</div>
				{/* {regionList.map((citi, index)=> {
					return (
						<div key={`${citi.name}-${index}`}>
							<label>{citi.name}</label>
							<Image src={getImageUrl(citi.imageId)} alt={citi.name} width={90} height={90} />
						</div>
					) 
				})} */}
			</>
		);
	};

	const renderExerienceSection = () => {
		return (
			<div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
				{travelMoments.map((moment, index) => (
					<Card key={`travel-card-${index}`}>
						<CardMedia
							className="bg-cover h-40 sm:h-36 md:h-32"
							image={moment.imageUrl}
							title={moment.title}
						/>
						<CardContent className="cursor-pointer hover:bg-gray-100" onClick={handleCardClick}>
							<Typography
								className="text-sm sm:text-lg"
								variant="h6"
								gutterBottom
								noWrap
							>
								{moment.title}
							</Typography>
							<div className="min-h-16 line-clamp-3">
								<Typography
									variant="body2"
									color="textSecondary"
								>
									{moment.description}
								</Typography>
							</div>

							<div className="flex items-center align-middle pt-4">
								<Avatar
									className="hidden lg:flex h-9 w-9 text-base mr-3"
									{...stringAvatar(moment.author)}
								></Avatar>
								<div className="flex-1">
									<Typography
										className="font-semibold"
										variant="body2"
									>
										{moment.author}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
									>
										{new Date(
											moment.date
										).toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</Typography>
								</div>
								<div>
									<IconButton onClick={handleShareClick}>
										<ShareIcon />
									</IconButton>
									<IconButton onClick={handleFavoriteClick}>
										<BookmarkBorderIcon />
									</IconButton>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		);
	};

	return (
		<div className="destination-page w-full">
			<div className="hero-banner">
				<HeroBanner />
			</div>
			<div className="mx-auto my-0 mt-4 xl:max-w-screen-2xl">
				<div className="p-6 sm:p-4">
					<Typography className="text-2xl text-gray-600 font-semibold">
						Travel Destination
					</Typography>
					<div className="flex justify-center sm:hidden">
						<FormControl
							className="w-full max-w-[500px] my-2"
							variant="standard"
						>
							<InputLabel
								variant="standard"
								htmlFor="destination-select"
							>
								Destination
							</InputLabel>
							{/* <NativeSelect
								defaultValue={value}
								inputProps={{
									name: "destination",
									id: "destination-select",
								}}
								onChange={handleRegionSelect}
							>
								{regionList.map((region, index) => (
									<option
										className="text-lg"
										key={`${region}-${index}`}
										value={index}
									>
										{region}
									</option>
								))}
							</NativeSelect> */}
							<Select
								id="destination-select"
								label="Destination"
								value={value}
								onChange={handleRegionSelect}
							>
								{regionList.map((region, index) => (
									<MenuItem
										key={`${region}-${index}`}
										value={index}
									>
										{region}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>
					<div className="hidden sm:block">
						<Tabs
							className="mt-2 mb-2 f-1"
							value={value}
							onChange={handleRegionChange}
							variant="fullWidth"
							// variant="scrollable"
							// scrollButtons="auto"
						>
							{regionList.map((region, index) => {
								return (
									<Tab
										key={`desination-tab-${index}`}
										className="font-semibold text-sm"
										label={region}
									/>
								);
							})}
						</Tabs>
					</div>
					<div className="flex justify-center md:block">
						{regionList.map((region, index) => {
							return (
								<Panel
									key={`${region}-${index}`}
									visibility={value !== index}
								>
									{renderDestinationSection(
										desitination[region]
									)}
								</Panel>
							);
						})}
					</div>
				</div>

				<div className="p-6 mb-10 sm:p-4">
					<Typography className="mb-4 text-2xl text-gray-600 font-semibold">
						Travel Moment
					</Typography>
					{renderExerienceSection()}
				</div>
			</div>
		</div>
	);
};

export default Destination;
