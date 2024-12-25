const FeaturedCities = () => {
  return (
    <div className="featured flex justify-center h-96">
      <div className="w-full max-w-screen-lg p-3 flex gap-5 text-white z-0">
        <div className="relative rounded-lg overflow-hidden flex-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1694475284460-51ace2ec7cfd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dublin"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-10">
            <h1 className="font-bold text-4xl">Dublin</h1>
            <h2 className="font-bold text-xl">123 Properties</h2>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden flex-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1697730030250-e89c608af43c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXVzdGlufGVufDB8fDB8fHww"
            alt="Austin"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-10">
            <h1 className="font-bold text-4xl">Austin</h1>
            <h2 className="font-bold text-xl">532 Properties</h2>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden flex-1">
          <img
            src="https://images.unsplash.com/photo-1674242190596-20dc0f49cb8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Reno"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-10">
            <h1 className="font-bold text-4xl">Reno</h1>
            <h2 className="font-bold text-xl">411 Properties</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCities;
