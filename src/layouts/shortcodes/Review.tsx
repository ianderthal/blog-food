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
      <figure>
        <p>Score: {score}</p>
      </figure>
      <p>Tagline: "{tagline}"</p>
      <p>Description: {description}</p>
      <figcaption>
        <p>Reviewer: {reviewer}</p>
      </figcaption>
    </>
  );
};

export default Review;
