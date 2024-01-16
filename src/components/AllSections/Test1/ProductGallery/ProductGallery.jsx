import { NewProducts } from "./NewProducts";
import { ProductSlider } from "./ProductSlider";
import { SavingProducts } from "./SavingProducts";

export const ProductGallery = () => {
  return (
    <section className="bg-gray/50 py-20">
      <div className="container mx-auto px-5 lg:px-0">
        <p className="text-4xl font-bold">
          Discover your next business opportunity
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 items-center">
          <div>
            <div className="flex justify-between items-center">
              <p className="font-bold text-2xl">Top Ranking</p>
              <p className="underline">View More</p>
            </div>
            <ProductSlider />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="font-bold text-2xl">New Arrivals</p>
              <p className="underline">View More</p>
            </div>
            <NewProducts />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="font-bold text-2xl">Saving Spotlight</p>
              <p className="underline">View More</p>
            </div>
            <SavingProducts />
          </div>
        </div>
      </div>
    </section>
  );
};
