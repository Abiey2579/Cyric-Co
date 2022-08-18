import React from "react";
import "./css/Mission.css";
import CyrixCo from "./../../Assets/Images/Cyrix-Co.svg";
import MissionImage from "./Images/Mission.jpg";

const Mission = () => {
  return (
    <section class="Mission">
      <div class="MissionContent">
        <div class="container">
          <div class="row">
            <div class="col-md-6 d-flex flex-column justify-content-center">
              <h2>Our Mission</h2>
              <p>
                To maintain the country’s laws within territorial and internal
                waters as well as EEZ (Exclusive Economic Zone), defend
                Nigerians from possible enemies in the waters, perform the
                military role as noted in the Act of 1964, and play its
                diplomatic and policing roles when needed.
              </p>
              <div class="QuoteRecite">Cyrix Co.</div>
            </div>
            <div className="col-md-6 HideOnSM">
              <img
                src={MissionImage}
                alt="Mission Image"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
