import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "creator";

export const PostTitle = (record: TPost): string => {
  return record.creator?.toString() || String(record.id);
};
