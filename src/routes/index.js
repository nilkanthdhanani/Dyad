import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home";
import DefaultLayout from "./defaultLayout";
import Error from "../error";
import About from "../modules/about";
import Blog from "../modules/blog";
import Contact from "../modules/contact";
import Zenith from "../modules/home/modals/zenith";
import Vortex from "../modules/home/modals/vortex";
import Pulse from "../modules/home/modals/pulse";
import Nimbus from "../modules/home/modals/nimbus";
import Echo from "../modules/home/modals/echo";
import Blog1cont from "../modules/blog/modalsBlog/blog1cont";
import Blog2cont from "../modules/blog/modalsBlog/blog2cont";
import Blog3cont from "../modules/blog/modalsBlog/blog3cont";
import Blog4cont from "../modules/blog/modalsBlog/blog4cont";
import Blog5cont from "../modules/blog/modalsBlog/blog5cont";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
    
            {
                path: "/blog",
                element: <Blog />
            },
        ]
    },

    {
        path: "*",
        element: <Error />
    },
    
    {
        path: "/about",
        element: <About />
    },
    
    {
        path: "/contact",
        element: <Contact />
    },
    
    {
        path: "/zenith",
        element: <Zenith />
    },
    
    {
        path: "/vortex",
        element: <Vortex />
    },
    
    {
        path: "/pulse",
        element: <Pulse />
    },
    
    {
        path: "/nimbus",
        element: <Nimbus />
    },
    
    {
        path: "/echo",
        element: <Echo />
    },
    
    {
        path: "/blog1cont",
        element: <Blog1cont />
    },
    
    {
        path: "/blog2cont",
        element: <Blog2cont />
    },
    
    {
        path: "/blog3cont",
        element: <Blog3cont />
    },
    
    {
        path: "/blog4cont",
        element: <Blog4cont />
    },
    
    {
        path: "/blog5cont",
        element: <Blog5cont />
    },
]
)

export default router;