import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import PropertiesForRent from './PropertiesForRent';
import SignUp from './SignUp';
import TopServiceProviders from './TopServiceProviders';
import TopRealEstateAgents from './TopRealEstateAgents';
import All from './listing/All';
import Details from './listing/Details';
import Login from './Login';
import Pricing from './Pricing';
import ForgotPassword from './ForgotPassword';
import EmailVerification from './EmailVerfication';
import AllServicesProviders from './serviceProvider/All';
import ServiceProviderDetails from './serviceProvider/Details';
import AllAgents from './RealEstateAgents/AllAgents';
import AgentsDetail from './RealEstateAgents/AgentsDetails';
import FAQs from './FAQs';
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/propertiesForRent" element={<PropertiesForRent />} />
          <Route exact path="/topServiceProviders" element={<TopServiceProviders />} />
          <Route exact path="/topRealEstateAgents" element={<TopRealEstateAgents />} />
          <Route exact path="/listing/all" element={<All />} />
          <Route exact path="/listing/details" element={<Details />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route exact path="/emailVerification" element={<EmailVerification />} />
          <Route exact path="/serviceProvider/All" element={<AllServicesProviders />} />
          <Route exact path="/serviceProvider/Details" element={<ServiceProviderDetails />} />
          <Route exact path="/realEstateAgents/AllAgents" element={<AllAgents />} />
          <Route exact path="/realEstateAgents/AgentsDetails" element={<AgentsDetail />} />
          <Route exact path="/fAQs" element={<FAQs />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
