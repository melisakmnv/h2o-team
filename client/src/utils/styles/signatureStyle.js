import { inputsConfig } from "../../constants/inputsConfig";

export const signatureStyle = {
  fontFamily: "Helvetica",
  illustrations: {
    profile: {
      width: 120,
      height: 120,
      display: "block",
      borderRadius: "50%"
    },
    logo: {
      width: 65
    },
    icons: {
      square_md: 18,
      square_lg: 22
    },
    join: {
      height: 28
    }
  },
  info: {
    user: {
      fontSize: inputsConfig.nameFontSize,
      lineHeight: 24,
      color: {
        firstname: "#201747",
        lastname: "#E5554F"
      }
    },

    info_contact: {
      fontSize: 10,
      lineHeight: 12,
      lsp: 2
    },

    fontSize: 10,
    lineHeight: 12,
    lsp: 2
  },

  cellGap: {
    lg: 14,
    md: 8,
    sm: 4,
  },
  rowGap: {
    xl: 22,
    lg: 16,
    mdx: 14,
    md: 8,
    sm: 4
  }
}