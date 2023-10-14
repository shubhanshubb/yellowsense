import { Dimensions, Platform } from "react-native";

const {height, width} = Dimensions.get('screen');
export const sizes = {height, width};

export const Images = {
    image : require('../assets/image/Image.png')
}