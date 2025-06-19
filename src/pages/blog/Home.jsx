import Layout from "../../component/layout/Layout";

import React from "react";
import Card from "./Card";
const Home = () => {
  return (
    
      <Layout>
        <div className="flex flex-wrap justify-center space-x-5 space-y-4   mb-4 mt-4">
        <Card />
        <Card />
        <Card />  
        <Card />
        <Card />
        <Card />
        </div>

      </Layout>
  );
};

export default Home;
