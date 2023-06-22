import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function DetailPage() {
  const skyLogo = `${window.location.origin}/assets/sky1.png`;
  const downtonAbbey = `${window.location.origin}/assets/downton_abbey.jpg`;
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
    tincidunt malesuada tortor eget maximus. Interdum et malesuada fames
    ac ante ipsum primis in faucibus. Aenean sodales erat eu turpis
    sodales, eget pulvinar orci faucibus. Pellentesque auctor aliquet enim
    ut ultricies. In tempor aliquam nunc, at blandit nisl feugiat ut.
    Etiam eu orci eros. Sed blandit lorem vitae magna mattis pharetra.
    Proin cursus ornare dolor feugiat dapibus. Vestibulum ante ipsum
    primis in faucibus orci luctus et ultrices posuere cubilia curae;
    Proin fermentum eros nec ipsum egestas egestas. Mauris et purus diam.
    Phasellus condimentum consequat mauris eu lobortis. Donec imperdiet
    libero vitae metus lacinia egestas. Morbi non euismod felis.
    Pellentesque eu lacus vitae sapien sagittis finibus ut nec libero. In
    vestibulum dignissim purus, in pulvinar orci.`;

  const truncatedText = `${paragraphText.substring(0, 200)}...`;
  const fadedEffect = {
    backgroundImage:
      "linear-gradient(180deg, blue 3%, transparent 25%, transparent 20%, blue 65%)",
  };

  return (
    <>
      <Header />
      <div style={{ position: "relative" }}>
        <img
          src={downtonAbbey}
          className="bg-no-repeat bg-cover bg-bottom bg-fixed"
          style={{ opacity: 0.7 }}
          alt="Downton Abbey"
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "33.33%",
            backgroundImage:
              "linear-gradient(180deg, transparent 20%, black 65%)",
          }}
        ></div>
      </div>
      <div className="p-3 shadow-2xl shadow-black bg-black text-white">
        <div className="flex flex-row items-center px-1">
          <div className="w-14 h-14 pt-4">
            <img src={skyLogo} alt="ChannelName"></img>
          </div>
          <div className="px-4 flex flex-col w-3/4">
            <div className="flex flex-row items-center">
              <span>Comedy Central </span>
              <span className="text-custom-faded-grey pl-2 text-xs">
                14:30 - 17:00
              </span>
              <span className="text-custom-faded-grey pl-2 text-xs">
                * 3 May
              </span>
            </div>
            <p className="text-2xl">Downton Abbey</p>
            <div className="flex flex-row justify-between pt-1">
              <span className="text-custom-faded-grey pl-1  text-s">2015</span>
              <span className="text-custom-faded-grey pl-1  text-s">
                Romance
              </span>
              <span className="text-custom-faded-grey pl-1  text-s">Drama</span>
              <span className="text-custom-faded-grey pl-1  text-s">
                Horror
              </span>
            </div>
          </div>
          <div className="w-10 h-10 pt-4">
            <FontAwesomeIcon icon={faClock} />
          </div>
        </div>
        <div className="h-full">
          {expanded ? (
            <p className="mt-6 text-left p-3">{paragraphText}</p>
          ) : (
            <p className="mt-6 text-left p-3">
              {truncatedText}
              <span
                className="text-custom-text-gold cursor-pointer"
                onClick={toggleExpansion}
              >
                Read More
              </span>
            </p>
          )}
        </div>
        <div>
          <p className="text-custom-faded-grey pl-3">
            Cast: Wagner Moura, Boyd Holbruk, Pedro Pascal
          </p>
        </div>
        <div>
          <p className="text-custom-faded-grey pl-3">
            Creators: Chris Brancato, Carlo Bernard, Doug Miro
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
