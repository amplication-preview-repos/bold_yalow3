import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: InputJsonValue;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
