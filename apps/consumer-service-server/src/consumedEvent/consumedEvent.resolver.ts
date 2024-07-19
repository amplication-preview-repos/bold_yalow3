import * as graphql from "@nestjs/graphql";
import { ConsumedEventResolverBase } from "./base/consumedEvent.resolver.base";
import { ConsumedEvent } from "./base/ConsumedEvent";
import { ConsumedEventService } from "./consumedEvent.service";

@graphql.Resolver(() => ConsumedEvent)
export class ConsumedEventResolver extends ConsumedEventResolverBase {
  constructor(protected readonly service: ConsumedEventService) {
    super(service);
  }
}
