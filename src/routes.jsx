import { createBrowserRouter } from "react-router-dom";

import App from './pages/Home'
import ListUsers from "./pages/ListUsers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/lista-de-usuarios',
        element: <ListUsers />
    }
], {
    basename: import.meta.env.BASE_URL
})

export default router