import React, { useEffect } from "react";
import "./blog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function National() {
  const [blogdata, setBlogData] = React.useState([]);
  const navigate = useNavigate();
  const url = "https://gleaming-hare-attire.cyclic.app/getposts/all";

  const getblog = () => {
   
   
    axios
      .get(url)
      .then((res) => {
        setBlogData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Submit = (key) => {
        const ids=key;
        localStorage.setItem("id",ids)
        navigate('/bloginfo');
  }
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
          {blogdata.map((item) => {
            return (
              <div key={item._id} className="innerlist">
                <h2>{item.title}</h2>
                <h5 className="dateandicon">
                  {item.content} 
                </h5>
                <h4>
                  Author : {item.author}
                </h4>
                <h4>
                  Views : {item.views}
                </h4>
                <button className="btn" onClick={() => Submit(item._id)}>Click for more</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
