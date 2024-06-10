import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DealServiceBase } from "./base/deal.service.base";

@Injectable()
export class DealService extends DealServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
