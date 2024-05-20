import React from "react";

const Review = ({
    tagline,
    description,
    reviewer,
    score,
}: {
    tagline: string;
    description: string;
    reviewer: string;
    score: string;
}) => {
  return (
    <>
      <p>Tagline: "{tagline}"</p>
      <p>Description: {description}</p>
      <p>Reviewer: {reviewer}</p>
      <p>Score: {score}</p>
    </>
  );
};

export default Review;
