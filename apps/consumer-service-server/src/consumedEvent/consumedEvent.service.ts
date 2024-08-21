import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConsumedEventServiceBase } from "./base/consumedEvent.service.base";

@Injectable()
export class ConsumedEventService extends ConsumedEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
