import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DealModuleBase } from "./base/deal.module.base";
import { DealService } from "./deal.service";
import { DealController } from "./deal.controller";

@Module({
  imports: [DealModuleBase, forwardRef(() => AuthModule)],
  controllers: [DealController],
  providers: [DealService],
  exports: [DealService],
})
export class DealModule {}
