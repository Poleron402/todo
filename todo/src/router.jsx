import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import { Login } from './pages/Login'
import {TheWhy} from './pages/TheWhy'
import { Register } from './pages/Register'
import { Profile } from './pages/Profile'



const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'why-todo',
                element: <TheWhy/>
            },
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    }
])

export default router;