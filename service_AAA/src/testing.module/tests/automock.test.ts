import { Test } from "@nestjs/testing";
import { MockFunctionMetadata, ModuleMocker } from "jest-mock";
import { TestinServiceA } from "../testing-a.service";
import { TestingController } from "../testing.controller";

const moduleMocker = new ModuleMocker(global);

describe("Automock Controller", () => {
    const result = "test-aaa";
    let testController: TestingController;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [TestingController],
        })
            .useMocker((token) => {
                if (token === TestinServiceA) {
                    return { aaa: jest.fn().mockResolvedValue(result) };
                } else if (typeof token === "function") {
                    const mockMetadata = moduleMocker.getMetadata(
                        token,
                    ) as MockFunctionMetadata<any, any>;
                    const Mock =
                        moduleMocker.generateFromMetadata(mockMetadata);
                    return new Mock();
                }
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
