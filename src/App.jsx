import React from "react";
import Navbar from "./Componenets/Navbar";
import { Route, Routes } from "react-router-dom";
import Fsd from "./Pages/Fsd";
import Ds from "./Pages/Ds";
import Cs from "./Pages/Cs";
import Career from "./Pages/Career";
import PageNotFound from "./Pages/PageNotFound";
import AllFile from "./Pages/AllFile";

const App = () => {
 let data = [
    {
      all:"all",
      courses: "fsd",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/03/1.jpg",
      title: "Best Web Development RoadMap for Beginners 2024",
      author: "Isha Sharma",
      date: "16 Apr, 2024",
    },
    {
      all:"all",
      courses: "fsd",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      title: "7 Best Full Stack Development Online Courses 2024",
      author: "Srinithi Sankar",
      date: "25 Mar, 2024",
    },
    {
      all:"all",
      courses: "fsd",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/24746653_7002417-1-2048x1365.jpg",
      title: "The Future & Scope of Full Stack Developers in India",
      author: "Meghana D",
      date: "16 Apr, 2024",
    },
    {
      all:"all",
      courses: "ds",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
      title: "Roles and Responsibilities of a Data Scientist",
      author: " Meghana D",
      date: "25 Mar, 2024",
    },
    {
      all:"all",
      courses: "ds",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      title: "top Product-Based Companies for Data Scientists in 2024",
      author: "Jaishree pathmar",
      date: "26 Mar, 2024",
    },
    {
      all:"all",
      courses: "ds",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Everything-about-Data-Scientist-Salary-in-India-2023-2048x1072.png",
      title: "Everything about Data Scientist Salary in India | 2024",
      author: "Srinithi Sankar",
      date: "02 Apr, 2024",
    },
    {
      all:"all",
      courses: "cs",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      title:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023",
      author: "Tushar Vinocha",
      date: "04 Oct, 2023",
    },
    {
      all:"all",
      courses: "cs",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
      title: "8 Different Types of Cybersecurity and Threats Involved",
      author: "Tushar Vinocha",
      date: "08 Sep, 2023",
    },
    {
      all:"all",
      courses: "cs",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title: "The Ultimate Cybersecurity Roadmao for Beginners",
      author: "Srinithi Sankar",
      date: "23 Mar, 2024",
    },
    {
      courses: "career",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT3f85zuLMucSn82D8hMD5XO0uP7R7pt4-uzvW9pYou2Z29FABZ",
      title: "Java Full Stack Development Course",
      t1:"EMI Options Available",
      t2:"Placement Guidance",
      t3:"1:1 Menpathr Doubt Clearing Sessions",
    },
    {
      courses: "career",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTli1BtVZa-gKFCR3Rpr1BSFtQQx1zKIlNXgEZ5vCD_jsMcXyAQ",
      title: "Automation testing Course with Java",
      t1:"EMI Options Available",
      t2:"Placement Guidance",
      t3:"1:1 Menpathr Doubt Clearing Sessions",
    },
    {
      courses: "career",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzIOg0ukI-XxBlXX7WQ5S5vJsMs77Age3sx6wVuK_IKrH5K0S",
      title: "Data Engineering Course with Bigdata and Hadoop",
      t1:"EMI Options Available",
      t2:"Placement Guidance",
      t3:"1:1 Menpathr Doubt Clearing Sessions",
    }
  ]
  return (
    <div>
      <>
        <Navbar />
      </>

      <Routes>
        <Route path="/" element={<AllFile data={data} />}></Route>
        <Route path="/fsd" element={<Fsd data={data} />}></Route>
        <Route path="/ds" element={<Ds data={data} />}></Route>
        <Route path="/cs" element={<Cs data={data} />}></Route>
        <Route path="/career" element={<Career data={data} />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
