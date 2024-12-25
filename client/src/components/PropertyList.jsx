const PropertyList = () => {
  return (
    <div className="house-list flex justify-center">
      <div className="flex w-full max-w-screen-lg gap-5 p-3">
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o="
            alt="hotel"
          />
          <h1 className="text-lg font-bold">Hotels</h1>
          <p>233 hotels</p>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o="
            alt="apartment"
          />
          <h1 className="text-lg font-bold">Apartments</h1>
          <p>2331 hotels</p>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o="
            alt="resort"
          />
          <h1 className="text-lg font-bold">Resorts</h1>
          <p>31 hotels</p>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/620168315.jpeg?k=300d8d8059c8c5426ea81f65a30a7f93af09d377d4d8570bda1bd1f0c8f0767f&o="
            alt="villa"
          />
          <h1 className="text-lg font-bold">Villa</h1>
          <p>23 hotels</p>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/595549239.jpeg?k=ad5273675c516cc1efc6cba2039877297b7ad2b5b3f54002c55ea6ebfb8bf949&o="
            alt="cabin"
          />
          <h1 className="text-lg font-bold">Cabins</h1>
          <p>331 hotels</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
