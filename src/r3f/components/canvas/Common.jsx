import { Suspense } from "react";
import { PerspectiveCamera, Sky } from "@react-three/drei";

export const Common = ({ color, ground, sky }) => {
	return (
		<Suspense fallback={null}>
			{color && <color attach="background" args={[color]} />}
			<ambientLight />
			<pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
			<pointLight position={[-10, -10, -10]} color="blue" decay={0.2} />
			<PerspectiveCamera makeDefault fov={50} position={[0, 0, 6]} />
			{sky && (
				<Sky
					distance={450000}
					sunPosition={[0, 1, 0]}
					inclination={0}
					azimuth={0.25}
				/>
			)}
			{ground && (
				<mesh position={[0, -0.52, 0]}>
					<cylinderGeometry args={[20, 20, 0, 56, 56]} />
					<meshBasicMaterial color={"rgb(131,132,137)"} />
				</mesh>
			)}
		</Suspense>
	);
};
