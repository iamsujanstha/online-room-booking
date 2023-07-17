import React, { FC } from "react";

interface HeadingProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

const Heading: FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className=" text-neutral-400">{subtitle}</div>
    </div>
  );
};

export default Heading;
