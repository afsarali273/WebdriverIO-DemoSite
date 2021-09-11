import { Given, When, Then } from "@cucumber/cucumber";
import ProductPage from "../../pageobjects/Onlinehop/product.page";

Given(/^I add below products to cart$/, async (table) => {
  await ProductPage.selectCategory(table);
});

Then(/^I shall validate shopping cart as below$/, async (table) => {
  await ProductPage.verifyShoppingCart(table);
});

Then(/^I shall be able to Buy the product$/, async () => {
  await ProductPage.buyProduct();
});

Then(/^I shall be able to Buy using (.*) payment$/, async (paymentType) => {
  console.log("TBA....");
});
