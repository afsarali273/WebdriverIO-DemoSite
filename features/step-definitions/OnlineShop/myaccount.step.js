import { Given, When, Then } from "@cucumber/cucumber";
import myaccount from "../../pageobjects/Onlinehop/myaccountdeatils.page";
import commonsPage from "../../pageobjects/Onlinehop/common.page";

Given(
  /^I shall verify the address information in my addresses section$/,
  async () => {
    await commonsPage.vaerifyPageHeading("MY ACCOUNT");
    await myaccount.navigateToAddress();
  }
);
