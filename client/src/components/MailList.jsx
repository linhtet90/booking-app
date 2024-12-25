const MailList = () => {
  return (
    <div className="flex h-64 w-full items-center justify-center bg-sky-950">
      <div className="flex flex-col items-center gap-5 text-white">
        <h1 className="text-4xl font-bold">Save time, save money!</h1>
        <p>Sign up and we&apos;ll send the best deals to you</p>
        <div>
          <input
            type="text"
            placeholder="Your Email"
            className="h-12 w-96 rounded-lg p-2"
          />
          <button className="ml-2 h-12 rounded-lg bg-sky-500 px-4 py-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailList;
