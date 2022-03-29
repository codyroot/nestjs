import { VersioningType, VERSION_NEUTRAL } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

(async () => {
    const app = await NestFactory.create(AppModule);

    // URL Versionierung
    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: VERSION_NEUTRAL,
    });

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
