const FeaturedCities = () => {
  return (
    <div className="featured flex h-96 justify-center">
      <div className="z-0 flex w-full max-w-screen-lg gap-5 p-3 text-white">
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1694475284460-51ace2ec7cfd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dublin"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-10 left-10">
            <h1 className="text-4xl font-bold">Dublin</h1>
            <h2 className="text-xl font-bold">123 Properties</h2>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1697730030250-e89c608af43c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXVzdGlufGVufDB8fDB8fHww"
            alt="Austin"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-10 left-10">
            <h1 className="text-4xl font-bold">Austin</h1>
            <h2 className="text-xl font-bold">532 Properties</h2>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1674242190596-20dc0f49cb8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Reno"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-10 left-10">
            <h1 className="text-4xl font-bold">Reno</h1>
            <h2 className="text-xl font-bold">411 Properties</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCities;
