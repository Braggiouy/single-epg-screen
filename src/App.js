import React from "react";
import "../styles/App.css";
import Layout from "./components/Layout/Layout";
import EPGTable from "./components/EPGTable/EPGTable";
import { focusCurrentTime } from "../utils/utils";

const App = () => {
  return (
    <Layout className="container mx-auto">
      <EPGTable />
      <button
        className="px-6 py-4 absolute right-[50px] bottom-[75px] bg-now-button rounded-md z-10 text-white font-semibold	"
        onClick={() => {
          focusCurrentTime();
        }}
      >
        NOW
      </button>
    </Layout>
  );
};

export default App;
