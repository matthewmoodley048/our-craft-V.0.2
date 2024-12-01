import { useEffect } from 'react'
import { useStore } from '../hooks/useStore'
import { Keyboard } from '../hooks/Keyboard'
import { stoneImg, dirtImg, grassImg, woodImg, planksImg } from '../images/images'

const images = {
  dirt: dirtImg,
  stone: stoneImg,
  grass: grassImg,
  planks: planksImg,
  wood: woodImg,
}

export const TextureSelector = () => {
  const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
  const {
    dirt,
    grass,
    wood,
    planks,
    stone,
  } = Keyboard()

  useEffect(() => {
    const textures = {
      dirt,
      grass,
      wood,
      planks,
      stone,
    }

    const pressedTexture = Object.entries(textures).find(([k, v]) => v)
    if (pressedTexture) {
      setTexture(pressedTexture[0])
    }
  }, [setTexture, dirt, stone, grass, wood, planks])


  return (
    <div className='texture-selector'>
      {Object.entries(images).map(([k, src]) => {
        return (<img
          key={k}
          src={src}
          alt={k}
          className={`${k === activeTexture ? 'active' : ''}`}
        />)
      })}
    </div>
  )
}
