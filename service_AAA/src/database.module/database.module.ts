import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

// @Module({
//     imports: [
//         MongooseModule.forRootAsync({
//             useFactory: () => {
//                 return {
//                     uri: "mongodb://mongo:password@mongo:27017/eclever?authSource=admin",
//                     dbName: "mongoConfig.dbName",
//                     useUnifiedTopology: true,
//                     useNewUrlParser: true,
//                 };
//             },
//             imports: [],
//             inject: [],
//         }),
//     ],
// })
export class DatabaseModule {
    // static register(options: ConfigOptions): DynamicModule {
    //     return {
    //         module: DatabaseModule,
    //         providers: [
    //             {
    //                 provide: CONFIG_OPTIONS_IDENTIFIER,
    //                 useValue: options,
    //             },
    //             ConfigService,
    //             LogService,
    //         ],
    //         exports: [ConfigService, LogService],
    //     };
    // }
}
