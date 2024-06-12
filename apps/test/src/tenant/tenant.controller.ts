import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TenantService } from "./tenant.service";
import { TenantControllerBase } from "./base/tenant.controller.base";

@swagger.ApiTags("tenants")
@common.Controller("tenants")
export class TenantController extends TenantControllerBase {
  constructor(
    protected readonly service: TenantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
