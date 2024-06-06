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
    <section className="m-auto flex items-center gap-4 rounded bg-slate-50 p-4 shadow-xl shadow-slate-500">
      <div className="flex flex-row">
        <div className="flex flex-col gap-0">
          <figure className="h-12 w-12 items-center justify-center rounded-full bg-green-300">
            <figcaption>{score}</figcaption>
          </figure>
        </div>
        <div className="flex flex-col gap-0">
          <div className="text-2xl font-extrabold">"{tagline}"</div>
          <p className="mt-2 mb-2">{description}</p>
          <figcaption>
            <div className="font-black uppercase">{reviewer}</div>
            <div className="text-sm font-medium">Long live the king</div>
          </figcaption>
        </div>
      </div>
    </section>
    </>
  );
};

export default Review;
