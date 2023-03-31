//used to make keyboard controls
import { useEffect, useState } from 'react'
import { useCallback } from 'react'
function ActionByKey(key){
  const KeyActionMap = {
     KeyW: 'moveForward',
     KeyS: 'moveBackward',
     KeyA: 'moveLeft',
     KeyD: 'moveRight', 
     Space: 'jump',
     Digit1: 'dirt',
     Digit2: 'grass',
     Digit3: 'planks',
     Digit4: 'wood',
  }
  return KeyActionMap[key]
}

export const Keyboard = () => {
    const [actions, setActions] = useState({
         moveForward: false,
         moveBackward: false,
         moveLeft: false,
         moveRight: false,
         jump: false,
         dirt: false,
         grass: false,
         wood: false,
         planks: false,
    })

    const handleKeyDown = useCallback((e) =>{
        const action = ActionByKey(e.code)
        if(action){
                setActions((prev) => {
                    return({
                        prev,
                        [action]: true
                    })
                })
         }
    },[])

    const handleKeyUp = useCallback((e) =>{
        const action = ActionByKey(e.code)
        if(action){
                setActions((prev) => {
                    return({
                        prev,
                        [action]: false
                    })
                })
         }
    },[])

    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('keyup', handleKeyUp)
      return() =>{
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('keyup', handleKeyUp)
      }
    },[handleKeyDown, handleKeyUp])

    return actions
}