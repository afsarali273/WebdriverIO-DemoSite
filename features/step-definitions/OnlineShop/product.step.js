import { Given, When, Then } from "@cucumber/cucumber";
import ProductPage from "../../pageobjects/Onlinehop/product.page";

Given(/^I add below products to cart$/, async (table) => {
  await ProductPage.selectCategory(table);
});

Then(/^I shall be able to Buy the product$/, async () => {
  console.log("Checkout Section ... TBA");
});
