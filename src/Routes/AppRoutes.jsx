import { Routes, Route } from "react-router-dom"
import React from "react"

import HomePage from "../pages/HomePage/HomePage"

import TravelsPage from "../pages/TravelsPage/TravelsPage"
import AsiaTravelsPage from '../pages/TravelsPage/Continents/Asia/AsiaTravelsPage.jsx'
import AfricaTravelsPage from '../pages/TravelsPage/Continents/Africa/AfricaTravelsPage.jsx'
import EuropeTravelsPage from '../pages/TravelsPage/Continents/Europe/EuropeTravelsPage.jsx'
import NorthAmericaTravelsPage from '../pages/TravelsPage/Continents/NorthAmerica/NorthAmericaTravelsPage.jsx'
import SouthAmericaTravelsPage from '../pages/TravelsPage/Continents/SouthAmerica/SouthAmericaTravelsPage.jsx'
import AustraliaTravelsPage from '../pages/TravelsPage/Continents/Australia/AustraliaTravelsPage.jsx'

import ThemesPage from "../pages/ThemesPage/ThemesPage"
import ReviewsPage from "../pages/ReviewsPage/ReviewsPage"

import TravelDetailsPage from "../pages/TravelDetailsPage/TravelDetailsPage"
import SpecificReviewPage from "./../pages/SpecificReviewPage/SpecificReviewPage"

import LogInPage from "../pages/LogInPage/LogInPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

import UsersPage from "../pages/UsersPage/UsersPage"
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage"
import AdminProfilePage from "../pages/AdminProfilePage/AdminProfilePage"
import EditUserProfilePage from "../pages/EditUserProfilePage/EditUserProfilePage"

import NewTravelFormPage from "../pages/NewTravelFormPage/NewTravelFormPage"
import EditTravelPage from "../pages/EditTravelPage/EditTravelPage"

import NewReviewForm from "../components/Forms/NewReviewForm/NewReviewForm"
import EditReviewPage from "./../pages/EditReviewPage/EditReviewPage"

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

import PrivateRoute from "./PrivateRoute.jsx"

const AppRoutes = () => {

    return (


        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/travels" element={<TravelsPage />} />
            <Route path="/travels/asia" element={<AsiaTravelsPage />} />
            <Route path="/travels/africa" element={<AfricaTravelsPage />} />
            <Route path="/travels/europe" element={<EuropeTravelsPage />} />
            <Route path="/travels/north-america" element={<NorthAmericaTravelsPage />} />
            <Route path="/travels/south-america" element={<SouthAmericaTravelsPage />} />
            <Route path="/travels/australia-oceania" element={<AustraliaTravelsPage />} />


            <Route path="/themes" element={<ThemesPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/reviews/:reviewId" element={< SpecificReviewPage />} />
            <Route path="/travels/:travelId" element={<TravelDetailsPage />} />

            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/users/:username" element={<UserProfilePage />} />
                <Route path="/reviews/new-review" element={<NewReviewForm />} />
                <Route path="/reviews/edit/:reviewId" element={<EditReviewPage />} />
            </Route>

            <Route path="/users/:username/create-travel" element={<NewTravelFormPage />} />
            {/* <Route path="/admin-profile/edit-travel/:travelId" element={<EditTravelPage />} /> */}

            <Route path="*" element={<NotFoundPage />} />

        </Routes >

    )
}

export default AppRoutes