import React, { useEffect } from "react";
import "./writeBlog.css";
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
    const ids = key;
    localStorage.setItem("id", ids);
    navigate("/bloginfo");
  };
  useEffect(() => {
    getblog();
  }, []);

  return (
    <>
      <div className="main_list">
        <div className="logo">
          <a href="https://clinqo.com">
            <img src="./assets/clinqologo.png" alt="Error" />
          </a>
        </div>
        <div className="text">
          <table>
          <tr>
              <td>Title:</td>
              <td>
                <input type="text"></input>
                {/* <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                ></textarea> */}
              </td>
            </tr>
            <tr>
              <td>Blog:</td>
              <td>
                {/* <input type="text"></input> */}
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>Author:</td>
              <td>
                <input type="text"></input>
                {/* <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                ></textarea> */}
              </td>
            </tr>
            <div>
                <button onClick={Submit}>Submit</button>
            </div>
            
          </table>
        </div>
      </div>
    </>
  );
}
