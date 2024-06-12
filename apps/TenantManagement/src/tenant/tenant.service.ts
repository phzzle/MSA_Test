import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TenantServiceBase } from "./base/tenant.service.base";

@Injectable()
export class TenantService extends TenantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
