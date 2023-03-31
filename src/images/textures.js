import { NearestFilter, TextureLoader } from "three";
import { RepeatWrapping } from "three"

import { dirtImg,
         planksImg,
         grassImg,
         woodImg
} from "./images";

const dirtTexture = new TextureLoader().load(dirtImg);
const planksTexture = new TextureLoader().load(planksImg);
const grassTexture = new TextureLoader().load(grassImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter = NearestFilter;
planksTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

export{
    dirtTexture,
    planksTexture,
    grassTexture,
    woodTexture,
    groundTexture,
}
