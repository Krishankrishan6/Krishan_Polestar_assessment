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

I have followed camel case naming convention.



