import React, { Suspense, lazy } from 'react'
import { Route, Switch } from "react-router-dom"

import { useSelector } from "react-redux"

import HomeScreen from "./pages/HomeScreen"
import ActivationEmail from "./components/mainpages/auth/ActivationEmail"
import ResetPasswordScreen from "./components/mainpages/auth/ResetPasswordScreen"
import UserProfileScreen from "./components/mainpages/profile/UserProfileScreen"
import EditUserScreen from "./components/mainpages/profile/EditUserScreen"

import PageNotFoundScreen from "./components/mainpages/utils/PageNotFound/PageNotFoundScreen"

import Loading from "./components/mainpages/utils/Loading/Loading"


const AboutScreen = lazy(() => import("./pages/AboutScreen"))
const ContactScreen = lazy(() => import("./pages/ContactScreen"))
const ServiceScreen = lazy(() => import("./pages/ServiceScreen"))
const PriceScreen = lazy(() => import("./pages/PriceScreen"))
const BlogScreen = lazy(() => import("./pages/BlogScreen"))
const BlogDetailScreen = lazy(() => import("./pages/BlogDetailScreen"))
const DoctorDetailScreen = lazy(() => import("./pages/DoctorDetailScreen"))
const LoginFormScreen = lazy(() => import("./components/mainpages/auth/LoginFormScreen"))
const RegisterFormScreen = lazy(() => import("./components/mainpages/auth/RegisterFormScreen"))
const ForgotPasswordScreen = lazy(() => import("./components/mainpages/auth/ForgotPasswordScreen"))



function MainPages() {
  const auth = useSelector(state => state.auth)
  const { isLogged, isAdmin } = auth

  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/user/reset/:token" component={isLogged ? PageNotFoundScreen : ResetPasswordScreen} />
        <Route exact path="/user/activate/:activation_token" component={ActivationEmail} />
        <Route exact path="/profile" component={isLogged ? UserProfileScreen : PageNotFoundScreen} />
        <Route exact path="/edit_user/:id" component={isAdmin ? EditUserScreen : PageNotFoundScreen} />

        <Suspense fallback={<span><Loading /></span>}>
          <Route exact path="/login" component={isLogged ? PageNotFoundScreen : LoginFormScreen} />
          <Route exact path="/register" component={isLogged ? PageNotFoundScreen : RegisterFormScreen} />

          <Route exact path="/forgot_password" component={isLogged ? PageNotFoundScreen : ForgotPasswordScreen} />

          <Route exact path="/blogs/:id" component={BlogDetailScreen} />
          <Route exact path="/doctor-details" component={DoctorDetailScreen} />

          <Route exact path="/about-us" component={AboutScreen} />
          <Route exact path="/contact-us" component={ContactScreen} />
          <Route exact path="/services" component={ServiceScreen} />
          <Route exact path="/blogs" component={BlogScreen} />
          <Route exact path="/price" component={PriceScreen} />
        </Suspense>

        <Route path="*" component={PageNotFoundScreen} />

      </Switch>
    </>
  )
}


export default MainPages

