const MailList = () => {
  return (
    <div className="bg-sky-950 flex justify-center items-center w-full h-64">
      <div className="flex flex-col text-white items-center gap-5">
        <h1 className="font-bold text-4xl">Save time, save money!</h1>
        <p>Sign up and we&apos;ll send the best deals to you</p>
        <div>
          <input
            type="text"
            placeholder="Your Email"
            className="p-2 h-12 w-96 rounded-lg"
          />
          <button className="ml-2 bg-sky-500 px-4 py-2 h-12 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailList;
