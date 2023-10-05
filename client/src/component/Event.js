// This is the Events Page
import React, { useContext ,useState} from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import { Grid } from "@mui/material";
 
///// import all of photos
import apr252023Image from "../component/2022-09-21-past/apr252023.jpg";
import april32023Image from "../component/2022-09-21-past/april32023.jpg";
import wie1Image from "../component/2022-09-21-past/wie1.jpg";
import wie2Image from "../component/2022-09-21-past/wie2.jpg";
import wie3Image from "../component/2022-09-21-past/wie3.jpg";
import feb272023Image from "../component/2022-09-21-past/feb272023.jpg";
import feb102023Image from "../component/2022-09-21-past/feb102023.jpg";
import trainee_talk_2Image from "../component/2022-09-21-past/trainee_talk_2.jpg";
import telecom2Image from "../component/2022-09-21-past/telecom2.jpg";
import trainee_talk_1Image from "../component/2022-09-21-past/trainee_talk_1.jpg";

import retreat_groupImage from "../component/2022-09-21-past/retreat_group.jpg";
import brainstormImage from "../component/2022-09-21-past/brainstorm.jpg";
import group1Image from "../component/2022-09-21-past/group1.jpg";
import group2Image from "../component/2022-09-21-past/group2.jpg";
import group3Image from "../component/2022-09-21-past/group3.jpg";
import group4Image from "../component/2022-09-21-past/group4.jpg";
import olivierImage from "../component/2022-09-21-past/olivier.jpg";
import sumon_biswasImage from "../component/2022-09-21-past/sumon_biswas.jpg";
import traineeSeptemberImage from "../component/2022-09-21-past/traineeSeptember.jpg"
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
import { Link } from "react-router-dom";
const Event=()=>{
    const { isDarkMode } = useContext(DarkModeContext);
 // State to track whether to show the full text
 const [showFullText, setShowFullText] = useState(false);

 // Function to toggle the visibility of the full text
 const toggleText = () => {
   setShowFullText(!showFullText);
 };
    return( 
    <Container isDarkMode={isDarkMode}>
        {/* <StickySidebar>
          <Sidebar />
        </StickySidebar> */}
        <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ flex: 1, padding: "20px" }}
      
    >     
  
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <MainContent isDarkMode={isDarkMode}>
  


        <Title isDarkMode={isDarkMode} className="logo-nav">       

        <CustomText isDarkMode={isDarkMode}>
  

  <div>Upcoming Events Soooon   </div>   
       <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
  
</CustomText>
        
            </Title>

        <Subtitle isDarkMode={isDarkMode} >Past Event</Subtitle>
    
        <Div >
<SmallDiv isDarkMode={isDarkMode}>
        <CardImage>  
            <Img src={traineeSeptemberImage} alt=" traineeSeptemberImage" /></CardImage>
          <CardBody isDarkMode={isDarkMode}>
              <h4 className="title" isDarkMode={isDarkMode}>
              Trainee Talks Webinar - September 25, 2023   </h4> </CardBody>  

              <Main className="main" isDarkMode={isDarkMode}>
              Our CREATE SE4AI community came together on 
              September 25th, 2023 for the first Trainee 
               <Button isDarkMode={isDarkMode}><Link to="/blog/Trainee_Talks_Webinar_sptemper25" className="read-more-link"> Read More
      </Link></Button> 
              </Main>
          
          </SmallDiv>
          <SmallDiv isDarkMode={isDarkMode}>
          <CardImage><Img src={apr252023Image} alt=" apr252023.jpg" /></CardImage>
     <CardBody>
              <h4 className="title" isDarkMode={isDarkMode}>
              Industry Talks Webinar - April 25, 2023   </h4></CardBody> 
              <Main className="main" isDarkMode={isDarkMode}>
              CREATE SE4AI is pleased to 
              present Patrick Mesana, Consultant
               at National Bank of Canada and PhD 
          
  <Button isDarkMode={isDarkMode}><Link to="/blog/Industry_Talks_Webinar_April25" className="read-more-link"> Read More
      </Link></Button>
              </Main>
   
          </SmallDiv>
          <SmallDiv isDarkMode={isDarkMode}>
         <CardImage> <Img src={april32023Image} alt=" april32023.jpg" /></CardImage>
         <CardBody>
              <h4 className="title" isDarkMode={isDarkMode}>
              Trainee Talks Webinar - April 3rd, 2023​
              </h4></CardBody>
              <Main className="main" isDarkMode={isDarkMode}>
              The Spring Trainee Talks webinar was a huge 
              success and we were pleased to have 27 participants join!

  <Button isDarkMode={isDarkMode}><Link to="/blog/Trainee_Talks_Webinar_April3rd" className="read-more-link"> Read More
      </Link></Button>
              </Main>
          
          </SmallDiv>
         
    </Div>
  



        {/* the Second part  */}



        <Div>
        <SmallDiv isDarkMode={isDarkMode}>
      <CardImage>  
         <Image>
          <Img2 src={wie1Image} alt="wie1Image" />
          <Img2 src={wie2Image} alt="wie2Image" />
          <Img2 src={wie3Image} alt="wie3Image" />
        </Image>
        </CardImage>
    <CardBody>
        <h4 className="title" isDarkMode={isDarkMode}>
          Women in Engineering (WIE) - March 18, 2023
        </h4></CardBody>
        <Main className="main" isDarkMode={isDarkMode}>
        On March 18th , CREATE SE4AI took part in WIE
         Inspire WIE Empower, an annual event hosted by the
         <Button isDarkMode={isDarkMode}><Link to="/blog/Women_in_Engineering" className="read-more-link"> Read More
      </Link></Button>
        </Main>
 
    </SmallDiv>
        <SmallDiv isDarkMode={isDarkMode}>
         <CardImage> <Img src={feb272023Image} alt=" feb272023.jpg" /></CardImage>
