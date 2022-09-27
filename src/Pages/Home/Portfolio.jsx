import React from "react";
import PorfolioCard from "./Components/Cards";
import "./css/Portfolio.css";

const Portfolio = () => {
  return (
    <section class="Portfolio">
      <div class="Container">
        <h2>Portfolio</h2>
        <p>
          To maintain the country’s laws within territorial and internal waters
          as well as EEZ (Exclusive Economic Zone), defend Nigerians from
          possible enemies in the waters, perform the military role as noted in
          the Act of 1964, and play its diplomatic and policing roles when
          needed.
        </p>
        <div class="QuoteRecite">Cyrix Co.</div>
        <div className="PortfolioCards">
          <PorfolioCard
            Title="Sifax Co."
            subTitle="Web Design & Development"
            Description="The major radio station for sending messages back home during war
            times."
            urlLink="#"
          />
          <PorfolioCard
            Title="Paystack Inc."
            subTitle="eCommerce"
            Description="The major radio station for sending messages back home during war
            times."
            urlLink="#"
          />
          <PorfolioCard
            Title="Empire State Building"
            subTitle="New York Skyscraper"
            Description="The major radio station for sending messages back home during war
            times."
            urlLink="#"
          />
          <PorfolioCard
            Title="Empire State Building"
            subTitle="New York Skyscraper"
            Description="The major radio station for sending messages back home during war
            times."
            urlLink="#"
          />
          <PorfolioCard
            Title="Empire State Building"
            subTitle="New York Skyscraper"
            Description="The major radio station for sending messages back home during war
            times."
            urlLink="#"
          />
          <PorfolioCard
            Title="Empire State Building"
            subTitle="New York Skyscraper"
            Description="The major radio station for sending messages back home during war
            times."
            urlLink="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
