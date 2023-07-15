import React, { FC } from "react";

import Image from "next/image";

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <div>
      <Image src="/logo.png" width={80} height={80} alt="Room tour" />
    </div>
  );
};

export default index;
