import React from "react";
import "../styles/App.css";
import Layout from "./components/Layout/Layout";
import EPGTable from "./components/EPGTable/EPGTable";

const App = () => {
  return (
    <Layout className="container mx-auto">
      <EPGTable />
    </Layout>
  );
};

export default App;
