import { Three } from "@/r3f/helpers/Three";
import { OrbitControls, View as ViewImpl } from "@react-three/drei";
import { forwardRef, useImperativeHandle, useRef } from "react";

export const View = ({ children, orbit, ref, ...props }) => {
	const localRef = useRef(null);
	useImperativeHandle(ref, () => localRef.current);

	return (
		<>
			<div ref={localRef} {...props} />
			<Three>
				<ViewImpl track={localRef}>
					{children}
					{orbit && <OrbitControls enableZoom={false} dampingFactor={0.2} />}
				</ViewImpl>
			</Three>
		</>
	);
};
