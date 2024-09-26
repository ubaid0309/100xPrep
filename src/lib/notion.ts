"use server";
import { NotionAPI } from "notion-client";
import { cache } from "react";

const notion = new NotionAPI();

export const getRecordMap = cache(async function getRecordMap(
  notionDocId: string
) {
  const recordMap = await notion.getPage(notionDocId);
  return recordMap;
});
