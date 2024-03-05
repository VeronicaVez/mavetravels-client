import { Routes, Route } from "react-router-dom"
import React from "react"

import HomePage from "../pages/HomePage/HomePage"
import DestinationPage from "../pages/DestinationPage/DestinationPage"

const AppRoutes = () => {

    return (


        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/destinations" element={<DestinationPage />} />
            {/* <Route path="/themes" element={<ThemesPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />

            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />

            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/admin-profile" element={<AdminProfilePage />} />

            <Route path="*" element={<NotFoundPage />} /> */}

        </Routes>

    )
}

export default AppRoutes