import React from 'react'
import styled from "styled-components"
import './Login.css'


const LogIn = () => {
 const handlerClick=()=>{
   const clientId= '46d4d4591bfe44068395df4336f38af8'
   const redirectUrl="http://localhost:3000/"
   const  apiUrl="https://accounts.spotify.com/authorize"
   const scope=['user-read-email','user-read-private',"user-read-playback-state",
   "user-modify-playback-state",
   "user-read-currently-playing",
   "user-read-playback-position",
   "user-top-read",
   "user-read-recently-played"] 
   window.location.href= `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialogue=true`; 
 } 

  return (
    <>
      <div className="container">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png " alt="Spotify" />
      <button onClick={handlerClick}>connect</button>
      </div>
    </>
  )
}




export default LogIn