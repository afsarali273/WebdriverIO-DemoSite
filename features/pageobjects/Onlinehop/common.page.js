class commonPage {
  openHomePage() {
    browser.url("http://automationpractice.com/");
    console.log("Navigating to 'http://automationpractice.com/' website ");
  }

  vaerifyPageHeading = async (title) => {
    await browser.waitUntil(
      async () => (await $(".page-heading").getText()) === title,
      {
        timeout: 10000,
        timeoutMsg: "expected text to be different after 15s",
      }
    );
    const headingTitle = await $(".page-heading");
    expect(await headingTitle.getText()).toEqual(title);
  };
}
export default new commonPage();
