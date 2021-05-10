import React from "react"

export default function GoogleMapEmbed({ placeName, style }) {
  return (
    <iframe
      loading="lazy"
      allowFullScreen
      style={style}
      title={placeName}
      src={`https://www.google.com/maps/embed/v1/place?q=${placeName}&key=AIzaSyBXMP0gGJi18AbqJSDvfU6Bxi3vAbrPqgw`}
    ></iframe>
  )
}
