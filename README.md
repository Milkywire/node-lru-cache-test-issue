# node-lru-cache-test-issue

This repository is a test case for an issue with the `lru-cache` package.

If fake timers as setup after the first require/import of the `lru-cache` package, the package will not used the faked timers.

## Setup

```bash
npm install
npm test
```

## Test

In `working-time-fake.test.js` the fake timers are setup before the first require/import of the `lru-cache` package. The test will pass.
In `issue-time-fake.test.js` the fake timers are setup after the first require/import of the `lru-cache` package. The test will fail.
