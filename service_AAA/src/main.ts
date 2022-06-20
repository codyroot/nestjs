import { VersioningType, VERSION_NEUTRAL } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as promMid from "express-prometheus-middleware";
import * as swStats from "swagger-stats";

(async () => {
    const app = await NestFactory.create(AppModule);

    // URL Versionierung
    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: VERSION_NEUTRAL,
    });

    // Prometheus Monitoring
    app.use(
        promMid({
            // prefix: "nestjs_app_",
            // metricsPath: "/metrics",
            // collectDefaultMetrics: false,
            // requestDurationBuckets: [100, 21100],
            // requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
            // responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
        }),
    );

    app.use(swStats.getMiddleware({}));

    // Header Versionierung
    // app.enableVersioning({
    //     type: VersioningType.HEADER,
    //     header: "Custom-Header",
    //     defaultVersion: VERSION_NEUTRAL
    // });

    // Media Type Versionierung
    // app.enableVersioning({
    //     type: VersioningType.MEDIA_TYPE,
    //     key: "v=",
    //     defaultVersion: VERSION_NEUTRAL
    // });

    await app.listen(5000);
})();
