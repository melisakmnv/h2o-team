import { maxImageWeightInMB } from "../../constants/uploadConfig.js"

export const formErrorMessages = {
  REQUIRED: {
    LANGUAGE: [
      {
        ID: "FR",
        MESSAGE: "* Ce champ est obligatoire"
      },
      {
        ID: "NL",
        MESSAGE: "* Dit veld is verplicht"
      },
    ]
  },
  MAX_SIZE: {
    LANGUAGE: [
      {
        ID: "FR",
        MESSAGE: `La taille du fichier ne doit pas dépasser ${maxImageWeightInMB} Mo}`
      },
      {
        ID: "NL",
        MESSAGE: `De bestandsgrootte mag niet groter zijn dan ${maxImageWeightInMB} Mb`
      },
    ]
  },
}