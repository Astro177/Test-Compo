import BannerVideo from "./components/AllSections/Test1/BannerVideo/BannerVideo";
import { FlexingCard } from "./components/AllSections/Test1/FlexingCard/FlexingCard";
import { Growing } from "./components/AllSections/Test1/Growing/Growing";
import { MarketingTools } from "./components/AllSections/Test1/MarketingTools/MarketingTools";
import { MiniCards } from "./components/AllSections/Test1/MiniCards/MiniCards";
import { StoreVideo } from "./components/AllSections/Test1/StoreVideo/StoreVideo";
import { SupportCard } from "./components/AllSections/Test1/SupportCard/SupportCard";

function App() {
  return (
    <>
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
