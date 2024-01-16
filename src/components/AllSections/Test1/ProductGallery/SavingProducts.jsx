export const SavingProducts = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-4 mt-6 bg-white rounded-xl px-2 py-3">
        <img
          src="https://s.alicdn.com/@sc04/kf/H9aee2ec043bb482a992c30588d415677L.jpg_350x350.jpg"
          alt=""
          className="w-[150px] h-[120px]"
        />
        <div>
          <p className="text-xl mb-2">Lowest Prices in 180 Days</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-6 bg-white rounded-xl px-5 py-10">
        <div>
          <p className="text-xl mb-4 font-bold">Deals on best Sellers</p>
        </div>
        <div className="relative">
          <img
            src="https://s.alicdn.com/@sc04/kf/H3accd4e47d154014a84cb3ed1b376c5bw.png_350x350.jpg"
            alt=""
            className=""
          />
          <p className="bg-white absolute px-6 py-2 font-bold top-2 left-2">
            10% Off
          </p>
        </div>
      </div>
    </div>
  );
};
