import React, { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./component/DarkModeContext";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Event from "./component/Event";
import Trainee_Talks_Webinar from "./component/Trainee_Talks_Webinar";
import Industry_Talks_Webinar from "./component/Industry_Talks_Webinar";
import Trainee_Talks_Webinar_April3rd from "./component/Trainee_Talks_Webinar_April3rd";
import Women_in_Engineering from "./component/Women_in_Engineering"
import Trainee_Talks_Webinar_February27 from "./component/Trainee_Talks_Webinar_February27";
import Industry_Talks_Webinar_February10 from "./component/Industry_Talks_Webinar_February10"; 
import Trainee_Talks_Webinar_December13 from "./component/Trainee_Talks_Webinar_December13";
import Industry_Talks_Webinar_November18 from "./component/Industry_Talks_Webinar_November18";
import Trainee_Talks_Webinar_November4 from "./component/Trainee_Talks_Webinar_November4";
import CREATE_SE4AI_Retreat_June3 from "./component/CREATE_SE4AI_Retreat_June3";
import Guest_Speaker_Webinar_April12 from "./component/Guest_Speaker_Webinar_April12";
import Guest_Speaker_Webinar_February3 from "./component/Guest_Speaker_Webinar_February3";           
const App = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNavbarVisibility = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  const [AppointmentId, setAppointmentId] = useState("");
  const [adminId, setAdminId] = useState("");
  





  return (
    <DarkModeProvider>
      <BrowserRouter >

      
      {/* {window.innerWidth <= 995 ? (
          <Header  />
        ) : ( */}
          <Navbar />
          
           <Routes >
           <Route path="/blog" element={<Event />} />
           <Route path="/blog/Trainee_Talks_Webinar_sptemper25" element={<Trainee_Talks_Webinar />} />
           <Route path="/blog/Industry_Talks_Webinar_April25" element={<Industry_Talks_Webinar />} />
           <Route path="/blog/Trainee_Talks_Webinar_April3rd" element={<Trainee_Talks_Webinar_April3rd />} />
           <Route path="/blog/Women_in_Engineering" element={<Women_in_Engineering />} />
           <Route path="/blog/Trainee_Talks_Webinar_February27" element={< Trainee_Talks_Webinar_February27 />} />
           <Route path="/blog/Industry_Talks_Webinar_February10" element={< Industry_Talks_Webinar_February10 />} />
           <Route path="/blog/Trainee_Talks_Webinar_December13" element={< Trainee_Talks_Webinar_December13 />} />
           <Route path="/blog/Industry_Talks_Webinar_November18" element={< Industry_Talks_Webinar_November18 />} />
           <Route path="/blog/Trainee_Talks_Webinar_November4" element={< Trainee_Talks_Webinar_November4/>} />
           <Route path="/blog/CREATE_SE4AI_Retreat_June3" element={< CREATE_SE4AI_Retreat_June3/>} />
           <Route path="/blog/Guest_Speaker_Webinar_April12" element={<Guest_Speaker_Webinar_April12/>} />
           <Route path="/blog/Guest_Speaker_Webinar_February3" element={<Guest_Speaker_Webinar_February3 />} />

          {/* <Route path="/" element={<Homepage />} />
          <Route path="/intro" element={<Program />} />
          <Route
            path="/training-program/objectives"
            element={<ProgramObjectives />}
          />
          <Route
            path="/training-program/components"
            element={<ProgramComponents />}
          />
          <Route path="/blog" element={<Events />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog/past" element={<PastEvents />} />
          <Route path="/blog/upcoming" element={<UpcomingEvents />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminlogin/:adminId" element={<AdminProfile />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;
