import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { useRef } from "react";
import styled from "styled-components";

type BoxProps = JSX.IntrinsicElements["mesh"];

function Box(props: BoxProps) {
  const meshRef = useRef<Mesh>(null);

  return (
    <mesh {...props} ref={meshRef}>
      <boxBufferGeometry args={[5, 3, 0.1]} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function NameCard() {
  return (
    <NameCardWrapper>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
        {/* <OrbitControls /> */}
      </Canvas>
    </NameCardWrapper>
  );
}

const NameCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 700px;
`;
