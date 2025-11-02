import { Dimensions } from "react-native";

// this is use for proper responsive design
// it will return the width and height based on the percentage of the device width and height 

const {width: deviceWidth, height: deviceHeight} = Dimensions.get("window");

export const wp = percentage => {
  return (percentage * deviceWidth) / 100;
  
}

export const hp = percentage => {
  return (percentage * deviceHeight) / 100;
}