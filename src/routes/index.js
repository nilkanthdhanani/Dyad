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
]
)

export default router;