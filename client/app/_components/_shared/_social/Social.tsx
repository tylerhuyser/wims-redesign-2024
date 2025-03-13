import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faVimeo, faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./Social.css"

interface SocialLink {
  name: string;
  url: string;
  icon: any; // FontAwesome expects an `IconDefinition` type
  class: string;
}

export default function Social() {
  const socials: SocialLink[] = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@walkinmyshoesmedia1945",
      icon: faYoutube,
      class: "fa-brands fa-youtube"
    },
    {
      name: "Vimeo",
      url: "https://vimeo.com/user95351998",
      icon: faVimeo,
      class: "fa-brands fa-vimeo"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/walkinmyshoesmedia/?hl=en",
      icon: faInstagram,
      class: "fa-brands fa-instagram"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/WalkInMyShoesMedia/",
      icon: faFacebook,
      class: "fa-brands fa-facebook"
    },
    {
      name: "Twitter",
      url: "https://x.com/wimsmedia",
      icon: faTwitter,
      class: "fa-brands fa-twitter"
    },
  ];

  return (
    <div className="social-container">
      {socials.map((social) => (
        <a
          key={social.name}
          className="social-link"
          id={`${social.name}-social-link`}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={social.icon} className={social.class} />
        </a>
      ))}
    </div>
  );
}