<CardBody>              <h4 className="title" isDarkMode={isDarkMode}>
              Trainee Talks Webinar - February 27, 2023             </h4></CardBody>
              <Main className="main" isDarkMode={isDarkMode}>
              In the first Trainee Talks webinar of 2023,
               Pierre-Olivier Côté, a Master's student 
               <Button isDarkMode={isDarkMode}><Link to="/blog/Trainee_Talks_Webinar_February27" className="read-more-link"> Read More
      </Link></Button>
              </Main>
          
          </SmallDiv>
          <SmallDiv isDarkMode={isDarkMode}>
         <CardImage> <Img src={feb102023Image} alt="feb102023.jpg" /></CardImage>
       <CardBody>
              <h4 className="title" isDarkMode={isDarkMode}>
              Industry Talks Webinar - February 10, 2023​
             </h4></CardBody>
              <Main className="main" isDarkMode={isDarkMode}>
              CREATE SE4AI is pleased to 
              present Patrick Mesana, Consultant
               at National Bank of Canada and PhD 
               Candidate at HEC 
               <Button isDarkMode={isDarkMode}><Link to="/blog/Industry_Talks_Webinar_February10" className="read-more-link"> Read More
      </Link></Button>

              </Main>
         
          </SmallDiv>
          
         
        </Div>



          {/* the Second part  */}



          <Div>
          <SmallDiv isDarkMode={isDarkMode}>
          <CardImage><Img src={trainee_talk_2Image} alt=" trainee_talk_2.jpg" /></CardImage>
       <CardBody>
              <h4 className="title" isDarkMode={isDarkMode}>
              Trainee Talks Webinar - December 13, 2022{" "}
              </h4></CardBody>
              <Main className="main" isDarkMode={isDarkMode}>
              The Spring Trainee Talks webinar was a huge success and we were pleased to have 27 participants join!

In this webinar, 2 PhD students from Polytechnique
 Montréal under Prof. Foutse Khomh 
 <Button isDarkMode={isDarkMode}><Link to="/blog/Trainee_Talks_Webinar_December13" className="read-more-link"> Read More
      </Link></Button>
              </Main>
       
          </SmallDiv>
          <SmallDiv isDarkMode={isDarkMode}>
         <CardImage> <Img src={telecom2Image} alt=" telecom2.jpg" /></CardImage>
        <CardBody>
              <h4 className="title" isDarkMode={isDarkMode}>
              Industry Talks Webinar - November 18, 2022​
              </h4></CardBody>
              <Main className="main" isDarkMode={isDarkMode}>
              The Spring Trainee Talks webinar was a huge success and we were pleased to have 27 participants join!

