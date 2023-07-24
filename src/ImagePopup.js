import React from 'react';
import styled from 'styled-components';
import './ImagePopup.css';
const PopupOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.7);
z-index: 9999;
justify-content: center;
align-items: center;
display: flex;

`;

const PopupContainer = styled.div`
  border-radius:10px;
  background-color: white;
  padding: 20px;
  width: 1217px;
  max-width: 1217px;
  color:black;
  height:90%;
`;

const Img = styled.img`
  width: 832px;
  height: 400px;
`;
const Titlesec=styled.div`
background-color:#f5f5f5;
padding:20px;

margin-left: -14px;
margin-top: -19px;
display:flex;
padding: 20px;
width: 1197px; /* Set the width of the popup container */
max-width: 1217px;
`;
const Leftside=styled.div`
display:flex;
flex-direction:column;

`;
const Rightside=styled.div`
display:flex;
flex-direction:column;

`;
const Button=styled.div`
border:2px solid black;
border-radius:5px;
padding-left:5px;
padding-right:5px;
background-color:transparent;
justify-content :center;
margin-left: auto;
color:black;
`;
const Tags=styled.div`
padding:20px 20px;
display:flex;
flex-wrap:wrap;
align-items:center;
color:#717579;
`;
const Tag=styled.div`
  margin-top:0px;
  display: flex;
`;



const Main=styled.div`
display:flex;`;
const Head = styled.div`
  color: #717579;
  font-size: 12px;
  font-weight: 600;
`;



const Info = styled.div``;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Table = styled.table`
  text-align: left;
  border-spacing: 20px;
  margin-left:20px;
`;

const Tagbutton=styled.button`
height:24px;
justify-content:center;
display:flex;
margin-right: 10px;
border:0px none;
color:#767676;
font-size:15px;
font-weight:400;
text-align:center;
margin-bottom:10px;
padding:0 10px;

`;
const DTable=styled.table`
text-align: left;
border-spacing: 20px;

border:0.8px solid #f5f5f5;
border-radius:10px;
margin: -13px 0px;
`;
const DHead=styled.td`
color:#717579;
font-size:12px;
font-weight:600;
padding-right:50px;

`;
const DInfo=styled.td`
font-size:14px;
padding-right:50px;
`;
const Pictitle=styled.div`
text-align:left;
font-size:25px;
padding-left:40px;
`;
const Download=styled.div`
text-align:left;
font-size:25px;
padding-left:40px;
`;
const Input=styled.input``;
const DownloadButton=styled.button`
padding: 10px 130px;
  font-size: 16px;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
const ImagePopup = ({ selectedImage, onClose }) => {

  const tagArray = selectedImage.tags.split(', ');

  return (
    <PopupOverlay>



        <PopupContainer>
        <Titlesec>
         Preview ID:{selectedImage.user_id}
         <Button onClick={onClose}>X</Button>
        </Titlesec>
         <Main>
         <Leftside>
        <Img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
        <Tag>
        <p style={{fontWeight:'700',color:'#3B4043'}}>Tags:</p>
        <Tags>
          {tagArray.map((tag, index) => (
            <Tagbutton key={index}>{tag}</Tagbutton>
          ))}
        </Tags>
        </Tag>
        </Leftside>
        <Rightside>
        <Download>
        Download
        <DTable>
        <tr>
        <DHead>Small</DHead>
        <DInfo>640x960</DInfo>
        <td><input type="checkbox" id="green-checkbox" />
<label for="green-checkbox"></label></td>
        </tr>
        <tr>
        <DHead>Medium</DHead>
        <DInfo>1920x3600</DInfo>
        <td><input type="checkbox" id="green-checkbox" />
<label for="green-checkbox"></label></td>
        </tr>
        <tr>
        <DHead>Big</DHead>
        <DInfo>2400x3600</DInfo>
        <td><input type="checkbox" id="green-checkbox" />
<label for="green-checkbox"></label></td>
        </tr>
        <tr>
        <DHead>Original</DHead>
        <DInfo>3850x5640</DInfo>
        <td><input type="checkbox" id="green-checkbox" />
<label for="green-checkbox"></label></td>
        </tr>
        </DTable>
        <DownloadButton>Download</DownloadButton>



        </Download>
        <Details>
         <Pictitle>Information</Pictitle>
         <Table>
         <tr>
         <td><Head>User</Head><Info>{selectedImage.user}</Info></td>
         <td><Head>User ID</Head><Info>{selectedImage.user_id}</Info></td>
         <td><Head>Type</Head><Info>{selectedImage.type}</Info></td>
         </tr>
         <tr>
         <td><Head>Views</Head><Info>{selectedImage.views}</Info></td>
         <td><Head>Downloads</Head><Info>{selectedImage.downloads}</Info></td>
         <td><Head>Likes</Head><Info>{selectedImage.likes}</Info></td>
         </tr>

         </Table>


        </Details>
        </Rightside>
        </Main>

      </PopupContainer>
    </PopupOverlay>
  );
};

export default ImagePopup;
