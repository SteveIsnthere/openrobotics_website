//This hook is to add a button on any page that onclick will scroll to the top of the page.
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      //Button appears after scrolling 100 pixels
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <div onClick={scrollToTop} className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-red-900 text-white text-lg z-20 duration-300 hover:bg-red-700">
          <i className="lni lni-arrow-up" />
        </div>
      )}
    </div>
  );
}