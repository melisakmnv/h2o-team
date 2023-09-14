import { signatureInfo } from "../utils"

export const inputsConfig = {
  maxNameLength: 20,
  maxPhoneLenght: 10,
  nameFontSize: 20,
}

export const defaultMainForm = {
  firstname: "",
  lastname: "",
  phonearea: "33",
  telephone: "",
  poste: "",
  activity: "",
  profile: signatureInfo.illustrations.avatar.src,
  linktree: ""
}


export const defaultTeamForm = {
  firstname: "",
  lastname: "",
  phonearea: "33",
  telephone: "",
  poste: "",
  activity: "",
  profile: signatureInfo.illustrations.avatar.src,
}

export const defaultProfile = signatureInfo.illustrations.avatar.src