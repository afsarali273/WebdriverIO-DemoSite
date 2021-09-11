class HomePage {
  //  Page Objects
  get btnSignIn() {
    return $(".login");
  }

  get btnSignOut() {
    return $(".logout");
  }

  get btnSignOut() {
    return $(".logout");
  }

  get txtSignedUserName() {
    return $(".header_user_info .account");
  }

  get link_Contact() {
    return $("#contact-link");
  }

  get img_Logo() {
    return $(".logo.img-responsive");
  }

  // Actions
  async navigateToLoginPage() {
    await this.btnSignIn.click();
    console.log("Sign In Button clicked");
  }
}

export default new HomePage();
