import { describe, it, expect } from "vitest";
import { getAllDishes } from "../dishes";
import { dishPricingData } from "../dishPricing";

describe("Find missing pricing", () => {
  it("should list all dish IDs missing from dishPricingData", () => {
    const allDishIds = getAllDishes().map(d => d.id);
    const pricingKeys = new Set(Object.keys(dishPricingData));
    const missing = allDishIds.filter(id => !pricingKeys.has(id));
    
    console.log(`Total dishes: ${allDishIds.length}`);
    console.log(`Total pricing entries: ${pricingKeys.size}`);
    console.log(`Missing pricing: ${missing.length}`);
    console.log("Missing IDs:", JSON.stringify(missing));
    
    // This test will fail and show us the missing IDs
    expect(missing.length).toBe(0);
  });
});
