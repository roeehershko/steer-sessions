import { Module } from '@nestjs/common';
import {AllocateSessionJob} from "./jobs/allocate-session.job";

@Module({
  imports: [],
  controllers: [],
  components: [AllocateSessionJob],
})
export class TrackerModule {}
