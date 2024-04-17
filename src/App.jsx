import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import Error from "./layout/Error";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import BlogLayout from "./layout/BlogLayout";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/blog" element={<BlogLayout />} /> 
            {/* <Route path="/post/:slug" element={<FullBlogPost />} />  */}
            <Route path="*" element={<Error />} />
          </Routes> 
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
