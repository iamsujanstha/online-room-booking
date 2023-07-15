import React, { FC } from "react";

import Image from "next/image";

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <div className="rounded-full">
      <Image
        width={25}
        height={25}
        src="/avatar.png"
        alt="avatar"
        className="rounded-full"
      />
    </div>
  );
};

export default index;
