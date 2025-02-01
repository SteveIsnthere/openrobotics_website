// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
function Sponsor() {
  return (
    <section>
      <div className="relative max-w-screen-xl px-4 py-5 mx-auto">
        <h2 className="text-4xl font-bold py-14 mt-5 text-center tracking-tight sm:text-5xl">
          Sponsorship
        </h2>

        <p className="max-w mx-auto mt-5 text-gring-offset-warm-gray-500">
          As a measure to continue our steady growth and progressions, our team
          needs your support in the form of sponsorship. Your investment in our
          team will go beyond just helping our team’s growth and progression.
          Not only will you inspire our team as they gain new equipment and
          materials which they need, but also help generate more appreciation
          for robotics in the UBC community.
          <br></br>
          <br></br>
          If you are considering a sponsorship, please click the following
          buttons!
        </p>
        <div className="flex flex-wrap gap-4 mt-8 text-center">
          <a
            className="block w-full px-12 py-3 text-md font-medium text-white rounded shadow bg-red-600 sm:w-auto hover:bg-red-700 focus:outline-none focus:ring"
            href="https://donate.support.ubc.ca/page/20924/donate/1?transaction.dirgift=Open+Robotics+Student+Team%20G1102"
          >
            Sponsor Us Now
          </a>

          <a
            className="block w-full px-12 py-3 text-md font-medium bg-gray-900 rounded shadow text-gray-200 sm:w-auto hover:text-white  focus:outline-none focus:ring"
            href="SponsorshipPackage.pdf"
          >
            Sponsorship Guide
          </a>
        </div>
        <p className="max-w mx-auto mt-8 text-gring-offset-warm-gray-500">
          A huge thank you to our current sponsors.
        </p>
        <section className="sponsor-logos">
          <div className="flex items-center gap-8 mt-6">
            <div className="h-24 w-48 flex items-center justify-center">
              <img
                alt="Zaber logo"
                src="/assets/img/sponsor/Zaber.png"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="h-24 w-48 flex items-center justify-center">
              <img
                alt="LateCoere logo"
                src="/assets/img/sponsor/LateCoere.png"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Sponsor;