In this webinar, 2 PhD students from Polytechnique
 Montréal <Button isDarkMode={isDarkMode}><Link to="/blog/Industry_Talks_Webinar_November18" className="read-more-link"> Read More
      </Link></Button>
              </Main>
          
          </SmallDiv>
          <SmallDiv isDarkMode={isDarkMode}>
        <CardImage>  <Img src={trainee_talk_1Image} alt="trainee_talk_1.jpg" /></CardImage>
           <CardBody>
              <h4 className="title" isDarkMode={isDarkMode}>
              Trainee Talks Webinar - November 4, 2022         </h4></CardBody>
              <Main className="main" isDarkMode={isDarkMode}>
              In the first Trainee Talks webinar of 2023,
               Pierre-Olivier Côté...
              <Button isDarkMode={isDarkMode}> <Link to="/blog/Trainee_Talks_Webinar_November4" className="read-more-link"> Read More
      </Link></Button>
              </Main>
    
          </SmallDiv>
          </Div>
          {/* the Third part  */}

          <Div>
          <SmallDiv isDarkMode={isDarkMode}>
         <CardImage>  <Group>
            <Img3 src={retreat_groupImage} alt="retreat_group.jpg" />
            <Img3 src={brainstormImage} alt=" brainstorm.jpg" />
            <Img3 src={group1Image} alt="  group1.jpg" />
            <Img3 src={group2Image} alt="  group2.jpg" />
            <Img3 src={group3Image} alt="  group3.jpg" />
            <Img3 src={group4Image} alt="  group4.jpg" />
        </Group>
        </CardImage>
           <CardBody>
              <h4 className="title" isDarkMode={isDarkMode}>
              Guest Speaker Webinar - February 3, 2022             </h4></CardBody>
              <Main className="main" isDarkMode={isDarkMode}>
              Our 1st annual CREATE SE4AI Program Retreat is a wrap! It was an inspiring day of 
              celebrating our collective accomplishments and exchanging ideas 
            <Button isDarkMode={isDarkMode}>          <Link to="/blog/CREATE_SE4AI_Retreat_June3" className="read-more-link"> Read More
      </Link></Button>  
              </Main>
           
          </SmallDiv>
          <SmallDiv isDarkMode={isDarkMode}>
         <CardImage> <Img src={olivierImage} alt="olivier.jpg" /></CardImage>
           <CardBody>
              <h4 className="title" isDarkMode={isDarkMode}>
              Guest Speaker Webinar - April 12, 2022​
              </h4></CardBody>
              <Main className="main" isDarkMode={isDarkMode}>
              CREATE SE4AI trainees, profs and partners enjoyed a 
              webinar presented by Olivier Blais,
               co-founder and VP of Decision Science
                at Moov AI in Montréal <Button isDarkMode={isDarkMode}><Link to="/blog/Guest_Speaker_Webinar_April12 " className="read-more-link"> Read More
      </Link></Button> 
              </Main>
        
          </SmallDiv>
          <SmallDiv isDarkMode={isDarkMode}>
          <CardImage><Img src={sumon_biswasImage} alt="sumon_biswas.jpg" />  </CardImage>     
            <CardBody>
              <h4 className="title" isDarkMode={isDarkMode}>
              Guest Speaker Webinar - February 3, 2022​
              </h4></CardBody>
              <Main className="main" isDarkMode={isDarkMode}>
              CREATE SE4AI hosted a webinar by Sumon Biswas, PhD Candidate at Iowa State University on 
              "Understanding and Reasoning Fairness of Machine Learning Pipeline"
             <Button isDarkMode={isDarkMode}> <Link to="/blog/Guest_Speaker_Webinar_February3"  className="read-more-link"> Read More</Link></Button>
              </Main>
     
          </SmallDiv>
        </Div>
          </MainContent>
      </Grid>
      </Grid>
    </Container>
  );
};

export default Event;
const Button=styled.button`
background-color:inherit;
border:none;
display:flex; 
margin-left:0;
margin-top:25px;
font-size:15px;
font-weight:700;
.read-more-link {
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

}
.read-more-link:hover {
  color:#bb5a7d;
}`
const Container = styled.div`
   /* margin-top: 0px; */
   margin-left:70px; 
/* border:2px solid green; */
font-family: "Open Sans", sans-serif;
padding-bottom: 20px;
width: 100%;
display: flex;
font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Helvetica', 'Arial', sans-serif, BlinkMacSystemFont;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    height:100%;

  width: 100%;
  @media screen and (max-width: 768px) {
  margin-left:0px;
  display:flex; 
  flex-wrap:wrap;

}

@media screen and (max-width: 480px) {
  margin-left:0px;
}
`;
const Subtitle = styled.div`
display: flex;
font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
/* margin-left:50px; */
  flex-wrap: wrap;
  margin-top: 55px;
/* width:100%; */
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; `
const MainContent = styled.div`
/* border:2px solid red;  */
max-width:1400px;
  /* width: 100%; */
  padding-top: -40px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* margin: 0 auto; */



// `;

