import React from "react";
import "./css/Members.css";

import YahayaMB from "./Images/YahayaMB.jpg";
import UsmanAA from "./Images/UsmanAA.jpg";
import AbbaU from "./Images/AbbaU.jpg";
import Abba from "./Images/Abba.jpg";
import Shakir from "./Images/Shakir.jpg";

import Facebook from "./Images/facebook-square.svg";
import LinkedIn from "./Images/linkedin-square.svg";
import Twitter from "./Images/twitter-square.svg";
import Whatsapp from "./Images/whatsapp-square.svg";
import Instagram from "./Images/instagram-square.svg";

const Members = () => {
  return (
    <div className="OurMembers">
      <h2>Meet the Leads</h2>
      <div className="OurMembersGrid">
        <div className="Member">
          <img src={YahayaMB} alt="" />
          <div className="MemberDetails">
            <div className="MemberIntro">
              <span>Yahaya M. Bello</span>
              <span>Full-Stack Web Developer</span>
            </div>
            <div className="SocialMediaHandles">
              <a
                target="_blank"
                href="https://web.facebook.com/profile.php?id=100081529721472"
              >
                <img src={Facebook} alt="Facebook SVG" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/yahaya-muhammad-bello-488159188/"
              >
                <img src={LinkedIn} alt="LinkedIn SVG" />
              </a>
              <a target="_blank" href="https://instagram.com/abbiey2579">
                <img src={Instagram} alt="Instagram SVG" />
              </a>
              <a target="_blank" href="https://wa.me/2349039402857">
                <img src={Whatsapp} alt="Whatsapp SVG" />
              </a>
            </div>
          </div>
        </div>
        <div className="Member">
          <img src={UsmanAA} alt="" />
          <div className="MemberDetails">
            <div className="MemberIntro">
              <span>Usman Auwal Ali</span>
              <span>Content Writer</span>
            </div>
            <div className="SocialMediaHandles">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100057674018179"
              >
                <img className="Facebook" src={Facebook} alt="Facebook SVG" />
              </a>
              <a target="_blank" href="https://instagram.com/marketingusman">
                <img
                  className="Instagram"
                  src={Instagram}
                  alt="Instagram SVG"
                />
              </a>
              <a target="_blank" href="https://twitter.com/marketingusman_">
                <img className="Twitter" src={Twitter} alt="Twitter SVG" />
              </a>
              <a target="_blank" href="https://wa.me/2348081391732">
                <img className="Whatsapp" src={Whatsapp} alt="Whatsapp SVG" />
              </a>
            </div>
          </div>
        </div>
        <div className="Member">
          <img src={AbbaU} alt="" />
          <div className="MemberDetails">
            <div className="MemberIntro">
              <span>Abba Umar</span>
              <span>Digital Marketter</span>
            </div>
            <div className="SocialMediaHandles">
              <a target="_blank" href="https://web.facebook.com/abbaibetone">
                <img src={Facebook} alt="Facebook SVG" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/abba-umar-4065b087/"
              >
                <img src={LinkedIn} alt="LinkedIn SVG" />
              </a>
              <a target="_blank" href="https://twitter.com/Ahmad_Umar_Ibet">
                <img src={Twitter} alt="Twitter SVG" />
              </a>
              <a target="_blank" href="https://wa.me/2348024192865">
                <img src={Whatsapp} alt="Whatsapp SVG" />
              </a>
            </div>
          </div>
        </div>
        <div className="Member">
          <img src={Abba} alt="" />
          <div className="MemberDetails">
            <div className="MemberIntro">
              <span>Abba I. Muhammad</span>
              <span>Graphic Designer</span>
            </div>
            <div className="SocialMediaHandles">
              <a href="mailto:mbyahya2579@gmail.com">
                <img src={Facebook} alt="Facebook SVG" />
              </a>
              <a href="mailto:mbyahya2579@gmail.com">
                <img src={LinkedIn} alt="LinkedIn SVG" />
              </a>
              <a href="mailto:mbyahya2579@gmail.com">
                <img src={Twitter} alt="Twitter SVG" />
              </a>
              <a target="_blank" href="https://wa.me/2349011195618">
                <img src={Whatsapp} alt="Whatsapp SVG" />
              </a>
            </div>
          </div>
        </div>
        <div className="Member">
          <img src={Shakir} alt="" />
          <div className="MemberDetails">
            <div className="MemberIntro">
              <span>Shakir</span>
              <span>Frontend Web Developer</span>
            </div>
            <div className="SocialMediaHandles">
              <a href="mailto:mbyahya2579@gmail.com">
                <img src={Facebook} alt="Facebook SVG" />
              </a>
              <a href="mailto:mbyahya2579@gmail.com">
                <img src={LinkedIn} alt="LinkedIn SVG" />
              </a>
              <a href="mailto:mbyahya2579@gmail.com">
                <img src={Twitter} alt="Twitter SVG" />
              </a>
              <a target="_blank" href="https://wa.me/201127422794">
                <img src={Whatsapp} alt="Whatsapp SVG" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
