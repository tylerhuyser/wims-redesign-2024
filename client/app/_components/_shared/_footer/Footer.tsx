'use client'

import React from 'react'

import links from "../../../content/00-nav-links.json"
import socialIcons from "../../../content/00-social-icons.json"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faVimeo, faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

import styles from './Footer.module.css'

const iconMap: Record<string, any> = {
  faYoutube,
  faVimeo,
  faInstagram,
  faFacebook,
  faTwitter,
};

export default function Footer() {

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    console.log("Clicked:", path);

    const id = path.replace("#", "");
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <>
        <div className={styles.footerContainer}>

        <div className={styles.footerContentContainer}>

          <div className={styles.footerLinksContainer}>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className={styles.footerLink}
                onClick={(e) => handleClick(e, link.path)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className={styles.footerSocialIconsContainer}>

            {socialIcons.map((social) => {
            const icon = iconMap[social.icon]
             return (
                <a
                  key={social.name}
                  className={styles.socialLink}
                  id={`${social.name}-social-link`}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={icon} className={social.class} />
                </a>
              )
            })}
            </div>

          <p className={styles.footerText}>ALL RIGHTS RESERVED. © 2025</p>
          
        </div>


        </div>
    </>
  )
}