const Title = styled.div`
  font-weight: 700;
  /* display: flex;
  flex-wrap: wrap; */
 margin-top:-19px;
  padding-top:60px;
  font-size: 45px;
  /* padding-bottom: 80px; */
  /* border:2px solid blue; */
  height:300px;
  border-bottom: 2px solid ${(props) => (props.isDarkMode ? "#212529" : "#f0f0f0")};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "black")};
  background-color: ${(props) => (props.isDarkMode ? "#242526" : "#ffffff")};
  width: 100%; 
  /* Set the width to 100% */
  min-width:100vw;
  /* margin-right:-750px; */
  margin-left:-600px;
padding-left:600px;
 img {
/* background-color:inherit; */
/* color: ${(props) => (props.isDarkMode ? "inherit" : "#ffffff")}; */

 height: 220px;
  cursor: pointer;
/* text-align :center ;  */
margin-left:70px;
width:220px; 

  }

`;
const CustomText = styled.div`
  font-size: 48px;
  padding-top: 6px;
margin-top:-50px;
/* width:100% ; */
display:flex; 
flex-direction:row;
  font-weight: 700;
  line-height:1.25;
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; 

  font-family:system-ui,-apple-system,Segoe UI,Roboto
  ,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,
  "Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji",
  "Segoe UI Emoji","Segoe UI Symbol";
  div{
    margin-top:120px;
    margin-left:170px;
    /* border:2px solid green; */
  }
  @media (max-width: 995px) {
width:300px;  
margin-left:-30px;}
`;
const CustomText2 = styled.div`
  font-size: 48px;
margin-left:580px;
/* border:2px solid red; */
  font-weight: 700;
  line-height:1.25;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

  font-family:system-ui,-apple-system,Segoe UI,Roboto
  ,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,
  "Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji",
  "Segoe UI Emoji","Segoe UI Symbol";
  @media (max-width: 995px) {
width:300px;  
margin-left:-30px;}
`;


const RedText = styled.span`
  color: #bb5a7d;
`;




const CardImage=styled.div`
@media (max-width: 1000px) {
  width:358.4px;
}
  border-radius:20px;
  `
const Img = styled.img`
width:400px; 
height:298px; 
/* border-top-right-radius :15px; 
border-top-left-radius:15px; */
@media (max-width: 1000px) {
 width:358.4px;
 height:358.4px;
 /* width:100%; */
 }
`
const CardBody=styled.div`
  padding:0.25rem 0rem;

  /* background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};  */
h4{
  /* margin-left:0; */
}


padding-bottom: 0;
`

const Div=styled.div`
  display: flex;
  margin-top:23px;
  justify-content: center;
  gap:60px;
/* border:2px solid red ; */
margin-right:2rem;
/* flex:0 0 100%; */
@media (max-width: 1000px) {

  max-width:358.4px;
}



`
const SmallDiv=styled.div`
/* border:${(props) => (props.isDarkMode ? "": "2px solid #eef0f2")}; */

max-width:400px; 
/* border:2px solid orange ;  */
/* background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
/* border-radius:20px; */
box-shadow:0 1 2 0 rgb(0 0 0 1);
/* margin-top:20px;
margin-left:100px;  */
/* display:flex; 
flex-wrap:wrap; */
@media (max-width: 1000px) {
    margin-right: 0; /* Remove right margin for mobile screens */
  width:358.4px;
}
`



const Main = styled.div`
  width: 100%;
 max-width: 800px;
  padding-top: 0.7px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
/* border:2px solid green; */
/* height:100%; */
  background-color: ${(props) => (props.isDarkMode ? "#181818" : "#ffffff")}; 

`
const Img2 = styled.img`
  width: 125px;
  /* height: 350px; */
  margin-left: 4px;
  margin-top: 10px;
`;
const Image = styled.div`
flex-wrap: wrap;
width:100%;

 max-width: 400px;  

`;

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Img3 = styled.img`
  width: 120px;
  height: 120px;
  padding-left: 2px;
  padding-top: 4px;
  transition: transform 0.3s;
  z-index: 0;
`;