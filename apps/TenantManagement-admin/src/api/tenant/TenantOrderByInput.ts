import { SortOrder } from "../../util/SortOrder";

export type TenantOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
