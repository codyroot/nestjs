import { Test } from "@nestjs/testing";
import { TestinServiceA } from "../testing-a.service";
import { TestinServiceB } from "../testing-b.service";
import { TestingController } from "../testing.controller";

describe("CatsController", () => {
    let testController: TestingController;
    let servA: TestinServiceA;
    let servB: TestinServiceB;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [TestingController],
            providers: [TestinServiceA, TestinServiceB],
        }).compile();

        servA = moduleRef.get<TestinServiceA>(TestinServiceA);
        servB = moduleRef.get<TestinServiceB>(TestinServiceB);
        testController = moduleRef.get<TestingController>(TestingController);
    });

    describe("getAAA", () => {
        it("should aaa", async () => {
            const result = "test-aaa";

            jest.spyOn(servA, "aaa").mockImplementation(() => result);

            expect(await testController.getAAA()).toBe(result);
        });
    });
});
