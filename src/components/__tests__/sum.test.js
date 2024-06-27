import sum from "../sum";

test("sum of two numbers", () => {
  const result = sum(4, 5);

  expect(result).toEqual(9);
});
