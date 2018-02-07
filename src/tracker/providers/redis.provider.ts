import {RedisClient} from "redis";

export const RedisProvider = {
    provide: 'RedisToken',
    useFactory: async function():Promise<any>{
        return new Promise((resolve, reject) => {
            let redisClient: RedisClient = new RedisClient({
                host: 'localhost'
            });

            redisClient.on('ready', function () {
                resolve(redisClient);
            });
        });
    }

};
