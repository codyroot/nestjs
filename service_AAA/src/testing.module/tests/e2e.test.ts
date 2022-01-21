import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import * as request from "supertest";
import { TestinServiceA } from "../testing-a.service";
import { TestinServiceB } from "../testing-b.service";
import { TestingModule } from "../testing.module";

describe("E2e", () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [TestingModule],
        })
            .overrideProvider(TestinServiceA)
            .useValue({
                aaa: () => {
                    return "override-test-aaa";
                },
            })
            .overrideProvider(TestinServiceB)
            .useValue({
                bbb: () => {
                    return "override-test-bbb";
                },
            })
            .compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it(`/GET aaa`, async () => {
        const response = await request(app.getHttpServer()).get("/testing/aaa");

        expect(response.status).toBe(200);
        expect(response.text).toBe("override-test-aaa");
    });

    it(`/GET bbb`, async () => {
        const response = await request(app.getHttpServer()).get("/testing/bbb");

        expect(response.status).toBe(200);
        expect(response.text).toBe("override-test-bbb");
    });

    afterAll(async () => {
        await app.close();
    });
});
