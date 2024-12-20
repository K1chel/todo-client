import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { TaskForm } from "@/features/tasks/components/task-form";

const CreatePage = () => {
  return (
    <>
      <MaxWidthWrapper className="py-24 flex flex-col space-y-12">
        <Link href="/" className="w-fit h-fit">
          <ArrowLeftIcon className="size-6" />
        </Link>
        <TaskForm />
      </MaxWidthWrapper>
    </>
  );
};

export default CreatePage;
