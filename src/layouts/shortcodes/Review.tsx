import React from "react";

const Review = ({
    reviewer,
    score,
}: {
    reviewer: string;
    score: string;
}) => {
  return (
    <>
      <p>Name: {reviewer}</p>
      <p>Score: {score}</p>
    </>
  );
};

export default Review;
