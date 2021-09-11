class ProductPage {
  //   constructor(data) {
  //     this.data = data;
  //   }

  get btnCategoryMenu() {
    const xpath =
      "//div[@id='block_top_menu']/ul/li/a[contains(text(),'Women')]";
    return $("//div[@id='block_top_menu']/ul/li/a[contains(text(),'Women')]");
  }

  get btnSubCategory() {
    return $(
      "//*[@id='block_top_menu']/ul/li/a[contains(text(),'Women')]/parent::*/descendant::*[contains(text(),'Dresses')]"
    );
  }

  // Actions
  selectCategory = async (table) => {
    await table.hashes().forEach(async (element) => {
      console.log(await element.category);
      console.log(await element.subCategory);
      console.log(await element.name);
      console.log(await element.model);
      console.log(await element.quantity);

      console.log("==================  Actions ============");

      await this.btnCategoryMenu.click();
      await this.btnSubCategory.waitForExist({ timeout: 15000 });
      await this.btnSubCategory.click();
    });
  };
}

export default new ProductPage();
