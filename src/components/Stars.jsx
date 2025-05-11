// import { useRef, useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// const Stars = () => {
//   const starsRef = useRef();
//   const numStars = 1000;

//   useEffect(() => {
//     const positions = new Float32Array(numStars * 3);
//     for (let i = 0; i < numStars; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 2000;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
//     }

//     if (starsRef.current) {
//       starsRef.current.geometry.setAttribute(
//         'position',
//         new THREE.BufferAttribute(positions, 3)
//       );
//     }
//   }, [numStars]);

//   useFrame(() => {
//     if (starsRef.current) {
//       starsRef.current.rotation.x -= 0.0005;
//       starsRef.current.rotation.y -= 0.0005;
//     }
//   });

//   return (
//     <points ref={starsRef}>
//       <bufferGeometry />
//       <pointsMaterial size={1.5} color="white" />
//     </points>
//   );
// };

// export default Stars;
