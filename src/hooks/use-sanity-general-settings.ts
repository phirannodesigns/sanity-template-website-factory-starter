import { graphql, useStaticQuery } from 'gatsby';

interface IAddress {
  googleMaps: {
    embed: string;
    link: string;
  };
  postcode: string;
  state: string;
  streetAddress: string;
  suburb: string;
}

interface IHours {
  days: string;
  hours: string;
}

interface SocialLinks {
  id: string;
  icon:
    | 'Apple'
    | 'Facebook'
    | 'Instagram'
    | 'Soundcloud'
    | 'Spotify'
    | 'Twitter'
    | 'YouTube'
    | 'Github';
  url: string;
}

interface ISanityGeneralSettings {
  address: IAddress;
  email: string;
  hours: Array<IHours>;
  id: string;
  phoneNumber: string;
  siteURL: string;
  socialLinks: Array<SocialLinks>;
}

interface ISanityGeneralSettingsQuery {
  sanityGeneralSettings: ISanityGeneralSettings;
}

function useSanitySiteSettings(): ISanityGeneralSettings {
  const {
    sanityGeneralSettings,
  } = useStaticQuery<ISanityGeneralSettingsQuery>(graphql`
    query SanityGeneralSettingsQuery {
      sanityGeneralSettings(_id: { eq: "generalSettings" }) {
        address {
          googleMaps {
            embed
            link
          }
          postcode
          state
          streetAddress
          suburb
        }
        email
        hours {
          days
          hours
        }
        id
        phoneNumber
        siteURL
        socialLinks {
          id: _key
          icon
          url
        }
      }
    }
  `);
  return sanityGeneralSettings;
}

export { useSanitySiteSettings };
