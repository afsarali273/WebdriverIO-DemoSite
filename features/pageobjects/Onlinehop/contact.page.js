import { dynamicData, staticData } from '../../utils/Utils'
class Contact {
  get drpdownSubjectHeading() {
    return $("#id_contact");
  }

  get inputEmailAddress() {
    return $("#email");
  }

  get dropdownOrderReference() {
    return $(".selector span+select[name='id_order']");
  }

  get btnSubmit() {
    return $("#submitMessage");
  }

  get inputMessage() {
    return $("#message");
  }

  sendMessageToCustomerCare = async () => {
    await this.drpdownSubjectHeading.selectByVisibleText("Customer service");

    await expect(await this.inputEmailAddress.getValue()).toEqual(
      dynamicData.email
    );

    await this.dropdownOrderReference.selectByIndex(1);

    await this.inputMessage.setValue(
      "Hi There,\n" +
      "I got some issue with my product which i bought yesterday.Can you please help me with refund the amount!\n" +
      "Thanks"
    );

    await this.btnSubmit.click();
  };
}

export default new Contact();
