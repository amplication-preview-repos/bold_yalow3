import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  text?: SortOrder;
  author?: SortOrder;
  blogPostId?: SortOrder;
  commentedAt?: SortOrder;
  commentText?: SortOrder;
  commentAuthor?: SortOrder;
  contentText?: SortOrder;
  commentator?: SortOrder;
  dateCommented?: SortOrder;
  relatedPost?: SortOrder;
};
