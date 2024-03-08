import { Routes, Route } from "react-router-dom"
import React from "react"

import HomePage from "../pages/HomePage/HomePage"
import TravelsPage from "../pages/TravelsPage/TravelsPage"
import ThemesPage from "../pages/ThemesPage/ThemesPage"
import TravelDetailsPage from "../pages/TravelDetailsPage/TravelDetailsPage"
import LogInPage from "../pages/LogInPage/LogInPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage"
import PrivateRoutes from "./PrivateRoutes"
import EditUserProfilePage from "../pages/EditUserProfilePage/EditUserProfilePage"
import NewTravelFormPage from "../pages/NewTravelFormPage/NewTravelFormPage"
import UsersPage from "../pages/UsersPage/UsersPage"
import ReviewsPage from "../pages/ReviewsPage/ReviewsPage"
import NewReviewForm from "../components/NewReviewForm/NewReviewForm"

const AppRoutes = () => {

    return (


        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/travels" element={<TravelsPage />} />
            <Route path="/themes" element={<ThemesPage />} />
<<<<<<< HEAD
            {/* <Route path="/reviews" element={<ReviewsPage />} /> */}
            <Route path="/travels/:travelId" element={<TravelDetailsPage />} />


=======
            <Route path="/reviews" element={<ReviewsPage />} />
>>>>>>> vero

            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />

            {/*<Route element={<PrivateRoutes/>}> */}
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:userId" element={<UserProfilePage />} />
            <Route path="/users/edit/:userId" element={<EditUserProfilePage />} />
            {/* <Route path="/admin-profile" element={<AdminProfilePage />} />
            </Route> */}

<<<<<<< HEAD


=======
>>>>>>> vero
            <Route path="/admin-profile/create-travel" element={<NewTravelFormPage />} />
            <Route path="reviews/new-review" element={ <NewReviewForm/>}/>

            {/* <Route path="*" element={<NotFoundPage />} /> */}

        </Routes>

    )
}

export default AppRoutes