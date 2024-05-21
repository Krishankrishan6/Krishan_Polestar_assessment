const { expect } = require('@playwright/test');
exports.Polestar_AvaiableCarsPage=
class Polestar_AvaiableCarsPage
{
    constructor(page){
        this.page=page;
        this.acceptAll = page.locator("//*[text()='Accept all']");
        this.preownedCarsButton = page.locator("//span[text()='Pre-owned']");
        this.newCarsButton = page.locator("//*[text()='New']");
        this.availableCarTitle = page.getByText('Available cars.');
        this.firstNewCar = page.locator("//*[@id='vehicle-list']/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]");
        this.usedCarsTitle = page.getByText('Used cars.');
        this.reviewOrderTitle = page.locator("//*[@id='root']/div[1]/div[5]/div/section[1]/div/div[2]/div[1]/h1/span[1]/span");
        this.deliveryDateValue = page.locator('#topsection-smalldevice-below-deliverymethod-heading');
        this.carVersion = page.locator("#topsection-smalldevice-top-version-value");
        this.SaveContinueButton = page.locator('#delivery-order-cta');
        this.specDownloadButton = page.getByRole('button', { name: 'Download', exact: true });
        this.usedCarsList = page.locator("//*[@id='vehicle-list']/div");
        this.retailerDropdownSelected = page.locator("#retailer-dropdown-label");
        this.firstCarRightNavigateButton = page.locator("//*[@id='vehicle-list']/div[1]/div[1]/button[2]");
        this.emailField = page.locator("//*[@name='email']");
        this.reenterEmailField = page.locator("//*[@name='reenterEmail']");
        this.firstNameField = page.locator("//*[@name='firstName']");
        this.lastNameField = page.locator("//*[@name='lastName']");
        this.phoneNumberField = page.locator("//*[@name='phoneNumber']");
        this.addressField = page.locator("//*[@name='address']");
        this.firstAddressOption = page.locator("//*[@data-type='attached-popover-content']/div/button[1]");
        this.mainMenuButton = page.locator("//*[@title='menu']");
        this.acceptEmailCheckbox = page.locator("//*[@name='Bundled Marketing Purposes']");
        this.saveOrderButton = page.locator("//*[text()='Save order and continue']");
    }

    async gotoAvailableCarsPage()
    {
        await this.page.goto("https://www.polestar.com/us/preconfigured-cars/polestar-2");
        await (this.acceptAll).click();
    }

    async verifyNewCarsList()
    {
        await expect(this.newCarsButton).not.toBeEditable();
        await expect(this.availableCarTitle).toHaveText('Available cars.');
    }


    async chooseOneCar()
    {
        await (this.firstNewCar).click();
    }

    async reviewCarDetails()
    {
        await expect(this.deliveryDateValue).toContainText('Immediate');
        await (this.specDownloadButton).click();
        await (this.SaveContinueButton).click();
        await expect(this.SaveContinueButton).toBeVisible();
    }

    async orderReview(Url, Email, ReEmail, Firstname, Lastname, Phonenumber, Address)
    {
        await expect(this.page).toHaveURL(Url);
        await expect(this.reviewOrderTitle).toContainText('Review');
        await (this.reviewOrderTitle).click();
        await (this.emailField).fill(Email);
        await (this.reenterEmailField).fill(ReEmail);
        await (this.firstNameField).fill(Firstname);
        await (this.lastNameField).fill(Lastname);
        await (this.phoneNumberField).clear();
        await (this.phoneNumberField).fill(Phonenumber);
        await (this.addressField).fill(Address);
        await (this.firstAddressOption).click();
        await (this.acceptEmailCheckbox).check();
        await (this.saveOrderButton).click();
    }
}