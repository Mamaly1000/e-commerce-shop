"use client";
import React from "react";

const NoResults = ({
  title,
  description,
  show,
}: {
  show?: boolean;
  title?: string;
  description?: string;
}) => {
  return (
    !!show && (
      <section className="flex items-center justify-center h-full w-full  flex-col">
        <h4 className="text-lg capitalize text-neutral-700">{title}</h4>
        <h4 className="text-sm capitalize text-neutral-500">{description}</h4>
      </section>
    )
  );
};

export default NoResults;
