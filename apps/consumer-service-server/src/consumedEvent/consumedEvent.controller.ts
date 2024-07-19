import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConsumedEventService } from "./consumedEvent.service";
import { ConsumedEventControllerBase } from "./base/consumedEvent.controller.base";

@swagger.ApiTags("consumedEvents")
@common.Controller("consumedEvents")
export class ConsumedEventController extends ConsumedEventControllerBase {
  constructor(protected readonly service: ConsumedEventService) {
    super(service);
  }
}
