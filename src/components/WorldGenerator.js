import { useBox } from "@react-three/cannon"
import { useStore } from "../hooks/useStore"
import { grassTexture } from "../images/textures" 

export const WorldGenerator = ({position, texture}) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position
  }))
  
  const [addCube, removeCube] = useStore((state) => [state.addCube,state.removeCube])
  const activeTexture =grassTexture
  
  return(
    <group>
    {Array(10).fill().map((_, index) => (
        <mesh position={[index, index, index]} key={index}>
          <boxBufferGeometry attach='geometry' />
          <meshStandardMaterial map={activeTexture} attach='material' />
        </mesh>
      ))}
   </group>
    )
}
