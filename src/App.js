import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import EPGTable from "./components/EPGTable/EPGTable";
import DetailPage from "./pages/DetailPage";
import { focusCurrentTime } from "../utils/utils";
import "../styles/App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/detail-page/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
