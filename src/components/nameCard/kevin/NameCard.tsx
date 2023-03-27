import { Canvas } from "@react-three/fiber";
import {
  RenderTexture,
  OrbitControls,
  PerspectiveCamera,
  Text,
  ContactShadows,
} from "@react-three/drei";
import { Mesh, Texture } from "three";
import { useRef } from "react";
import styled from "styled-components";
import { useLoader } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

type BoxProps = JSX.IntrinsicElements["mesh"];

function Box(props: BoxProps) {
  const meshRef = useRef<Mesh>(null);
  const textRef = useRef<Mesh>(null);
  // const ARCHISCULPTURE = useLoader(FontLoader, "./ARCHISCULPTURE_v200.ttf");

  return (
    <mesh {...props} ref={meshRef}>
      <boxBufferGeometry args={[0.5, 1, 0.1]} />
      <meshStandardMaterial>
        <RenderTexture attach="map" anisotropy={16}>
          <PerspectiveCamera
            makeDefault
            manual
            aspect={1 / 1}
            position={[0, 0, 5]}
          />
          <color attach="background" args={["white"]} />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} />
          <Text ref={textRef} fontSize={0.5} color="black">
            Kevin Kim
          </Text>
          <Text
            ref={textRef}
            fontSize={0.3}
            color="#555"
            position={[0, -0.7, 0]}
          >
            kevinkim910408
          </Text>
          <Text ref={textRef} fontSize={0.3} color="#555" position={[0, -1, 0]}>
            kjunho.dev@gmail.com
          </Text>
          <Text
            ref={textRef}
            fontSize={0.3}
            color="#555"
            position={[0, -1.5, 0]}
          >
            Developer
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export default function NameCard() {
  return (
    <NameCardWrapper>
      <Canvas camera={{ position: [0, 0, 5], fov: 15 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} />
        <Box position={[0, 0, 0]} />
        <ContactShadows
          frames={1}
          position={[0, -0.5, 0]}
          blur={1}
          color="black"
        />
        <ContactShadows
          frames={1}
          position={[0, -0.5, 0]}
          blur={2}
          opacity={0.75}
          color="black"
        />
        <ContactShadows
          frames={1}
          position={[0, -0.5, 0]}
          blur={3}
          color="black"
        />
        <OrbitControls minDistance={5} maxDistance={8} />
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
