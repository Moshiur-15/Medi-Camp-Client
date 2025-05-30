import toast from "react-hot-toast";
import newsletter from "../assets/newslater.jpg";

const Newsletter = () => {
  const handleToast = (e) => {
    e.preventDefault();
    toast.success('Thanks for subscribing to our newsletter')
    e.target.reset()
  };
  return (
    <section className="mx-2 xl:mx-20">
      <div
        className="relative py-12"
        style={{
          backgroundImage: `url(${newsletter})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute bg-black opacity-50 inset-0"></div>
        <div className="text-center text-white relative my-10 lg:my-16">
          <h2 className="text-xl md:text-2xl font-bold font-merriweather">
            Get the Latest Medi Camp Updates
          </h2>
          <p className="text-xs md:text-base mb-6">
            Subscribe for camp details, registration, and health tips.
          </p>
          <form
            className="md:flex justify-center items-center md:gap-3"
            onSubmit={handleToast}
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full md:max-w-xs mb-2 md:mb-0 focus:outline-none ring-0 outline:ring-none"
              required
            />
            <button
              type="submit"
              className="px-8  w-full md:w-auto py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
