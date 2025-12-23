import React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

const ProjectMessagesContainer = ({ projectId }: { projectId: string }) => {
  const trpc = useTRPC();
  const { data: messages } = useSuspenseQuery(
    trpc.messages.getMessages.queryOptions({ projectId })
  );
  return <div>{JSON.stringify(messages, null, 2)}</div>;
};

export default ProjectMessagesContainer;
