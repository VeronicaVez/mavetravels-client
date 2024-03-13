import { Routes, Route } from "react-router-dom"
import React from "react"

import HomePage from "../pages/HomePage/HomePage"

import TravelsPage from "../pages/TravelsPage/TravelsPage"
import TravelsDestinationsPage from '../pages/TravelsDestinationsPage/TravelsDestinationsPage.jsx'

import ReviewsPage from "../pages/ReviewsPage/ReviewsPage"

import TravelDetailsPage from "../pages/TravelDetailsPage/TravelDetailsPage"

import LogInPage from "../pages/LogInPage/LogInPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

import UserProfilePage from "../pages/UserProfilePage/UserProfilePage"

import NewTravelFormPage from "../pages/NewTravelFormPage/NewTravelFormPage"

import NewReviewForm from "../components/Forms/NewReviewForm/NewReviewForm"
import EditReviewPage from "./../pages/EditReviewPage/EditReviewPage"

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

import PrivateRoute from "./PrivateRoute.jsx"

const AppRoutes = () => {

    return (


        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/travels/:continent" element={<TravelsDestinationsPage />} />

            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/travels/details/:travelId" element={<TravelDetailsPage />} />

            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/users/:username" element={<UserProfilePage />} />
                <Route path="/reviews/new-review" element={<NewReviewForm />} />
                <Route path="/reviews/edit/:reviewId" element={<EditReviewPage />} />
            </Route>

            <Route element={<PrivateRoute adminAccess />}>
                <Route path="/create-travel" element={<NewTravelFormPage />} />
            </Route>


            <Route path="*" element={<NotFoundPage />} />

        </Routes >

    )
}

export default AppRoutes