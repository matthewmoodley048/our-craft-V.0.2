import { dirtTexture, grassTexture } from "../images/textures" 
import { Cube } from "./Cube"
export const WorldGenerator = ({}) => {
  return(
     <>
        {Array(10).fill().map((_, index) => (
              <Cube position={[index,index,index]} texture={'grass'}/>
        ))}
     </>
    )
}
