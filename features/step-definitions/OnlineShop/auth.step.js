import { Given, When, Then } from "@cucumber/cucumber";
import HomePage from "../../pageobjects/Onlinehop/home.page";
import authPage from "../../pageobjects/Onlinehop/auth.page";
import faker from "faker";

When(/^Navigate to SignUp page$/, async () => {
  await expect(HomePage.btnSignIn).toBeExisting();
  await expect(HomePage.img_Logo).toBeExisting();
  await expect(HomePage.link_Contact).toBeExisting();

  await HomePage.navigateToLoginPage();
});

Then(/^create an account with random username$/, async () => {
  console.log("account creation ");

  const randomStr = Math.random().toString(36).substr(2, 5);
  const email = `myemail_${randomStr}@gmail.com`;
  const addressObj = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    address1: faker.address.streetAddress(),
    address2: faker.random.alphaNumeric(5),
  };

  global.SharedVariable.email = email;
  global.SharedVariable.address = addressObj;

  await authPage.createAccount(email, addressObj);
  await authPage.signOut();
});

Given(/^I am on the Sign In Page$/, async () => {
  if (await HomePage.btnSignOut.isExisting()) {
    await authPage.signOut();
  }

  await expect(HomePage.btnSignIn).toBeExisting();
  await expect(HomePage.img_Logo).toBeExisting();
  await expect(HomePage.link_Contact).toBeExisting();

  await HomePage.navigateToLoginPage();
});

Given(/^Login using newly created credentials$/, async () => {
  await authPage.signIn();
});
