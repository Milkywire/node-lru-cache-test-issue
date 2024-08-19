const fakeTimers = require("@sinonjs/fake-timers");
const clock = fakeTimers.install({ now: 1 });
clock.tick(1);

const { LRUCache } = require("lru-cache");
const cache = new LRUCache({
  max: 10,
  ttl: 10000,
});

test("cache should expire after 1 second", () => {
  cache.set("key", "test");
  clock.tick(5000);

  expect(cache.get("key")).toBe("test");
  clock.tick(10000);

  expect(cache.get("key")).toBe(undefined);
});
