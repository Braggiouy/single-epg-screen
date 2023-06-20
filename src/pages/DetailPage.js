import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlay } from "@fortawesome/free-solid-svg-icons";

// Reusable component for title and description section
const TitleDescriptionSection = () => (
  <div className="max-w-xs">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt
      malesuada tortor eget maximus. Interdum et malesuada fames ac ante ipsum
      primis in faucibus. Aenean sodales erat eu turpis sodales, eget pulvinar
      orci faucibus. Pellentesque auctor aliquet enim ut ultricies. In tempor
      aliquam nunc, at blandit nisl feugiat ut. Etiam eu orci eros. Sed blandit
      lorem vitae magna mattis pharetra. Proin cursus ornare dolor feugiat
      dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia curae; Proin fermentum eros nec ipsum egestas egestas.
      Mauris et purus diam. Phasellus condimentum consequat mauris eu lobortis.
      Donec imperdiet libero vitae metus lacinia egestas. Morbi non euismod
      felis. Pellentesque eu lacus vitae sapien sagittis finibus ut nec libero.
      In vestibulum dignissim purus, in pulvinar orci.
    </p>
  </div>
);

export default function DetailPage() {
  return (
    <div>
      <header className="mt-4 mx-2 flex justify-start">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="w-10 h-10" />
        </Link>
      </header>
      <main className="flex justify-center my-4">
        <button>
          <FontAwesomeIcon icon={faPlay} className="w-10 h-10" />
        </button>
      </main>
      <div className="bg-black text-white">
        <div className="mx-4">
          <div className="mt-4">
            <span>Channel</span>
            <span className="text-custom-faded-grey ml-2">Schedule time</span>
          </div>
          <div>
            <p className="text-2xl mt-4">Title</p>
          </div>
          <div>
            <p className="text-sm my-4">Genres in here</p>
          </div>
          <TitleDescriptionSection />
          <div>
            <p className="text-custom-faded-grey mt-4 max-w-xs">cast</p>
          </div>
          <div>
            <p className="text-custom-faded-grey mb-4 max-w-xs">Director</p>
          </div>
        </div>
      </div>
    </div>
  );
}
