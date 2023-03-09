/** ROOT APP COMPONENT */
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Router function
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />

      {/* Custom 404 error page */}
      {/* <Route path="*" element={NotFound} /> */}
    </Route>
  )
);

export default function App() {
  return (
    // Router provider providing the router created from the CreateBrowserRouter function
    <RouterProvider router={router} />
  );
}
