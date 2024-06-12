import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TenantWhereInput = {
  address?: StringNullableFilter;
  email?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
