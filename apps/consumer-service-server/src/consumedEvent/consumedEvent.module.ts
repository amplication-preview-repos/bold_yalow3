import { Module } from "@nestjs/common";
import { ConsumedEventModuleBase } from "./base/consumedEvent.module.base";
import { ConsumedEventService } from "./consumedEvent.service";
import { ConsumedEventController } from "./consumedEvent.controller";
import { ConsumedEventResolver } from "./consumedEvent.resolver";

@Module({
  imports: [ConsumedEventModuleBase],
  controllers: [ConsumedEventController],
  providers: [ConsumedEventService, ConsumedEventResolver],
  exports: [ConsumedEventService],
})
export class ConsumedEventModule {}
