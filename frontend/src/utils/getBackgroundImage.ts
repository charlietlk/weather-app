import clearBg from "../assets/clear.jpg";
import cloudsBg from "../assets/clouds.jpg";
import rainBg from "../assets/rain.jpg";
import defaultBg from "../assets/background.jpg";
import stormBg from "../assets/thunderstorm.jpg";
import snowBg from "../assets/snow.png";
import mistBg from "../assets/fog.jpg";

export const getBackgroundImage = (icon: string) => {
  if (icon.startsWith("01")) return clearBg;
  if (icon.startsWith("02") || icon.startsWith("03") || icon.startsWith("04")) {
    return cloudsBg;
  }
  if (icon.startsWith("09") || icon.startsWith("10")) {
    return rainBg;
  }
  if (icon.startsWith("11")) return stormBg;
  if (icon.startsWith("13")) return snowBg;
  if (icon.startsWith("50")) return mistBg;
  return defaultBg;
};
