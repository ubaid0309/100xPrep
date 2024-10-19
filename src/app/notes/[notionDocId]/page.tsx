// core styles shared by all of react-notion-x (required)

import React from "react";
import { NotionRenderer } from "@/components/NotionRenderer";
import { getRecordMap } from "@/lib/notion";

const Notes = async ({ params }: { params: { notionDocId: string } }) => {
  const { notionDocId } = params;
  const reocrdMap = await getRecordMap(notionDocId);

  return <NotionRenderer recordMap={reocrdMap} />;
};

export default Notes;
