import { grassTexture } from "../images/textures" 
import { Cube } from "./Cube"
export const WorldGenerator = ({position, texture}) => {
  const activeTexture =grassTexture
  
  return(
     <>
        {Array(10).fill().map((_, index) => (
              <Cube position={[index,index,index]} texture={activeTexture}/>
        ))}
     </>
    )
}
