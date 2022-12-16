import React, { useEffect } from "react";
import "./blog.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";


export default function National() {
  const [blogdata, setBlogData] = React.useState([]);
//   const navigate = useNavigate();
  

  const getblog = () => {
   
   const id1=localStorage.getItem("id");
   console.log(id1);
    axios
      .get(`https://gleaming-hare-attire.cyclic.app/getposts/posts/${id1}`)
      .then((res) => {
        setBlogData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getblog();
    
  }, []);

  return (
    <>
      <div className="main_list">
        <div className="logo">
            <a href="https://clinqo.com">
          <img
            src="./assets/clinqologo.png"
            alt="Error"
          />
            </a>
        </div>  

        <div className="list">

            <h1>{blogdata.title}</h1>
            <p style={{color:"white",wordSpacing:"1rem",fontSize:"1.5rem"}}>{blogdata.content}</p>
          
        </div>
      </div>
    </>
  );
}
