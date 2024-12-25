const FeaturedProperties = () => {
  return (
    <div className="featured-properties flex justify-center">
      <div className="w-full max-w-screen-lg flex gap-5">
        <div className="flex flex-col gap-3">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
            alt=""
          />
          <h1 className="font-bold">Aparthotel Stare Miasto</h1>
          <p>Old Town, Poland</p>
          <p className="font-semibold">Starting from $200</p>
          <div>
            <span className="bg-sky-950 text-white px-2 py-1 mr-2">8.8</span>
            <span>Fabulous</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o="
            alt=""
          />
          <h1 className="font-bold">7 Seasons Apartments</h1>
          <p>Hungary, Budapest</p>
          <p>Starting from $221</p>
          <div>
            <span className="bg-sky-950 text-white px-2 py-1 mr-2">8.8</span>
            <span>Fabulous</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o="
            alt=""
          />
          <h1 className="font-bold">Numa I Vita Apartments</h1>
          <p>Santa Maria Novella, Italy</p>
          <p>Starting from $189</p>
          <div>
            <span className="bg-sky-950 text-white px-2 py-1 mr-2">9.2</span>
            <span>Superb</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/74529578.webp?k=2d2774a16aa0d58fe1fd0a467c57c6adf188344d7e908f7fd775ba17555259d5&o="
            alt=""
          />
          <h1 className="font-bold">Sugar Loft Apartments</h1>
          <p>Santa Teresa, Brazil</p>
          <p>Starting from $70</p>
          <div>
            <span className="bg-sky-950 text-white px-2 py-1 mr-2">8.2</span>
            <span>Very good</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
