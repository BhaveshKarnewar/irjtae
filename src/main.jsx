import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// header components

import Home from "./components/Home.jsx";
import Fee from "./components/Fee.jsx";
import Indexing from "./components/Indexing.jsx";
import Archives from "./components/Archives.jsx";
import Conference from "./components/Conference.jsx";
import About from "./components/About.jsx";
import EditorialBoard from "./components/EditorialBoard.jsx";
import Contact from "./components/Contact.jsx";
import JoinAsReviewer from "./components/JoinAsReviewer.jsx";
// about info components
import PeerReviewProcess from "./components/aboutInfo/PeerReviewProcess.jsx";
import PrivacyPolicies from "./components/aboutInfo/PrivacyPolicies.jsx";
import PublicationEthics from "./components/aboutInfo/PublicationEthics.jsx";
import TermsAndConditions from "./components/aboutInfo/TermsAndConditions.jsx";
// action components
import CallForPaper from "./components/actions/CallForPaper.jsx";
import CopyRightForm from "./components/actions/CopyRightForm.jsx";
import PaperFormat from "./components/actions/PaperFormat.jsx";
import PayPublicationFee from "./components/actions/PayPublicationFee.jsx";
import PublicationProcess from "./components/actions/PublicationProcess.jsx";
import SubmitPaperOnline from "./components/actions/SubmitPaperOnline.jsx";
import TrackPaper from "./components/actions/TrackPaper.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/Fee" element={<Fee />}></Route>
      <Route path="/Indexing" element={<Indexing />}></Route>
      <Route path="/Archives" element={<Archives />}></Route>
      <Route path="/Conference" element={<Conference />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/JoinAsReviewer" element={<JoinAsReviewer />}></Route>

      {/* About info components */}
      <Route path="/EditorialBoard" element={<EditorialBoard />}></Route>
      <Route path="/PeerReviewProcess" element={<PeerReviewProcess />}></Route>
      <Route path="/PrivacyPolicies" element={<PrivacyPolicies />}></Route>
      <Route path="/PublicationEthics" element={<PublicationEthics />}></Route>
      <Route
        path="/TermsAndConditions"
        element={<TermsAndConditions />}
      ></Route>

      {/* Action components */}
      <Route path="/CallForPaper" element={<CallForPaper />}></Route>
      <Route path="/CopyRightForm" element={<CopyRightForm />}></Route>
      <Route path="/PaperFormat" element={<PaperFormat />}></Route>
      <Route path="/PayPublicationFee" element={<PayPublicationFee />}></Route>
      <Route
        path="/PublicationProcess"
        element={<PublicationProcess />}
      ></Route>
      <Route path="/SubmitPaperOnline" element={<SubmitPaperOnline />}></Route>
      <Route path="/TrackPaper" element={<TrackPaper />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
