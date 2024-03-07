import { Routes, Route } from "react-router-dom"
import React from "react"

import HomePage from "../pages/HomePage/HomePage"
import DestinationsPage from "../pages/DestinationsPage/DestinationsPage"
import ThemesPage from "../pages/ThemesPage/ThemesPage"
import LogInPage from "../pages/LogInPage/LogInPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import NewTravelFormPage from "../pages/NewTravelFormPage/NewTravelFormPage"

const AppRoutes = () => {

    return (


        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/themes" element={<ThemesPage />} />
            {/* <Route path="/reviews" element={<ReviewsPage />} /> */}

            <Route path="/api/auth/signup" element={<SignUpPage />} />
            <Route path="/api/auth/login" element={<LogInPage />} />


            {/* <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/admin-profile" element={<AdminProfilePage />} /> */}

            <Route path="/admin-profile/create-travel" element={<NewTravelFormPage />} />

            {/* <Route path="*" element={<NotFoundPage />} /> */}

        </Routes>

    )
}

export default AppRoutes