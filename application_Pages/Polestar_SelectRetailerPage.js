const { expect } = require('@playwright/test');
exports.Polestar_SelectRetailerPage=
class Polestar_SelectRetailerPage
{
    constructor(page){
        this.page=page;
        this.retailerSearchBox = page.locator("//*[@name='autocomplete-field']");
        this.searchRetailerheader = page.locator("//*[text()='Select retailer']");
        this.firstRetailerLocation = page.locator("//*[@role='listbox']/button[1]");
        this.retailerDropdown = page.locator("#retailer-dropdown");
        this.showAllRetailersButton = page.locator("#show-all-retailers");
        this.selectedRetailerDropdown = page.locator('#retailer-dropdown-label');
        this.preownedCarsButton = page.locator("//span[text()='Pre-owned']");
        this.newCarsButton = page.locator("//*[text()='New']");
        this.availableCarTitle = page.getByText('Available cars.');
        this.usedCarsTitle = page.getByText('Used cars.');
        this.backToSearchButton = page.getByText('Back to search');
        this.usedCarsList = page.locator("//*[@id='vehicle-list']/div");
        this.retailerDropdownSelected = page.locator("#retailer-dropdown-label");
        this.firstCarRightNavigateButton = page.locator("//*[@id='vehicle-list']/div[1]/div[1]/button[2]");
        this.preferredNearestLocation = page.locator("//*[@id='retailer-list']/div/div/div/div/div[1]/div[3]/div[1]/button");
    }

    async selectRetailerLocation()
    {
        await (this.searchRetailerheader).click();
        await expect(this.searchRetailerheader).toHaveText('Select retailer');
        await (this.retailerSearchBox).clear();
        await (this.retailerSearchBox).fill("123");
        await this.page.keyboard.press('Enter');
        await (this.preferredNearestLocation).click();
    }
}