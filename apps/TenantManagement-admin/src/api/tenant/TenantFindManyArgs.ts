import { TenantWhereInput } from "./TenantWhereInput";
import { TenantOrderByInput } from "./TenantOrderByInput";

export type TenantFindManyArgs = {
  where?: TenantWhereInput;
  orderBy?: Array<TenantOrderByInput>;
  skip?: number;
  take?: number;
};
