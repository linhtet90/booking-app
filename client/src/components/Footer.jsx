const Footer = () => {
  return (
    <div className="footer flex w-full justify-center">
      <div className="flex w-full max-w-screen-lg justify-between p-3">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold">Support</h1>
          <ul className="text-sm leading-loose">
            <li>Coronavirus (COVID-19) FAQs</li>
            <li>Manage your trips</li>
            <li>Contact Customer Service</li>
            <li>Safety resource centre</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold">Discover</h1>
          <ul className="text-sm leading-loose">
            <li>Genius loyalty programme</li>
            <li>Seasonal and holiday deals</li>
            <li>Travel articles</li>
            <li>Traveller Review Awards</li>
            <li>Car hire</li>
            <li>Flight finder</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold">Terms and settings</h1>
          <ul className="text-sm leading-loose">
            <li>Privacy & cookies</li>
            <li>Terms and conditions</li>
            <li>Partner dispute</li>
            <li>Modern Slavery Statement</li>
            <li>Human Rights Statement</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold">Partners</h1>
          <ul className="text-sm leading-loose">
            <li>Extranet login</li>
            <li>Partner help</li>
            <li>List your property</li>
            <li>Become an affiliate</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold">About</h1>
          <ul className="text-sm leading-loose">
            <li>About us</li>
            <li>How we work</li>
            <li>Sustainability</li>
            <li>Press centre</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
