import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import React from 'react';
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FPV } from "./components/FPV";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelector";
import { Menu } from "./components/Menu";
import {WorldGenerator} from "./components/WorldGenerator"

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[1100,100,20]}/>
        <ambientLight intensity={0.5}/>
        <FPV/>
        <Physics>
          <Player/>
           <Cubes/>
          <Ground/>
        <WorldGenerator/>
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
      <TextureSelector/>
      <Menu/>
    </>
  );
}

export default App;