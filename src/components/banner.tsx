import Image from "next/image";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export const Banner = () => {
  return (
    <div className="bg-black h-[200px]">
      <MaxWidthWrapper className="w-full h-full flex items-center justify-center gap-x-3">
        <Image src="/rocket.png" alt="Rocket" width={22} height={36} />
        <h1 className="font-extrabold text-4xl flex items-center gap-x-1">
          <span className="text-primary">Todo</span>
          <span className="text-purple">App</span>
        </h1>
      </MaxWidthWrapper>
    </div>
  );
};
