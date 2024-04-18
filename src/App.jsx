import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import MainLayout from "./layout/MainLayout";
import Error from "./layout/Error";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import BlogLayout from "./layout/BlogLayout";
import FullBlogPost from "./layout/FullBlogPost";
import ReactGA from "react-ga";

const TRACKING_ID = "G-51CKGMHRR9";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
          <TrackingRoutes />
      </BrowserRouter>
    </MantineProvider>
  );
}

function TrackingRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Track page view whenever location changes
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/blog" element={<BlogLayout />} />
      <Route path="/blog/:slug" element={<FullBlogPost />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
