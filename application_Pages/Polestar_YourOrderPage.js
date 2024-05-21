const { expect } = require('@playwright/test');
exports.Polestar_YourOrderPage=
class Polestar_YourOrderPage
{
    constructor(page){
        this.page=page;
        this.reservedCarDialogbox = page.locator("//*[@role='dialog']");
        this.reservedCarDialogBoxHeader = page.locator("//*[@role='dialog']/div/div/h1");
        this.ResevredCarDialogBoxMessage = page.locator("//*[@role='dialog']/div/div/div[1]/div");
        this.reservedCarDialogBoxOkButton = page.locator("//*[@role='dialog']/div/div/div[2]/div/button");
        this.yourOrderSupportButton = page.getByText('Support');
    }

    async verifyCarReservation()
    {
        await this.page.waitForTimeout(5000);
        await expect(this.reservedCarDialogbox).toBeVisible();
    }
}