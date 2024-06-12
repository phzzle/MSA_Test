import { Tenant as TTenant } from "../api/tenant/Tenant";

export const TENANT_TITLE_FIELD = "name";

export const TenantTitle = (record: TTenant): string => {
  return record.name?.toString() || String(record.id);
};
