# Krishan_Polestar_assessment
Framework design:
I have created the playwright framework with javascript using with page object model. This establishes an object repository to hold every web element. It enhances test case management and lessens code duplication.

Every web page in an application should be viewed as a class file in the Page Object Model. There will only be appropriate web page elements in each class file. Testers can carry out tasks on the website they are testing with the help of these components. POM helps in code reusability and easy maintenance. 

The main objective of using POM is to automate an application even with continuous webelement location changes. When we define a web element location in one place, the change that we have to do in the code will be minimal.

Folder structure:
Please find the framework design in the below link.
Link: https://github.com/Krishankrishan6/Krishan_Polestar_assessment/assets/169908261/1427e546-a0c7-49f5-a921-be5f06d35212

<img width="548" alt="image" src="https://github.com/Krishankrishan6/Krishan_Polestar_assessment/assets/169908261/1427e546-a0c7-49f5-a921-be5f06d35212">

Folder explaination:
tests - Folder contains testcase of both UI and API automation scripts under UI and API subfolders respectiviely. Each test case file is stored with an extension .spec.js .

application_Pages: Folder has page object files that contains objects of each web page and it's functional flow. These files will all include UI components or objects. It will also include the actions that need to be taken with these components.

Note: For the assessment I have hard code the data. If required I will be able to setup data driven framework which will get the data from a .csv file.

Naming convention:
I have followed camel case naming convention throughout the test scripting.
Example:
await availableCarsPage.gotoAvailableCarsPage();

Playwright installation:
Before installing playwright, there are two requirements. Nodejs and visual studio code should be installed.
While installing node.js respective npm package should be installed. Follow the below steps for installation of playwright.
1.	Install node.js with
node -v
2.	Check if npm is installed along with node.js with command
npm -v
3.	Install latest version of visual studio code
4.	To install playwright create folder in your local where you are will to store the playwright related files. Enter the below command in visual studio terminal
npm init playwright @latest
When the operation is running, some basic settings will be asked. One of the question will be about the programming language. Choose the desired programming language.
After installation is completed, verify playwright with below command
npm playwright -v

Syntax of test cases in playwright:
const { test, expect } = require('@playwright/test');
test('Polestar main region page validation', async ({ page }) => {
    const mainpage = new Polestar_mainpage(page);
    await mainpage.gotoMainPage();
    await mainpage.verifyRegions();
})

Syntax parameters explanation:
Page – Page is called as a fixture. It contains so many methods that are related to functions.
Async – As I am using javascript which is an asynchronous programming language.
	All the line of code written in javascript will be execute at the same time and will not wait for the previous line of codes to get executed.
await – async and await are related to each other by passing Promise between them
require – Imports playwright module and modules will be available under node_modules folder
test and expect – test tell that particular code is a single test case. Expect is to perform assertions and to validate results

![image](https://github.com/Krishankrishan6/Krishan_Polestar_assessment/assets/169908261/4275da3f-186d-4cf0-b88d-ffc1271f19f5)

Commands to run test scripts:
1.	npx playwright test: Runs all the test cases available under tests directory in headless mode
2.	npx playwright test <Test case name.spec.js>: Runs a specific test case file in headless mode
3.	npx playwright test <Test case name.spec.js> --project=<browser name>: Runs a specific test case file in specific browser. Chromium, firefox and webkit are the different browsers available in playwright
4.	npx playwright test <Test case name.spec.js> --headed: Runs a specific test case file in headed mode
5.	npx playwright test <Test case name.spec.js> --headed --debug: User will get a extra window called playwright inspector to execute the script line by line

Bonus topics:
1. Suggestions: I have four suggestions that I came across during my automation flow. I have added a word document under 'Reference documents' folder named 'Technical task progress_suggestion'.
2. Cross Browser capabilities: Generally Playwright executes tests by default in three browsers like Chromium, firefox and webkit. If we execute the below command we will be able to achieve it.
npx playwright test <Test case name.spec.js>

   





