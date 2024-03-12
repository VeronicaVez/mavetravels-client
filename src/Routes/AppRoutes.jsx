import { Routes, Route } from "react-router-dom"
import React from "react"

import HomePage from "../pages/HomePage/HomePage"

import TravelsPage from "../pages/TravelsPage/TravelsPage"
import ThemesPage from "../pages/ThemesPage/ThemesPage"
import ReviewsPage from "../pages/ReviewsPage/ReviewsPage"

import TravelDetailsPage from "../pages/TravelDetailsPage/TravelDetailsPage"
import SpecificReviewPage from "./../pages/SpecificReviewPage/SpecificReviewPage"

import LogInPage from "../pages/LogInPage/LogInPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import AdminLogInPage from "../pages/AdminLogInPage/AdminLogInPage"

import UsersPage from "../pages/UsersPage/UsersPage"
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage"
import AdminProfilePage from "../pages/AdminProfilePage/AdminProfilePage"
import EditUserProfilePage from "../pages/EditUserProfilePage/EditUserProfilePage"

import NewTravelFormPage from "../pages/NewTravelFormPage/NewTravelFormPage"
import EditTravelPage from "../pages/EditTravelPage/EditTravelPage"

import NewReviewForm from "../components/Forms/NewReviewForm/NewReviewForm"
import EditReviewPage from "./../pages/EditReviewPage/EditReviewPage"

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

import PrivateRoutes from "./PrivateRoutes"

const AppRoutes = () => {

    return (


        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/travels" element={<TravelsPage />} />
            <Route path="/themes" element={<ThemesPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/reviews/:reviewId" element={< SpecificReviewPage />} />
            <Route path="/reviews/new-review" element={<NewReviewForm />} />
            <Route path="/reviews/edit/:reviewId" element={<EditReviewPage />} />
            <Route path="/travels/:travelId" element={<TravelDetailsPage />} />

            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/signup/admin" element={<AdminLogInPage />} />

            {/*<Route element={<PrivateRoutes/>}> */}
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:username" element={<UserProfilePage />} />
            <Route path="/users/edit/:username" element={<EditUserProfilePage />} />
            <Route path="/admin-profile" element={<AdminProfilePage />} />

            {/* <Route path="reviews/new-review" element={<NewReviewForm />} /> */}
            {/* <Route path="/admin-profile" element={<AdminProfilePage />} /> */}

            <Route path="/admin-profile/create-travel" element={<NewTravelFormPage />} />
            <Route path="/admin-profile/edit-travel/:travelId" element={<EditTravelPage />} />

            <Route path="*" element={<NotFoundPage />} />

        </Routes >

    )
}

export default AppRoutes