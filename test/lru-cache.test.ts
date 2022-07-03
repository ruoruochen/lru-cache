import LRUCache from "../src/utils/lru-cache";

test("LRU 最近最少使用算法 测试简单的set get", () => {
  const LruIns = new LRUCache(3);
  // 初始化
  LruIns.set("name", "ruoruochen");
  // 预期
  expect(LruIns.get("name")).toBe("ruoruochen");
});

test("LRU 最近最少使用算法 测试最久被删除", () => {
  const LruIns = new LRUCache(3);
  // 初始化
  LruIns.set("name", "ruoruochen");
  LruIns.set("age", 18);
  LruIns.set("sex", "女");
  // 覆盖
  LruIns.set("address", "Peking");
  // 预期
  expect(LruIns.get("name")).toBe(null);
});
