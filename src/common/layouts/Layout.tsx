import React, { PropsWithChildren } from "react";
import TopBar from "./TopBar";
import Box from "@mui/material/Box";
const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Box >
				<TopBar />
				{children}

			</Box>
		</>
	);
};
export default Layout;
