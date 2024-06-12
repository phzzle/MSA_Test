import { Module } from "@nestjs/common";
import { TenantModuleBase } from "./base/tenant.module.base";
import { TenantService } from "./tenant.service";
import { TenantController } from "./tenant.controller";
import { TenantResolver } from "./tenant.resolver";

@Module({
  imports: [TenantModuleBase],
  controllers: [TenantController],
  providers: [TenantService, TenantResolver],
  exports: [TenantService],
})
export class TenantModule {}
