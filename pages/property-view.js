// "use client"
// import "antd/dist/antd.min.css";
// import { Menu, Dropdown,Button } from "antd";
// import {DownOutlined} from "@ant-design/icons";
import { createClient } from "@supabase/supabase-js";
import Header from "../components/header";
// import FeatureCard from "../components/feature-card";
import Footer from "../components/footer";
import PropertyGridContainer from "../components/PropertyGridContainer";
import { use } from "react";

const PropertiesGridView = () => {
  const client=createClient(process.env.NEXT_PUBLIC_URL,process.env.NEXT_PUBLIC_KEY);
  const [properties,setProperties]=useState([]);

  useEffect(()=>{
    const fetchProperties=async()=>{
      const result=await client
      .from("properties")
      .select("*");
      setProperties(result.data);

    }
    fetchProperties();
  },[])
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      
          <Header/>
          <PropertyGridContainer />
    
          <Footer />
     </div>
  );
};

export default PropertiesGridView;
