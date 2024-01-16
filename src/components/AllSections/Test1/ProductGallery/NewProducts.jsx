const images = [
  "https://s.alicdn.com/@sc04/kf/H7e4c1d69632849b3b6d03e2e987ec41fC.jpg_350x350.jpg",
  "https://s.alicdn.com/@sc04/kf/Hf7403a32d6d14eaa81116dccfbcd331eG.jpg_350x350.jpg",
  "https://s.alicdn.com/@sc04/kf/Hb152abca2381401b8b2da01b966857e7F.png_350x350.jpg",
  "https://s.alicdn.com/@sc04/kf/H6a126166f0424e1789b25936d34b2dceZ.png_350x350.jpg",
];

export const NewProducts = () => {
  return (
    <div className="mt-10">
      <div className="bg-white rounded-xl p-5">
        <p className="text-xl font-bold">94,700+ products added today</p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {images?.map((item, i) => (
            <div key={i} className="rounded-xl bg-gray/50 p-4">
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 mt-6 bg-white rounded-xl px-2 py-1">
        <img
          src="https://s.alicdn.com/@sc04/kf/Hed056627ed0344c6968e1a4842185e3f3.jpg_350x350.jpg"
          alt=""
          className="w-[150px]"
        />
        <div>
          <p className="text-xl font-bold mb-2">New This Week</p>
          <p>Products From Verified Suppliers Only</p>
        </div>
      </div>
    </div>
  );
};
