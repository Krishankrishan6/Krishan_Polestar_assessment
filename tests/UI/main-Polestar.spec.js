const { test, expect } = require('@playwright/test');
import {Polestar_mainpage} from '../../application_Pages/Polestar_mainpage';
import {Polestar_Region_Mainpage} from '../../application_Pages/Polestar_Region_Mainpage';
import {Polestar_SelectRetailerPage} from '../../application_Pages/Polestar_SelectRetailerPage';
import {Polestar_AvaiableCarsPage} from '../../application_Pages/Polestar_AvaiableCarsPage';
import {Polestar_YourOrderPage} from '../../application_Pages/Polestar_YourOrderPage';


test('Polestar main region page validation', async ({ page }) => {
    const mainpage = new Polestar_mainpage(page);
    //Page object model
    await mainpage.gotoMainPage();
    await mainpage.verifyRegions();
})

test('To verify region selection is as per user desire', async ({ page }) => {
    const mainpage = new Polestar_mainpage(page);
    const regionMainPage = new Polestar_Region_Mainpage(page);
    //Page object model
    test.setTimeout(150_000);
    await mainpage.gotoMainPage();
    await page.waitForURL();
    await mainpage.clickUSSubRegion();
    await regionMainPage.validateSupportWindow();
    await regionMainPage.clickAvailableCarsButton();
    await page.waitForURL("https://www.polestar.com/us/preconfigured-cars/polestar-2/");
})

test('To verify choosen car by user is reserved', async ({ page }) => {
    const availableCarsPage = new Polestar_AvaiableCarsPage(page);
    const selectRetailerPage = new Polestar_SelectRetailerPage(page);
    const yourOrderPage = new Polestar_YourOrderPage(page);
    test.setTimeout(150_000);
    //Page object model
    await availableCarsPage.gotoAvailableCarsPage();
    await selectRetailerPage.selectRetailerLocation();
    await availableCarsPage.verifyNewCarsList();
    await availableCarsPage.chooseOneCar();
    await page.waitForURL();
    await availableCarsPage.reviewCarDetails();
    await page.waitForTimeout(15000);
    const reviewOrderUrl = page.url();
    await availableCarsPage.orderReview(reviewOrderUrl,'krishan@yahoo.com','krishan@yahoo.com','Krishan','Jaganmohan',
    '+19090909090', '123 William Street, New York, NY, USA');
    await page.waitForTimeout(5000);
    await yourOrderPage.verifyCarReservation();
})