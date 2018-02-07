import {Component, Inject} from "@nestjs/common";
import {RedisSession} from "../types/redis-session.type";

@Component()
export class SessionComponent {

    constructor() {}

    private async bulk($data: Array<RedisSession>) {
        // Get campaign event

    }
}
