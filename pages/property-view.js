// "use client"
// import "antd/dist/antd.min.css";
// import { Menu, Dropdown,Button } from "antd";
// import {DownOutlined} from "@ant-design/icons";

import Header from "../components/header";
// import FeatureCard from "../components/feature-card";
import Footer from "../components/footer";
import PropertyGridContainer from "../components/PropertyGridContainer";

const PropertiesGridView = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      
          <Header/>
          <PropertyGridContainer />
    
          <Footer />
     </div>
  );
};

export default PropertiesGridView;
