import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import NumberIncrement from "@/components/NumbersIncrement/NumberIncrement";
import NumbersIncrement from "@/components/NumbersIncrement/NumbersIncrement";
import PositionRelative from "@/components/PositionRelative/PositionRelative";
import WaveAnimation from "@/components/WaveAnimation/WaveAnimation";

const inter = Inter({ subsets: ["latin"] });

import Carousel from "../components/Carousel/Carousel";
import NavMenu from "@/components/NavMenu/NavMenu";
import Projects from "@/components/Plan/Plan";
import News from "@/components/News/News";
import SideBarLayout from "@/components/SideBarLayout/SideBarLayout";
import UserManagement from "@/components/UserManagment/UserManagment";
import PositionRelativeLayout from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import Team from "@/components/Team/Team";
import Questionnaire from "@/components/Questionnaire/Questionnaire";

const HomePage = () => {
  const images = ["/BA.png", "/BA2.png", "/BA.png", "/BA2.png"];

  return (
    <>
      {/* <NavBar /> */}
      {/* <WaveAnimation /> */}
      {/* <Carousel images={images} /> */}
      {/* <PositionRelative /> */}
      {/* <PositionRelativeLayout>
        <Team />
      </PositionRelativeLayout> */}
      {/*<SideBarLayout>*/}
      {/*  <UserManagement />*/}
      {/*</SideBarLayout>*/}
      {/* <div className="positionRelative">
        <NumbersIncrement />
      </div> */}
        <Questionnaire/>
    </>
  );
};

export default HomePage;
