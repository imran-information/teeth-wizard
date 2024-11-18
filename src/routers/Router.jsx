import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import AllTrearments from "../components/AllTrearments";
import MyAppointment from "../components/MyAppointment";
import Profile from "../components/Profile";
import Details from "../components/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const serviceRes = await fetch('/services.json')
                    const services = await serviceRes.json()

                    const reviewRes = await fetch('/review.json')
                    const review = await reviewRes.json()

                    return { services, review }
                }
            },
            {
                path: '/allTreatments',
                element: <AllTrearments></AllTrearments>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/myAppointment',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: async ({ params }) => {
                    const res = await fetch('/services.json')
                    const data = await res.json()
                    const singleService = data.find(data => data.id == params.id)
                    return singleService
                }
            }
        ]
    }
])

export default router