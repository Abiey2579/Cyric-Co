import React from "react";
import "./css/WhyUs.css";

const WhyUs = () => {
  const Reasons = [
    {
      title: "Modern Design",
      description:
        "We use latest technology for the latest world because we know the demand of peoples.",
    },
    {
      title: "Creative Design",
      description:
        "We are always creative and always listen our costomers and we mix these two things and make beast design.",
    },
    {
      title: "24 x 7 User Support",
      description:
        "If our customer has any problem and any query we are always happy to help then.",
    },
    {
      title: "Business Growth",
      description:
        "Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you're climbing it",
    },
    {
      title: "Market Strategy",
      description:
        "Holding back technology to preserve broken business models is like allowing blacksmiths to veto the internal combustion engine in order to protect their horseshoes.",
    },
    {
      title: "Affordable Cost",
      description:
        "Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.",
    },
  ];
  return (
    <div className="Why-Us">
      <h1 className="Why-Us-Header">Why Choose Us?</h1>
      <div className="ReasonsToChooseUs">
        {Reasons.map((reason) => (
          <div className="Reason">
            <h5>{reason.title}</h5>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
