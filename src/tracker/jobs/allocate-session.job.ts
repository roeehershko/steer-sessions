import {Component, Inject} from "@nestjs/common";
import {RedisClient} from "redis";
import {RedisProvider} from "../providers/redis.provider";

@Component()
export class AllocateSessionJob {

    constructor() {
        const self = this;
        console.log('Get Rdy...');
        setInterval(function () {
            self.process();
        }, 5000)
    }

    private async process() {
        let redisClient: RedisClient = await RedisProvider.useFactory();
        redisClient.lrange('sessions', 0, -1, function (err, data) {
            redisClient.del('sessions');
        });
    }
}
