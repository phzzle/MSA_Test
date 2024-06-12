import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TenantService } from "./tenant.service";
import { TenantControllerBase } from "./base/tenant.controller.base";

@swagger.ApiTags("tenants")
@common.Controller("tenants")
export class TenantController extends TenantControllerBase {
  constructor(protected readonly service: TenantService) {
    super(service);
  }
}
