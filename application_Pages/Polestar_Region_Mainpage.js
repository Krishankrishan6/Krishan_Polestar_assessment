const { expect } = require('@playwright/test');
exports.Polestar_Region_Mainpage=
class Polestar_Region_Mainpage
{
    constructor(page){
        this.page=page;
        this.supportButton = page.locator("//*[@id='support-dialog-button']");
        this.supportWindowHeader = page.locator("//*[text()='Talk to a local specialist']");
        this.chatButton = page.locator("//*[text()='Chat']");
        this.chatOffline = page.locator("//*[text()='Offline']");
        this.supportManagerCookiesButton = page.locator("//*[text()='Manage cookies']");
        this.supportWindowCloseButton = page.locator("//*[@id='gatsby-focus-wrapper']/div[2]/div[2]/div/div[2]/div/div[1]/button[2]");
        this.availableCarsButton = page.locator("//*[text()='Available cars']");
    }

    async validateSupportWindow()
    {
        await this.page.waitForTimeout(2000);
        await (this.supportButton).click();
        await expect(this.supportWindowHeader).toHaveText('Talk to a local specialist');
        await expect(this.chatButton).toBeVisible();
        if(await expect(this.chatOffline).toBeVisible)
        {
            console.log("Support available between Monday - Friday 08.00 AM - 08.00 PM with Saturday, Sunday Closed");
        }
        else
        {
            await (this.chatButton).click();
            await expect(this.supportManagerCookiesButton).toContainText('Manage cookies');
        }
        await (this.supportWindowCloseButton).click();
    }

    async clickAvailableCarsButton()
    {
        await (this.availableCarsButton).click();
        await expect(this.availableCarsButton).not.toBeVisible();
    }
}