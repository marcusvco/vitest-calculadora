import { expect, test } from "vitest"
import { subtract, sum } from "./main"

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3)
})

test("subtracts 5 - 2 to equal 3", () => {
  expect(subtract(5, 2)).toBe(3)
})
