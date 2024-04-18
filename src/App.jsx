import { BrowserRouter, Route, Routes } from "react-router-dom";
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

useEffect(() => {
  const trackPageView = (location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  };
})
  return (
    <MantineProvider>
      <BrowserRouter>
          <Routes>
            <Route render={({ location }) => trackPageView(location)} />
            <Route path="/" element={<MainLayout />} />
            <Route path="/blog" element={<BlogLayout />} /> 
            <Route path="/blog/:slug" element={<FullBlogPost />} /> 
            <Route path="*" element={<Error />} />
          </Routes> 
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
