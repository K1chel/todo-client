import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { TasksList } from "@/features/tasks/components/tasks-list";

export default function Home() {
  return (
    <MaxWidthWrapper className="flex flex-col gap-y-20">
      <Link
        href="/create"
        className="w-full bg-primary-dark flex items-center justify-center gap-x-2 -mt-6 rounded-md py-2.5 hover:bg-primary-dark/75 transition"
      >
        <span className="font-bold">Create Task</span>
        <PlusCircleIcon className="size-4" />
      </Link>
      <TasksList />
    </MaxWidthWrapper>
  );
}
