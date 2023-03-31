import {useEffect, useState} from 'react'
import { useStore } from '../hooks/useStore'
import { Keyboard } from '../hooks/Keyboard'
import { dirtImg, grassImg, woodImg, planksImg } from '../images/images'

const images = {
    dirt: dirtImg,
    grass: grassImg,
    planks: planksImg,
    wood: woodImg,
}

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [activeTexture,setTexture] = useStore((state) => [state.texture,state.setTexture])
    const {
        dirt,
        grass,
        wood,
        planks,
    } = Keyboard() 

    useEffect(() => {
        const textures = {
            dirt,
            grass,
            wood,
            planks,
        }

        const pressedTexture = Object.entries(textures).find(([k, v]) => v)
        if(pressedTexture){
            setTexture(pressedTexture[0])
        }
    }, [setTexture,dirt,grass,wood,planks])

    useEffect(() => {
        const visiblityTimeout = setTimeout(() => {
            setVisible(false)
        },2000 )
        setVisible(true)
        return () => {
          clearTimeout(visiblityTimeout)  
        }
    }, [activeTexture])

    return visible && (
        <div className='absolute texture-selector'>
         {Object.entries(images).map(([k,src]) => {
           return (<img 
            key={k} 
            src = {src}
            alt={k}
            className={`${k === activeTexture ? 'active' : ''}`}
           />)
         })}
        </div>
    )
}