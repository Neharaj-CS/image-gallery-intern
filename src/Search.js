import axios from 'axios';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';
import ImagePopup from './ImagePopup';

const API_URL = `https://pixabay.com/api/?key=38410160-6dcf759c7111ffbc8b939188c&q&image_type=photo&per_page=30&q=`;

const Searchbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 40px;
  padding-left: 10px;
  margin: 20px auto;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 0 8px #fff;
`;

const Form = styled.form``;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 80%;
  padding: 5px;
`;

const Hr = styled.hr`
  transform: rotate(-90deg);
  width: 25px;
`;

const Go = styled.button`
  width: 70px;
  margin-right: 10px;
  height: 30px;
  color: #ffffff;
  border-radius: 8px;
  border: 2px solid white;
  background-color: rgba(255, 255, 255, 0.2);
`;

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      // Fetch images from the Pixabay API based on the search term
      const searchUrl = `${API_URL}${encodeURIComponent(searchTerm)}`;
      axios
        .get(searchUrl)
        .then((response) => {
          setImages(response.data.hits);
        })
        .catch((error) => {
          console.error('Error fetching images:', error);
        });
    }
  }, [searchTerm]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Trigger the API call when the form is submitted
    setSearchTerm(event.target.search.value.trim());
  };

  return (
    <div>
      <Form onSubmit={handleSearch}>
        <Searchbar>
          <SearchOutlinedIcon />
          <Hr />
          <Input
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Go type="submit">Go!</Go>
        </Searchbar>
      </Form>
      {images.length > 0 ? (
        <ImageGallery images={images} searchTerm={searchTerm} onImageClick={handleImageClick} />
      ) : (
        <p style={{ textAlign: 'center' }}>No images to display. Search for images above.</p>
      )}
      {showPopup && <ImagePopup selectedImage={selectedImage} onClose={handleClosePopup} />}
    </div>
  );
}

export default Search;
