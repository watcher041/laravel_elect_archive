

import { Home } from "./components/homes/Home";
import { About } from "./components/homes/About";

export const homeRoutes = [
    {
        path:"",
        children: <Home />
    },
    {
        path:"about",
        children: <About />
    }
]