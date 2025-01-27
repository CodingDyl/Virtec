import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import Error from "./layout/Error";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import BlogLayout from "./layout/BlogLayout";
import FullBlogPost from "./layout/FullBlogPost";
import ReactGA from "react-ga4";
import LandingPageLayout from "./layout/LandingPageLayout";
import ThankYouLeadLayout from "./layout/ThankYouLeadLayout";
import ApplicationLayout from "./layout/ApplicationLayout";
import ContactLayout from "./layout/ContactLayout";

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

  useEffect(() => {
    // Track page view whenever location changes
    ReactGA.set({ page: window.location.pathname });
    ReactGA.send('page_view', { 
      page_path: window.location.pathname
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/contact" element={<ContactLayout />} />
      <Route path="/blog" element={<BlogLayout />} />
      <Route path="/blog/:slug" element={<FullBlogPost />} />
      <Route path="/free-guide" element={<LandingPageLayout />} />
      <Route path="/free-guide/thank-you" element={<ThankYouLeadLayout />} />
      <Route path="/application/thank-you" element={<ApplicationLayout />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
