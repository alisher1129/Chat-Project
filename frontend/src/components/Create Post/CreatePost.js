import React, { useContext, useState } from 'react'
import axios from 'axios';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [Image, setImage] = useState();
  const [title, setTitle] = useState();
  const navigate = useNavigate();


  const { currentUser, setCurrentUser } = useContext(UserContext)
  const preset_key = "qcwkzvts";
  const cloud_name = "dmofvfvks";


  const handleUpload = async () => {
    console.log('asdfas')
    const formData = new FormData();
    formData.append("file", Image);
    formData.append("cloud_name", cloud_name);
    formData.append("upload_preset", preset_key);
    await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData).
      then(res => {
        console.log(res)
        const url = res.data.secure_url;
        setImage(url);
      })
      .catch(err => console.log(err))
  }
  const handleSubmit = async (event) => {

    event.preventDefault()

    axios.post("http://localhost:4000/createPost", {
      title: title,
      photo: Image
    }, {
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    }).then(data => {
      navigate('/profile')
      data.json()
     
    }).catch(err => console.log(err))


  }
  console.log(Image)
  return (
    <>
      <div>
        <h3>Create Post</h3>
      </div>
      <form onSubmit={handleSubmit}>

        <div>
          <label>title</label>
          <br></br>
          <input type=' text' value={title} onChange={e => setTitle(e.target.value)}  ></input>
        </div>
        <div>

        </div>
        <div>


          <label>Image</label>
          <br></br>
          <input onChange={e => setImage(e.target.files[0])} type='file' name='file' />

        </div>
        <br></br>
        <div>

          <button onClick={() => handleUpload()} type='button'>upload post</button>
        </div>

        <button type='submit'>upload title</button>
      </form>
    </>

  )
}

export default CreatePost