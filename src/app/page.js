"use client";

import { Common } from "@/r3f/components/canvas/Common";
import { View } from "@/r3f/components/canvas/View";
import { Suspense, useRef } from "react";

export default function Home() {
	return (
		<div className="w-full min-h-screen">
			<View orbit className="w-full h-screen">
				<Suspense fallback={null}>
					<Box position={[-2, 0, 0]} color="black" />
					<Box position={[2, 0, 0]} color="blue" />
					<Common color="grey" />
				</Suspense>
			</View>
		</div>
	);
}

const Box = ({ color, ...props }) => (
	<mesh {...props}>
		<boxGeometry />
		<meshStandardMaterial color={color} />
	</mesh>
);
