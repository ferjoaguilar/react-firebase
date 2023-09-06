import { createBrowserRouter } from "react-router-dom"
import Home from "./Home"
import Login from './Login'
import Signup from './Signup'
import NotFound from "./NotFound"
import Dashboard from "./Dashboard"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '*',
        element: <NotFound />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }
])

export default router