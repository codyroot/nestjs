import {
    BeforeApplicationShutdown,
    Controller,
    OnApplicationBootstrap,
    OnApplicationShutdown,
    OnModuleDestroy,
    OnModuleInit,
} from "@nestjs/common";

/**
 * The lifecycle hooks listed above are not triggered for request-scoped classes.
 * Für alle Shutdown Events --> app.close()
 * Shutdown hook listeners consume system resources, so they are disabled by default.
 *      To use shutdown hooks, you must enable listeners by calling enableShutdownHooks():
 */
@Controller("/life-cycle")
export class LifecycleController
    implements
        OnModuleInit,
        OnApplicationBootstrap,
        OnModuleDestroy,
        OnApplicationShutdown,
        BeforeApplicationShutdown
{
    onModuleDestroy() {
        console.log("onModuleDestroy");
    }
    onApplicationShutdown(signal?: string) {
        console.log("onApplicationShutdown");
    }
    beforeApplicationShutdown(signal?: string) {
        console.log("beforeApplicationShutdown");
    }
    onModuleInit() {
        console.log("onModuleInit");
    }
    onApplicationBootstrap() {
        console.log("onApplicationBootstrap");
    }
}
