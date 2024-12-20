import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";

import TaskIdClient from "./task-id-client";
import { redirect } from "next/navigation";

interface TaskIdPageProps {
  params: Promise<{ taskId: string }>;
}

const TaskIdPage = async ({ params }: TaskIdPageProps) => {
  const { taskId } = await params;

  if (!taskId) redirect("/");

  return (
    <>
      <MaxWidthWrapper className="py-24 flex flex-col space-y-12">
        <Link href="/" className="w-fit h-fit">
          <ArrowLeftIcon className="size-6" />
        </Link>
        <TaskIdClient taskId={taskId} />
      </MaxWidthWrapper>
    </>
  );
};

export default TaskIdPage;
