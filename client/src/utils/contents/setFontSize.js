import { inputsConfig } from "../../constants/inputsConfig";

export function setFontSize(name) {
    if (name.length > 14) {
      return inputsConfig.nameFontSize - (name.length * 0.3);
    } else {
      return inputsConfig.nameFontSize;
    }
} 