import React from "react";

const Avatar = ({ name, SpaceColoCode, height, width }) => {
  // Extract the first letter from the name
  const firstLetter = name.charAt(0).toUpperCase();
  // console.log(SpaceColoCode, "ColorCode............");

// Generate a random background color for the avata
//   const getRandomColor = () => {
//     const colors = { SpaceColoCode };
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     return colors[randomIndex];
//   };
console.log(name,SpaceColoCode,'SpaceColoCode Name ')

  // Style object for the avatar
  const avatarStyle = {
    backgroundColor: `${SpaceColoCode}`,
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20%",
    width: `${width}`,
    height: `${height}`,
    fontSize: "36px",
    fontWeight: "bold",
  };

  return <div style={avatarStyle}>{firstLetter}</div>;
};

export default Avatar;
