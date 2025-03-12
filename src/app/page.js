"use client";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
	return (
		<div className="min-h-screen w-screen flex flex-col justify-center items-center">
			<h1 className="text-4xl">Hello</h1>

			<Canvas>
				<ambientLight intensity={Math.PI / 2} />
				<spotLight
					position={[10, 10, 10]}
					angle={0.15}
					penumbra={1}
					decay={0}
					intensity={Math.PI}
				/>
				<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
				<Box position={[-4.2, 0, 0]} color="black" />
				<Box position={[4.2, 0, 0]} color="lightblue" />
				<PerspectiveCamera makeDefault args={[40]} position={[-2, 2, 10]} />
				<OrbitControls enableZoom={false} />
			</Canvas>
		</div>
	);
}

const Box = ({ color, ...props }) => (
	<mesh {...props}>
		<boxGeometry args={[2, 2, 2]} />
		<meshStandardMaterial color={color} />
	</mesh>
);
