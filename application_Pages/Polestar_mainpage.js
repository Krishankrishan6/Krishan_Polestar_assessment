const { expect } = require('@playwright/test');
exports.Polestar_mainpage=
class Polestar_mainpage
{
    constructor(page){
        this.page=page;
        this.expect=expect;
        this.acceptAll = page.locator("//*[text()='Accept all']");
        this.selectRegionHeader = page.locator("//h1[text()='Select your region']");
        this.regionEurope = page.locator("//*[@id='gatsby-focus-wrapper']/div[1]/div/section[1]/div/div[2]/div[1]/h2");
        this.regionNorthAmerica = page.locator("//*[@id='gatsby-focus-wrapper']/div[1]/div/section[1]/div/div[2]/div[2]/h2");
        this.regionAsiaPacific = page.locator("//*[@id='gatsby-focus-wrapper']/div[1]/div/section[1]/div/div[2]/div[3]/h2");
        this.regionMiddleEast = page.locator("//*[@id='gatsby-focus-wrapper']/div[1]/div/section[1]/div/div[2]/div[4]/h2");
        this.regionGlobal = page.locator("//*[@id='gatsby-focus-wrapper']/div[1]/div/section[1]/div/div[2]/div[5]/h2");
        this.subRegionUS = page.locator("//*[@id='gatsby-focus-wrapper']/div[1]/div/section[1]/div/div[2]/div[2]/ul/li[3]/a/span");
    }

    async gotoMainPage()
    {
        await this.page.goto("https://www.polestar.com/");
        await (this.acceptAll).click();
        await expect(this.page).toHaveURL("https://www.polestar.com/");
    }

    async verifyRegions()
    {
        await expect(this.selectRegionHeader).toHaveText('Select your region');
        await expect(this.regionEurope).toHaveText('Europe');
        await expect(this.regionNorthAmerica).toHaveText('North America');
        await expect(this.regionAsiaPacific).toHaveText('Asia-Pacific');
        await expect(this.regionMiddleEast).toHaveText('Middle-East');
        await expect(this.regionGlobal).toHaveText('Global');
    }

    async clickUSSubRegion()
    {
        await (this.subRegionUS).click();
        await expect(this.page).toHaveURL("https://www.polestar.com/us/");
    }
}