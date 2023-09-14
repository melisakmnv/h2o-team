
import facebook from '../../assets/icons/facebook.png'
import pinterest from '../../assets/icons/pinterest.png'
import tiktok from "../../assets/icons/tk.png"
import instagram from '../../assets/icons/ig.png'
import likedin from '../../assets/icons/lk.png'
import youtube from '../../assets/icons/yt.png'
import logo from "../../assets/icons/logo-mini2.png"
import join from "../../assets/icons/bouton.png"
import join_nl from "../../assets/icons/bouton-nl.png"
import avatarPlaceholder from '../../assets/images/colibri-avatar.png'
import loc from "../../assets/icons/Location.png"
import tel from "../../assets/icons/Telephone.png"
import internet from "../../assets/icons/world.png"


const mode = "PROD"
export const DEV_VERSION = "team"


export const signatureInfo = {

  illustrations: {
    avatar: {
      src: mode === "DEV" ? "https://u.cubeupload.com/Sono/colibriavatar.png" : avatarPlaceholder,
      alt: "Profile",
    },
    logo: {
      src: mode === "DEV" ? "https://mailsignature-275b.vercel.app/assets/logo-mini2-06a17a45.png" : logo,
      alt: "H20 Logo",
      link: "https://www.h2oathome.fr/",
    },

    joinLink: {
      src: mode === "DEV" ? "https://mailsignature-275b.vercel.app/assets/bouton-8e74b5b5.png" : join,
      alt: "Join Social Button",
      LANGUAGE: [
        {
          ID: "FR",
          src: mode === "DEV" ? "https://mailsignature-275b.vercel.app/assets/bouton-8e74b5b5.png" : join,
        },
        {
          ID: "NL",
          src: mode === "DEV" ? "https://mailsignature-275b.vercel.app/assets/bouton-8e74b5b5.png" : join_nl,
        },
      ]
    },

    iconLinks: {

      top: [
        {
          id: "PINTEREST_ICON",
          src: mode === "DEV" ? "https://mailsignature-team.vercel.app/assets/pinterest-196e0559.png" : pinterest,
          alt: "Pinterest Icon",
          link: "https://www.pinterest.fr/h2oathomefrance/"
        },
        {
          id: "TIKTOK_ICON",
          src: mode === "DEV" ? "https://mailsignature-275b.vercel.app/assets/tk-a69993b3.png" : tiktok,
          alt: "Tiktok Icon",
          link: "https://www.tiktok.com/@h2oathomeofficiel"
        },
        {
          id: "LIKEDIN_ICON",
          src: mode === "DEV" ? "https://mailsignature-275b.vercel.app/assets/lk-500c4c9a.png" : likedin,
          alt: "LinkedIn Icon",
          link: "https://www.linkedin.com/company/h2o-at-home-france/"
        }
      ],
      bottom: [
        {
          id: "FACEBOOK_ICON",
          src: mode === "DEV" ? "https://mailsignature-team.vercel.app/assets/facebook-5b1a7978.png" : facebook,
          alt: "Facebook Icon",
          link: "https://www.facebook.com/h2oathomefrance/"
        },
        {
          id: "YOUTUBE_ICON",
          src: mode === "DEV" ? "https://mailsignature-275b.vercel.app/assets/yt-1d2cb977.png" : youtube,
          alt: "Youtube Icon",
          link: "https://www.youtube.com/channel/UC55WYroF4_hj8MV1GBMlouQ"
        },
        {
          id: "INSTAGRAM_ICON",
          src: mode === "DEV" ? "https://mailsignature-275b.vercel.app/assets/ig-e308393f.png" : instagram,
          alt: "Instagram Icon",
          link: "https://www.instagram.com/h2oathomefrance/"
        }
      ]
    },

    iconContacts: [
      {
        id: "TELEPHONE_ICON",
        src: mode === "DEV" ? "https://mailsignature-275b.vercel.app/assets/tel-394413a0.png" : tel,
        atl: "Telephone Icon",
      },
      {
        id: "LOCATION_ICON",
        src: mode === "DEV" ? "https://mailsignature-275b.vercel.app/assets/loc-d7a1b62f.png" : loc,
        atl: "Location Icon",
      },

    ],

    iconContacts_team: [
      {
        id: "TELEPHONE_ICON",
        src: mode === "DEV" ? "https://mailsignature-275b.vercel.app/assets/tel-394413a0.png" : tel,
        atl: "Telephone Icon",
      },
      {
        id: "LOCATION_ICON",
        src: mode === "DEV" ? "https://mailsignature-275b.vercel.app/assets/loc-d7a1b62f.png" : loc,
        atl: "Location Icon",
      },
      {
        id: "WORLD_ICON",
        src: internet,
        alt: "World Icon"
      }
    ]
  },

  userInfo: {

    name: [
      {
        id: "FIRSTNAME",
        LANG: [
          {
            ID: "FR",
            lang: "French",
            placeHolder: "Prénom",
          },
          {
            ID: "NL",
            lang: "Nl",
            placeHolder: "Voornaam",
          }
        ]
      },
      {
        id: "LASTNAME",
        LANG: [
          {
            ID: "FR",
            lang: "French",
            placeHolder: "Nom",
          },
          {
            ID: "NL",
            lang: "Nl",
            placeHolder: "Achternaam",
          }
        ]
      }
    ],

    poste: {
      LANG: [
        {
          ID: "FR",
          lang: "French",
          placeHolder: "Conseillère Certifiée Indépendante",
        },
        {
          ID: "NL",
          lang: "Nl",
          placeHolder: "Zelfstandige Bevestigde Consulente",
        }
      ]
    },

    contact: {
      LANG: [
        {
          ID: "FR",
          lang: "French",
          placeHolder: "(0)6 XX XX XX XX",
        },
        {
          ID: "NL",
          lang: "Nl",
          placeHolder: "(0)XXX XX XX XX",
        }
      ],
      placeHolder_Loc: "Hallennes-Lez-Haubourdin",
      placeHolder_Link: "www.h2oathome.com",
      internet_link: "https://h2o.h2oathome.com/accueil/"
    }
  }
}


export const IDS = {
  FIRSTNAME: signatureInfo.userInfo.name[0].id,
  TELEPHONE_ICON: signatureInfo.illustrations.iconContacts[0].id,
  LOCATION_ICON: signatureInfo.illustrations.iconContacts[1].id
}

