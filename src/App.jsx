import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Prenav from "./components/Prenav";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import Starproduct from "./components/Starproduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductsReview from "./components/ProductsReview";
import Video from "./components/Video";
import BannerEndSLider from "./components/BannerEndSLider";
import PreFooter from "./components/PreFooter";
import ConnectUs from "./components/ConnectUs";
import Footer from "./components/Footer";
// Products json information
import data from "./data/data.json";

function App() {
  return (
    <Router>
      <Prenav />
      <Slider start={data.banner.start} />
      <Offers offerItem={data.offer} />
      <Heading title="Star Products" />
      <Starproduct products={data.starProduct} />
      <Heading title="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <HotAccessories
              coverUrl="https://store.mi.com/in/item/3183000037"
              product={data.hotAccessories.music}
              coverImage={data.hotAccessoriesCover.music}
            />
          }
        />

        {/* music route */}
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              coverUrl="https://store.mi.com/in/item/3183000037"
              product={data.hotAccessories.music}
              coverImage={data.hotAccessoriesCover.music}
            />
          }
        />

        {/* smartDevices route */}
        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
              coverUrl="https://store.mi.com/in/item/3203500007"
              product={data.hotAccessories.smartDevice}
              coverImage={data.hotAccessoriesCover.smartDevice}
            />
          }
        />

        {/* smartDevices route */}
        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
              coverUrl="https://store.mi.com/in/item/3193700004"
              product={data.hotAccessories.smartDevice}
              coverImage={data.hotAccessoriesCover.smartDevice}
            />
          }
        />

        {/* lifestyle route */}
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              coverUrl="https://store.mi.com/in/item/3203200014"
              product={data.hotAccessories.lifeStyle}
              coverImage={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />

        {/* home route */}
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              coverUrl="https://store.mi.com/in/item/3201100018"
              product={data.hotAccessories.home}
              coverImage={data.hotAccessoriesCover.home}
            />
          }
        ></Route>

        {/* mobileAccessories route */}
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              product={data.hotAccessories.mobileAccessories}
              coverImage={data.hotAccessoriesCover.mobileAccessories}
            />
          }
        ></Route>
      </Routes>

      <Heading title="Product Reviews" />
      <ProductsReview reviews={data.productReviews} />
      <Heading title="Videos" />
      <Video videos={data.videos} />

      <Heading title="IN THE PRESS" />

      <BannerEndSLider end={data.banner.end} />
      <PreFooter />
      <ConnectUs />
      <Footer
        support={data.footer.support}
        shopAndLearn={data.footer.shopAndLearn}
        retailStore={data.footer.retailStore}
        aboutUS={data.footer.aboutUS}
        contactUs={data.footer.contactUs}
      />
    </Router>
  );
}

export default App;
