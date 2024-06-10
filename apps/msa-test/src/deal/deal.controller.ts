import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DealService } from "./deal.service";
import { DealControllerBase } from "./base/deal.controller.base";

@swagger.ApiTags("deals")
@common.Controller("deals")
export class DealController extends DealControllerBase {
  constructor(
    protected readonly service: DealService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
