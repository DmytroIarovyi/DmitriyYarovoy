# DmitriyYarovoy
N26 HomeChallenge

# Task 1

**Test activities to be done sorted by business priority (high->low):**

**_Unit testing_**
   Isolated components and/or modules tests implemented by developers
   
**_Functional testing_**
Functionality testing from user perspective based on business/flow requirements/user stories

**_Integration testing_**
   End to end scenarios, add/remove/track changed of expences, implemented by automation qa
   
**_API testing_**
   Tests covering public API if exists implemented by automation qa
   
**_Usability testing_** 
   Most features are easy to use
   Easy to navigate over all settings/menus

**_Crossplatform testing_**
   Cases to run app on different Operation Systems (iOS, Android)
   
**_UI/UX testing:_**

Screen Resolution (Mobile/Tablet common resolutions)

Screen Orientation (Rotate screen enabled/disabled)

Input method (Touch screen/long touch/short touch)

Hard keys  (cases with hard keys as Home, Back, Menu)

**_Installation testing_** - Install from app store/usb/direct url, Uninstall, Update

**_Regression testing_**
   Ensure nothing is broken after all changes that were done running various functional and non-functional tests

**_Security testing_**
   Monefy Pro is not available for accounts with no payment for it
   
**_Interruprions testing_**
   incoming call, receiving a message, device shutdown, lost and recovered network connection, battery is removed, camera activated, receiving alerts
   
**_Performance/Stress tests_**
   Add/remove expenses continuously to make sure that app is stable even after a long time
   Measure RAM usage, try to increase it as much as possible and keep such state for a long time
   
**_Different devices tests_**
   Data handling (add, delete, edit) on mobiles/tablets of different manufacturers

**_Network types testing_**
   Wi-Fi/4G/3G
   
**_Network change testing_**
   Wi-Fi + 3/4G at the same time, Wi-fi lost connection, still 3/4G is working
   
**_SD card tests_**
   Handling data to/from SD card if supported
   Handling data with no SD card devices

**_Battery tests_**
   Battery consumption when app runs in background/foreground. High/low battery levels workability and usage on different levels
   
# Task 2

**_Test-cases for automating_**
  As far as all API tests are already implemented, End-to-End scenarios are proposed and implemented.
  Those tests are created to cover all API functions one by one to check that all of them works correctly.
  
**_Test-case 1:_**
  Categories:
  
  Post(create) new category
  
  Get created category (make sure it is correct)
  
  Change category (ensure it was changed correctly in database)
  
**_Test-case 2:_**
  Categories:
  
  Post(create) new category
  
  Get created category (make sure it is correct)
  
  Delete category (ensure it was deleted from database)
  
**_Test-case 3:_**
  Products:
  
  Post(create) new product
  
  Get created product (make sure it is correct)
  
  Change product (ensure it was changed correctly in database)
  
**_Test-case 4:_**
  Products:
  
  Post(create) new product
  
  Get created product (make sure it is correct)
  
  Delete product (ensure it was deleted from database)
  
**_Test-case 5:_**
  Services:
  
  Post(create) new service
  
  Get created service (make sure it is correct)
  
  Change service (ensure it was changed correctly in database)
  
**_Test-case 6:_**
  Services:
  
  Post(create) new service
  
  Get created service (make sure it is correct)
  
  Delete service (ensure it was deleted from database)
  
**_Test-case 7:_**
  Stores:
  
  Post(create) new store
  
  Get created store (make sure it is correct)
  
  Change store (ensure it was changed correctly in database)
  
**_Test-case 8:_**
  Stores:
  
  Post(create) new store
  
  Get created store (make sure it is correct)
  
  Delete store (ensure it was deleted from database)
  
**_Test-case 9:_**
  Utilities:
  
 Get version
 
 Make sure it is correct one (1.1.0)
  
**_Test-case 10:_**
  Utilities:
 
  Get healthcheck information about the system
  
  Make sure it is correct (compare with actual values
