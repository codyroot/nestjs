import { SetMetadata } from "@nestjs/common";

export const TIMEOUT_KEY = "timeout";

export const Timeout = (timeInMs: number) => SetMetadata(TIMEOUT_KEY, timeInMs);
