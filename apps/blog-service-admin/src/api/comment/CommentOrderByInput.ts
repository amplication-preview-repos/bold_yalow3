import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  author?: SortOrder;
  blogPostId?: SortOrder;
  commentAuthor?: SortOrder;
  commentText?: SortOrder;
  commentator?: SortOrder;
  commentedAt?: SortOrder;
  contentText?: SortOrder;
  createdAt?: SortOrder;
  dateCommented?: SortOrder;
  id?: SortOrder;
  relatedPost?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
