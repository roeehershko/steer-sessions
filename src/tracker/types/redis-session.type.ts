export interface RedisSession {
    ip: string,
    country: string,
    city: string,
    campaign: number,
    goal: string,
    source: string,
    [k: string]: any
}
