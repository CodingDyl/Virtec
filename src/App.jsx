import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import MainLayout from "./layout/MainLayout";
import Error from "./layout/Error";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import BlogLayout from "./layout/BlogLayout";
import FullBlogPost from "./layout/FullBlogPost";

function App() {
  function ScrollToTop() {
    const location = useLocation();

    useLayoutEffect(() => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    }, [location]);

    return null; // This component doesn't render anything
}
  return (
    <MantineProvider>
      <BrowserRouter>
        <ScrollToTop />
          <Routes>
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
