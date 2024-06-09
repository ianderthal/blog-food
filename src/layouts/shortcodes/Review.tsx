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
    <section className="m-auto mb-8 flex items-center gap-4 rounded bg-slate-50 p-6 shadow-lg shadow-slate-500">
      <div className="flex flex-col md:flex-row md:gap-x-6">
        <div className="flex flex-col flex-none gap-0 basis-1/5 justify-start items-center">
          <figure className="h-20 w-20 flex items-center justify-center rounded-full bg-emerald-500">
            <figcaption className="text-white mt-0 text-3xl">{score}</figcaption>
          </figure>
        </div>
        <div className="flex flex-col gap-0">
          <div className="text-2xl font-extrabold italic">"{tagline}"</div>
          <p className="mt-2 mb-2 leading-5">{description}</p>
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
