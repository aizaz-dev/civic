import React from "react";
import Header from "../../components/Header";
import Reviews from "../../components/Listing/Reviews";
import Impressive from "../../components/Listing/Impressive";
import Footer from "../../components/Footer";
import DiscoverReach from "../../components/Listing/DiscoverReach";
import Engagement from "../../components/Listing/Engagement";
import QualityInstagram from "../../components/Listing/QualityInstagram";
import Profile from "../../components/Listing/Profile";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const {pathname} = router;
  
  return (
    <div className="listing_con overflow-x-hidden">
      <Header
        bg={"bg-[#fff]"}
        title={"!text-[#68c1b8]"}
        textOff={"!text-[#000]"}
        signupBg={"!bg-[#68c1b8]"}
        signupText={"!text-[#fff]"}
        slug={pathname}
      />
      <Profile />
      <QualityInstagram />
      <Engagement />
      <DiscoverReach />
      <Impressive />
      <Reviews />
      <Footer />
    </div>
  );
};

export default index;
