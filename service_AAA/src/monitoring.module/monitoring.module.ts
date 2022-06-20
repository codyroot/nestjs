import { Module } from "@nestjs/common";
import { PrometheusModule } from "@willsoto/nestjs-prometheus";
import { Gauge, Histogram } from "prom-client";
import { MonitoringController } from "./monitoring.controller";

const gauge = new Gauge({
    name: "blubb_metric_name_111",
    help: "blubb_metric_help_111",
    labelNames: ["asd"],
    collect() {
        // Invoked when the registry collects its metrics' values.
        // This can be synchronous or it can return a promise/be an async function.
        this.set({ asd: "yope" }, 1110);
    },
});

const httpRequestTimer = new Histogram({
    name: "blubb_http_request_duration_seconds",
    help: "Duration of HTTP requests in seconds",
    labelNames: ["method", "route", "code"],
    buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10], // 0.1 to 10 seconds
});

@Module({
    imports: [
        // PrometheusModule.register({
        //     path: "/metrics",
        //     defaultMetrics: {
        //         enabled: true,
        //         config: {
        //             prefix: "blubb__",
        //             // labels: ["asd"],
        //         },
        //     },
        // }),
    ],
    controllers: [MonitoringController],
})
export class MonitoringModule {}
