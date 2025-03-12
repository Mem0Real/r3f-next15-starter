import "./globals.css";
import { Layout } from "@/r3f/components/dom/Layout";

export const metadata = {
	title: "R3F| Next JS 15",
	description: "Next Js 15 iteration of three.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`antialiased`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
