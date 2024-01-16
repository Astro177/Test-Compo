import { productCardData } from "./assets/data/testData";
import BannerVideo from "./components/AllSections/Test1/BannerVideo/BannerVideo";
import { FlexingCard } from "./components/AllSections/Test1/FlexingCard/FlexingCard";
import { Growing } from "./components/AllSections/Test1/Growing/Growing";
import { MarketingTools } from "./components/AllSections/Test1/MarketingTools/MarketingTools";
import { MiniCards } from "./components/AllSections/Test1/MiniCards/MiniCards";
import { ProductCard } from "./components/AllSections/Test1/ProductCard/ProductCard";
import { ProductGallery } from "./components/AllSections/Test1/ProductGallery/ProductGallery";
import { StoreVideo } from "./components/AllSections/Test1/StoreVideo/StoreVideo";
import { SupportCard } from "./components/AllSections/Test1/SupportCard/SupportCard";

function App() {
  return (
    <>
      <ProductCard
        sectionData={productCardData?.phones}
        bgColor="bg-blue-gradient-two"
      />
      <ProductCard
        sectionData={productCardData?.electrics}
        bgColor="bg-red-gradient"
      />
      <ProductCard
        sectionData={productCardData?.laptops}
        bgColor="bg-yellow-gradient"
      />
      <ProductGallery />
      <BannerVideo />
      <MiniCards />
      <StoreVideo />
      <FlexingCard />
      <MarketingTools />
      <SupportCard />
      <Growing />
    </>
  );
}

export default App;
