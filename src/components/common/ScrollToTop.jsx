import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  // Define base paths to exclude from scroll-to-top
  const excludedPaths = [
    "/use-cases",
    "/case-studies/category",
    "/whitepapers/category",
  ];

  // Determine if current path matches any excluded base path
  const shouldSkipScroll = excludedPaths.some((excludedPath) =>
    location.pathname.startsWith(excludedPath)
  );

  useEffect(() => {
    if (!shouldSkipScroll) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
