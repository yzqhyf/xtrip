"use client"

import React, { useEffect } from "react";
import { Box, Grid2, Typography } from "@mui/material";
import { useTheme } from "../../context/themeContext";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
	const theme = useTheme();

	useEffect(() => {
		console.log(theme);
	}, []);

	return (
		<Box
			component="footer"
			className="py-3 px-4 m-auto"
			sx={{
				backgroundColor:
					theme?.palette?.mode === "light"
						? theme.palette.grey[200]
						: theme.palette.grey[800],
			}}
		>
			<Grid2 className="flex flex-col py-4 sm:flex-row justify-evenly">
				<Grid2 className="my-4">
					<Typography className="font-semibold text-gray-600 mb-4">
						Company
					</Typography>
					<Link href="#" className="block no-underline text-gray-400">
						<Typography className="text-left text-sm hover:text-gray-600">
							About Us
						</Typography>
					</Link>
					<Link href="#" className="block no-underline text-gray-400">
						<Typography className="text-left text-sm hover:text-gray-600">
							Careers
						</Typography>
					</Link>
					<Link href="#" className="block no-underline text-gray-400">
						<Typography className="text-left text-sm hover:text-gray-600">
							Contact Us
						</Typography>
					</Link>
				</Grid2>
				<Grid2 className="my-4">
					<Typography className="font-semibold text-gray-600 mb-4">
						Resources
					</Typography>
					<Link href="#" className="block no-underline text-gray-400">
						<Typography className="text-left text-sm hover:text-gray-600">
							Blog
						</Typography>
					</Link>
					<Link href="#" className="block no-underline text-gray-400">
						<Typography className="text-left text-sm hover:text-gray-600">
							Help Center
						</Typography>
					</Link>
					<Link href="#" className="block no-underline text-gray-400">
						<Typography className="text-left text-sm hover:text-gray-600">
							Privacy Policy
						</Typography>
					</Link>
				</Grid2>
				<Grid2 className="my-4">
					<Typography className="font-semibold text-gray-600 mb-4">
						Follow Us
					</Typography>
					<Link href="#" className="block no-underline text-gray-400">
						<Typography className="text-left text-sm hover:text-gray-600">
							<FacebookIcon className="text-base"/>
							Facebook
						</Typography>
					</Link>
					<Link href="#" className="block no-underline text-gray-400">
						<Typography className="text-left text-sm hover:text-gray-600">
							<TwitterIcon className="text-base"/>
							Twitter
						</Typography>
					</Link>
					<Link href="#" className="block no-underline text-gray-400">
						<Typography className="text-left text-sm hover:text-gray-600">
							<InstagramIcon className="text-base"/>
							Instagram
						</Typography>
					</Link>
				</Grid2>
			</Grid2>
			<Box className="mt-4 text-center">
				<Typography color="inherit" className="text-sm">
					{"Copyright "}
					<Link color="inherit" href="#">
						X.trip
					</Link>{" "}
					{new Date().getFullYear()}.
				</Typography>
			</Box>
		</Box>
	);
};
