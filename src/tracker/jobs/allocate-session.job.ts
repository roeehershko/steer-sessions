import {Component} from "@nestjs/common";
import {RedisClient} from "redis";
import {RedisProvider} from "../providers/redis.provider";

@Component()
export class AllocateSessionJob {

    constructor() {
        const self = this;
        setInterval(function () {
            self.process();
        }, 5000)
    }

    private async process() {
        let redisClient: RedisClient = await RedisProvider.useFactory();
        redisClient.lrange('sessions', 0, 1000, function (err, data) {
            // Process
            redisClient.ltrim('sessions', 1000, -1);
        });
    }
}
