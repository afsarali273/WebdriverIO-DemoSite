import { Given, When, Then } from "@cucumber/cucumber";
import commonPage from "../../pageobjects/Onlinehop/common.page";
import HomePage from "../../pageobjects/Onlinehop/home.page";

Given(/^I am on the (.*) page$/, async (page) => {
  if (page === "home") {
    await commonPage.openHomePage();
    await expect(HomePage.btnSignIn).toBePresent();
    await expect(HomePage.img_Logo).toBePresent();
    await expect(HomePage.link_Contact).toBePresent();
    console.log("Home Page Validated");
  } else if (page === "myaccount") {
    await expect(HomePage.btnSignOut).toBePresent();
    await expect(HomePage.txtSignedUserName.getText()).toEqual(
      global.SharedVariable.address.firstName +
        " " +
        global.SharedVariable.address.lastName
    );
  } else if (page === "contact") {
    await expect(HomePage.link_Contact).toBePresent();
    await HomePage.link_Contact.click();
    await commonPage.vaerifyPageHeading("CUSTOMER SERVICE - CONTACT US");
  }
});
