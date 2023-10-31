import React, { useEffect,useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './CreatePost.css';

function CreatePost() {
  const [Image, setImage] = useState();
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const preset_key = 'qcwkzvts';
  const cloud_name = 'dmofvfvks';

  useEffect(()=>{
    if(currentUser == false){
        navigate("/login")
      }
},[])

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', Image);
    formData.append('cloud_name', cloud_name);
    formData.append('upload_preset', preset_key);

    try {
      const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData);
      const url = res.data.secure_url;
      setImage(url);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // First, handle the image upload
    await handleUpload();

    // Then, submit the title and image to your server
    axios
      .post(
        'http://localhost:4000/createPost',
        {
          title: title,
          photo: Image,
        },
        {
          headers: {
            'x-access-token': localStorage.getItem('token'),
          },
        }
      )
      .then((data) => {
        navigate('/profile');
        data.json();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
  <div className="container-post" >
        <h3>Create Post</h3>
     
      <form onSubmit={handleSubmit}>
        <div className="form-group" >
          <label>Title</label>
          <br />
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group" >
          <label>Image</label>
          <br />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" name="file" />
        </div>
        <br />
        {/* <button type="submit">Upload Post</button> */}
        <Button variant="primary" type="submit">
        Upload
      </Button>
      </form>
      </div>
    </>
  );
}

export default CreatePost;
