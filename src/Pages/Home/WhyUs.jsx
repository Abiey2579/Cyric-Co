import React from "react";
import "./css/WhyUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const WhyUs = () => {
  return (
    <div class="feat bg-gray pt-5">
      <div class="container">
        <div class="row">
          <div class="section-head col-sm-12">
            <h2>Why Choose Us?</h2>
            <p className="ReasonWhy">
              When you choose us, you'll feel the benefit of 10 years'
              experience of Web Development. Because we know the digital world
              and we know that how to handle it. With working knowledge of
              online, SEO and social media.
            </p>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              {" "}
              <span class="icon feature_box_col_one">
                <FontAwesomeIcon icon={solid("globe")} />
              </span>
              <h6>Modern Design</h6>
              <p>
                We use latest technology for the latest world because we know
                the demand of peoples.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              {" "}
              <span class="icon feature_box_col_two">
                <FontAwesomeIcon icon={solid("anchor")} />
              </span>
              <h6>Creative Design</h6>
              <p>
                We are always creative and and always lisen our costomers and we
                mix these two things and make beast design.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              {" "}
              <span class="icon feature_box_col_three">
                <FontAwesomeIcon icon={solid("hourglass-half")} />
              </span>
              <h6>24 x 7 User Support</h6>
              <p>
                If our customer has any problem and any query we are always
                happy to help then.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              {" "}
              <span class="icon feature_box_col_four">
                <FontAwesomeIcon icon={solid("database")} />
              </span>
              <h6>Business Growth</h6>
              <p>
                Everyone wants to live on top of the mountain, but all the
                happiness and growth occurs while you're climbing it
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              {" "}
              <span class="icon feature_box_col_five">
                <FontAwesomeIcon icon={solid("upload")} />
              </span>
              <h6>Market Strategy</h6>
              <p>
                Holding back technology to preserve broken business models is
                like allowing blacksmiths to veto the internal combustion engine
                in order to protect their horseshoes.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              {" "}
              <span class="icon feature_box_col_six">
                <FontAwesomeIcon icon={solid("camera")} />
              </span>
              <h6>Affordable cost</h6>
              <p>
                Love is a special word, and I use it only when I mean it. You
                say the word too much and it becomes cheap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
