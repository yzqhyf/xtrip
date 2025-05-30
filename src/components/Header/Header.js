"use client";

import React, { useState } from "react";
import Link from "next/link";
// import Button from "../Button";
import {
	Menu,
	MenuItem,
	useTheme,
	useMediaQuery,
	IconButton,
	Drawer,
	Box,
	Button,
	List,
	ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const menuItems = [
	{
		text: "Home",
		href: "/",
	},
	{
		text: "Destination",
		href: "/destination",
	},
	{
		text: "Blog",
		href: "#",
	},
	{
		text: "About Us",
		href: "/about",
	},
	{
		text: "Contact Us",
		href: "/contact",
	},
];

export const Header = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const [anchorEl, setAnchorEl] = useState(null);
	const menuOpen = Boolean(anchorEl);
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const handleMenuClick = (event) => {
		setAnchorEl(event.currentTarget);
		// console.log(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleDrawerClick = () => {
		console.log("drawer click");
		setDrawerOpen(!isDrawerOpen);
	};

	const blogMenu = () => {
		return (
			<Menu
				id="blog-menu"
				anchorReference="anchorPosition"
				anchorPosition={{ top: 68, left: 250 }}
				open={menuOpen}
				anchorEl={anchorEl}
				onClose={handleMenuClose}
				disableScrollLock={true}
			>
				<MenuItem>
					<Link className="hover:no-underline" href="/post/user/abc">
						Go to pages/post/[id].js
					</Link>
				</MenuItem>
				<MenuItem>
					<Link
						className="hover:no-underline"
						href="/post/user/abc?foo=bar"
					>
						Also goes to pages/post/[id].js
					</Link>
				</MenuItem>
				<MenuItem>
					<Link
						className="hover:no-underline"
						href="/post/user/id/comment"
					>
						Go to pages/post/[id]/[comment].js
					</Link>
				</MenuItem>
			</Menu>
		);
	};

	return (
		<>
			<div className="flex w-full px-2 py-4 bg-gray-800 sticky top-0 z-50">
				{isMobile ? (
					<>
						<IconButton onClick={handleDrawerClick}>
							<MenuIcon className="text-gray-300" />
						</IconButton>
						<Drawer
							anchor="top"
							open={isDrawerOpen}
							onClose={handleDrawerClick}
							variant="persistent"
							className="border-b-gray-800"
						>
							<Box className="bg-gray-800">
								<div className="flex w-full px-2 py-4 bg-gray-800 sticky top-0 z-50 border-b border-b-slate-600">
									<IconButton onClick={handleDrawerClick}>
										<CloseIcon className="text-gray-300" />
									</IconButton>
								</div>
								<List>
									{menuItems.map((item, index) => (
										<ListItem
											key={`menu-${item.text}-${index}`}
										>
											<Link
												className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline rounded-md px-2 py-2 text-sm font-medium w-full"
												href={item.href}
											>
												{item.text}
											</Link>
										</ListItem>
									))}
								</List>
							</Box>
						</Drawer>
					</>
				) : (
					<div>
						<Link
							className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline rounded-md px-8 py-2 text-sm font-medium"
							href="/"
						>
							Home
						</Link>

						<Link
							className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline rounded-md px-8 py-2 text-sm font-medium"
							href="/destination"
						>
							Destination
						</Link>

						<Button
							className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline rounded-md px-8 py-2 text-sm font-medium"
							onClick={handleMenuClick}
							endIcon={<KeyboardArrowDownIcon />}
						>
							Blog Post
						</Button>
						{blogMenu()}

						<Link
							className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline rounded-md px-8 py-2 text-sm font-medium"
							href="/about"
						>
							About Us
						</Link>

						<Link
							className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline rounded-md px-8 py-2 text-sm font-medium"
							href="/contact"
						>
							Contact Us
						</Link>
					</div>
				)}
			</div>
		</>
	);
};
