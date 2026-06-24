import clearBg from "../assets/clear.jpg";
import cloudsBg from "../assets/clouds.jpg";
import rainBg from "../assets/rain.jpg";
import defaultBg from "../assets/background.jpg";
import stormBg from "../assets/thunderstorm.jpg";
import snowBg from "../assets/snow.png";
import mistBg from "../assets/fog.jpg";

const backgroundStrategies: Record<string, string> = {
  "01": clearBg,
  "02": cloudsBg,
  "03": cloudsBg,
  "04": cloudsBg,
  "09": rainBg,
  "10": rainBg,
  "11": stormBg,
  "13": snowBg,
  "50": mistBg,
};

export function getBackgroundImage(icon: string): string {
  const code = icon.slice(0, 2);
  return backgroundStrategies[code] ?? defaultBg;
}
