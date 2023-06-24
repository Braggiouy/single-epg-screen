import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import EPGTable from "./components/EPGTable/EPGTable";
import DetailPage from "./pages/DetailPage";
import NowCTA from "./components/CTA/NowCTA";
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
              <NowCTA />
            </Layout>
          }
        />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
