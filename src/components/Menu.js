import { useStore } from "../hooks/useStore"
import { Button } from "@chakra-ui/react"
export const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])
    
    return (<div className="menu absolute">
        <Button  colorScheme='blue' onClick = {() => saveWorld()}>Save</Button>
        <Button onClick = {() => resetWorld()}>Reset</Button>
    </div>)
}