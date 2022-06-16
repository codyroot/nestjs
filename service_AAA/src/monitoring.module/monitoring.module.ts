import { Module } from "@nestjs/common";
import { PrometheusModule } from "@willsoto/nestjs-prometheus";
import { collectDefaultMetrics, Gauge, Histogram, Registry } from "prom-client";

const d = new Registry();

collectDefaultMetrics({
    register: d,
    // labels: "node-application-monitoring-app",
    prefix: "node_",
    // timeout: 10000,
    gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
});

const gauge = new Gauge({
    name: "metric_name_111",
    help: "metric_help_111",
    labelNames: ["asd"],
    collect() {
        // Invoked when the registry collects its metrics' values.
        // This can be synchronous or it can return a promise/be an async function.
        this.set({ asd: "yope" }, 1110);
    },
});

const httpRequestDurationMicroseconds = new Histogram({
    name: "http_request_duration_ms",
    help: "Duration of HTTP requests in ms",
    labelNames: ["route"],
    // buckets for response time from 0.1ms to 500ms
    buckets: [0.1, 5, 15, 50, 100, 200, 300, 400, 500],
    collect() {
        // Invoked when the registry collects its metrics' values.
        // This can be synchronous or it can return a promise/be an async function.
        // this.observe({ asd: "yope" }, 1110);
    },
});

const histogram = new Histogram({
    name: "metric_name_hist",
    help: "metric_help_hist",
    buckets: [0.1, 5, 15, 50, 100, 500],
    labelNames: ["method"],
});
histogram.observe(10000);
histogram.zero({ method: "POST" });

@Module({
    imports: [
        // PrometheusModule.register({}),
        PrometheusModule.register({
            path: "/metrics",
            defaultMetrics: {
                enabled: false,
                config: {
                    prefix: "blubb__",
                    // labels: ["asd"],
                },
            },
        }),
    ],
})
export class MonitoringModule {}
