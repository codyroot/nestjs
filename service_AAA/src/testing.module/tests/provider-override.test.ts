import { Test } from "@nestjs/testing";
import { TestinServiceA } from "../testing-a.service";
import { TestinServiceB } from "../testing-b.service";
import { TestingController } from "../testing.controller";

describe("Provider Override Controller", () => {
    const result = "test-aaa";
    let testController: TestingController;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [TestingController],
            providers: [TestinServiceA, TestinServiceB],
        })
            .overrideProvider(TestinServiceA)
            .useValue({
                aaa() {
                    return result;
                },
            })
            .overrideProvider(TestinServiceB)
            .useValue({
                bbb() {
                    return result;
                },
            })
            .compile();

        testController = moduleRef.get<TestingController>(TestingController);
    });

    describe("getAAA", () => {
        it("should aaa", async () => {
            expect(await testController.getAAA()).toBe(result);
        });
    });
});
