import React from "react";
import "./css/Mission.css";
import CyrixCo from "./../../Assets/Images/Cyrix-Co.svg";

const Mission = () => {
  return (
    <section class="Mission">
      <div class="MissionContent">
        <h2>Mission & Goal</h2>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="col-md-8">
              <div class="card MissionCard">
                <div class="card-body text-center">
                  <img
                    src={CyrixCo}
                    width="200px"
                    class="img-fluid mb-2"
                    alt=""
                  />
                  <p>
                    To maintain the country’s laws within territorial and
                    internal waters as well as EEZ (Exclusive Economic Zone),
                    defend Nigerians from possible enemies in the waters,
                    perform the military role as noted in the Act of 1964, and
                    play its diplomatic and policing roles when needed.
                  </p>
                  <div class="QuoteRecite">Cyrix Co.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
