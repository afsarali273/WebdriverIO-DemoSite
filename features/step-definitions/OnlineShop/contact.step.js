import { Given, When, Then } from "@cucumber/cucumber";
import contactPage from "../../pageobjects/Onlinehop/contact.page";
import commonsPage from "../../pageobjects/Onlinehop/common.page";

Given(/^I send refund request to customer care for prev. order$/, async () => {
  await commonsPage.vaerifyPageHeading("CUSTOMER SERVICE - CONTACT US");
  await contactPage.sendMessageToCustomerCare();
});
