import React from "react";
import "./writeBlog.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function National() {
  const [title, setTitle] = React.useState([]);
  const [content, setContent] = React.useState([]);
  const [author, setAuthor] = React.useState([]);

//   const navigate = useNavigate();
  const url = "https://gleaming-hare-attire.cyclic.app/addpost";

  const Submit = () => {
    const data = {
        "title": title,
        "content" : content,
        "author" : author,
        "views" : 0,
      }
      if(title===""||content===""||author===""){
        alert("Fill all the fields");
      }
      else{
        axios
      .post(url,data)
      .then((res) => {
        // setBlogData(res.data);
        console.log(res.data);
        alert("Blog uploaded successfully");
      })
      .catch((err) => {
        console.log(err);
      });
      }
    
  };

 
//   useEffect(() => {
//     getblog();
//   }, []);

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
                <input type="text" name="Heading" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
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
                  name="blog"
                  rows="4"
                  cols="50"
                  value={content} onChange={(e)=>{setContent(e.target.value)}}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>Author:</td>
              <td>
                <input type="text" name="auth" value={author} onChange={(e)=>{setAuthor(e.target.value)}}></input>
                {/* <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                ></textarea> */}
              </td>
            </tr>
           
            
          </table>
         
        </div>
        <div className="btn">
                <button onClick={Submit}>Submit</button>
            </div>
      </div>
    </>
  );
}
