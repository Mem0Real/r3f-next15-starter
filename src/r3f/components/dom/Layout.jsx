"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/r3f/components/canvas/Scene"), {
	ssr: false,
});

export const Layout = ({ children }) => {
	const ref = useRef();

	return (
		<div ref={ref} className="relative w-full h-full overflow-auto touch-auto">
			{children}
			<Scene
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					pointerEvents: "none",
				}}
				eventSource={ref}
				eventPrefix="client"
			/>
		</div>
	);
};
