import * as graphql from "@nestjs/graphql";
import { TenantResolverBase } from "./base/tenant.resolver.base";
import { Tenant } from "./base/Tenant";
import { TenantService } from "./tenant.service";

@graphql.Resolver(() => Tenant)
export class TenantResolver extends TenantResolverBase {
  constructor(protected readonly service: TenantService) {
    super(service);
  }
}
