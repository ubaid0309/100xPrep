// core styles shared by all of react-notion-x (required)

import React from "react";
import { NotionRenderer } from "@/components/NotionRenderer";
import { getRecordMap } from "@/lib/notion";

const Notes = async () => {
  const reocrdMap = await getRecordMap("b298d5d4f3384a3f8a6019bcd9378fea");

  return <NotionRenderer recordMap={reocrdMap} />;
};

export default Notes;
