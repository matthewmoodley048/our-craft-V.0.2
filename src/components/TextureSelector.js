import {useEffect, useState} from 'react'
import { useStore } from '../hooks/useStore'
import { Keyboard } from '../hooks/Keyboard'
import { dirtImg, grassImg, woodImg, planksImg } from '../images/images'
import { Box, Text } from '@chakra-ui/react'
const images = {
    dirt: dirtImg,
    grass: grassImg,
    planks: planksImg,
    wood: woodImg,
}

export const TextureSelector = () => {
    const [visible, setVisible] = useState(true)
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

    // useEffect(() => {
    //     const visiblityTimeout = setTimeout(() => {
    //         setVisible(false)
    //     },2000 )
    //     setVisible(true)
    //     return () => {
    //       clearTimeout(visiblityTimeout)  
    //     }
    // }, [activeTexture])


    return visible && (
        <div className='absolute texture-selector'>
         {Object.entries(images).map(([k,src]) => {
           return (
           <Box bgColor={'grey'} flexDir={'row'} height={'125%'} padding={50} width={'100%'}>
           <Box>
           <img 
            key={k} 
            src = {src}
            alt={k}
            className={`${k === activeTexture ? 'active' : ''}`}
           />
           </Box>
           </Box>)
         })}
        </div>
    )
}