module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    maxWorkers: "70%",
    globalSetup: "./jest.setup.js",
    globalTeardown: "./jest.teardown.js",
    snapshotSerializers: ["@tact-lang/ton-jest/serializers"],
};
