# Hello world!

Owner: Thilina Deepal

# Introduction

Welcome to the step-by-step guide to familiarizing you with the Do Framework. Hello world application serves as a simple showcase for the minimal setup of a Do Framework, explaining both implementation and usage.

---

# Preparation

**Prerequisite**

- MySQL Database for the framework.
- SSL certification on the domain.
- PHP 7.2.0 or higher.

### **Set up a development environment**

Start by creating a developer account on Docloud. Request access and, once approved, log in. Navigate to the "Frameworks" page. Download the latest version of the Do Framework, which comes as a zip file. Place this file on your development server and extract its contents. for more information on development environments

### **Install DoFramework**

After extracting the Do Framework on your development server, visit [https://your.domain.lk/api/admin/](https://dev.docloud.site/api/admin/) and follow the instructions in the "Get Started" section. This will guide you through the installation process. For more detailed information,

## **Exploring the Admin Panel**

Upon completing the setup process in the "Get Started" section, you'll be redirected to the admin panel of your system. Here, you can access logs, manage user permissions, perform backups, and configure system settings.

---

# Hello World App

The Hello World application is a sample app designed to familiarize you with the framework. The frontend app can be located in the "apps" directory from the root directory. The API app for the Hello World application can be found in the "api/apps" directory.

## App structures

**Front-end app structure.**

<aside>
💡 Keep the JavaScript components in the component directory for better cache management. If the system is cached, having the components in the correct directory ensures that they will be properly updated when changes are cleared from the admin panel.

</aside>

```
helloworld
├── assets/
│   ├── images/
│   ├── scripts.js
│   └── styles.css
├── components/
│   ├── widgets/
│   └── helloworld.js
├── app-config.json
├── index.php
├── readme.txt
├── route.js
└── services.js
```

| No                                                                                                                                                                                                                                                        | Folder, File & Description |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 1                                                                                                                                                                                                                                                         | **assets**                 |
| This directory is reserved for app assets, including images, fonts, scripts, styles, etc.                                                                                                                                                                 |
| 2                                                                                                                                                                                                                                                         | **components**             |
| This directory is designated for app components, where you can organize your app components such as pages, widgets, or other elements.                                                                                                                    |
| 3                                                                                                                                                                                                                                                         | **widgets**                |
| The "widgets" directory is intended for app widgets, specifically those used in dashboards and other panels.                                                                                                                                              |
| 4                                                                                                                                                                                                                                                         | **app-config.json**        |
| This file, "app-config.json," serves as the app configuration file. It stores app information and other configurations. For further details on app configurations, refer to [t](https://chat.openai.com/c/34a846e5-4d72-48a3-a5d1-b34ccb06a5fe#)his link. |
| 5                                                                                                                                                                                                                                                         | **index.php**              |
| This file addresses security concerns within the application and avoid directory listing.                                                                                                                                                                 |
| 6                                                                                                                                                                                                                                                         | **readme.txt**             |
| "readme.txt" serves as the readme file for your app, providing essential information and guidance.                                                                                                                                                        |
| 7                                                                                                                                                                                                                                                         | **route.js**               |
| "route.js" is responsible for handling Vue routes. Place your page routes in this file for effective route management.                                                                                                                                    |
| 8                                                                                                                                                                                                                                                         | **services.js**            |
| "services.js" contains functions for handling various requests such as GET, POST, and others within your app. Place your services in this file to manage requests effectively.                                                                            |

**Back-end / API structure.**

```
helloworld
├── helloworld.xml
├── helloworld.class.php
├── helloworldController.class.php
├── helloworldDAO.class.php
└── helloworldModel.class.php
```

<aside>
💡 Name your app's configuration file and app class with the same name as your app.

</aside>

| No                                                                                                                                                                                                                                                                                                                                                                      | Folder, File & Description         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| 1                                                                                                                                                                                                                                                                                                                                                                       | **helloworld.xml**                 |
| This file, "helloworld.xml," functions as the backend app configuration file. It contains essential configurations for the app. For more detailed information, please refer to this The naming convention, "helloworld XML," is used for this configuration file. If you are creating your configuration, please use the app name that you have used for the directory. |
| 2                                                                                                                                                                                                                                                                                                                                                                       | **helloworld.class.php**           |
| This file serves as the app class, where functions are written to be accessed by other apps. The purpose is to facilitate interaction with other apps by providing accessible functions. In this file, you can define functions that are intended to be utilized by other parts of the application.                                                                     |
| 3                                                                                                                                                                                                                                                                                                                                                                       | **helloworldController.class.php** |
| This file contains the API endpoints and is responsible for handling requests made to the app's endpoint. It serves as a controller for managing interactions with the app's API, processing incoming requests and providing appropriate responses.                                                                                                                     |
| 4                                                                                                                                                                                                                                                                                                                                                                       | **helloworldDAO.class.php**        |
| This file is a sample DAO (Data Access Object) class. It contains database functions needed for the app, handling interactions with the database. The DAO class typically encapsulates the database access code, providing a clean interface for the app to interact with the database.                                                                                 |
| 5                                                                                                                                                                                                                                                                                                                                                                       | **helloworldModel.class.php**      |
| This file is a sample model class. It contains properties and functions that are necessary for a model in the application. Model classes often represent data structures or business logic within the app, encapsulating the functionality related to data manipulation and processing.                                                                                 |

---

# Let’s write code

## Let’s add a new page to the Hello World app

### **Step 1: Create a New JS File**

- In the "components" folder of your app, create a new JavaScript file. You can name it whatever you like, for example, let's call it "NewPage.js".

### **Step 2: Basic Code Structure**

- Inside "NewPage.js", add the basic structure for a Vue.js component. The code should look something like this:

```json
export default {
    components: {

    },
    data() {
        return {

        };
    },
    template: ``,
    methods: {},
    watch: {},
    computed: {},
    mounted() {},
    created() {},
};

```

### **Step 3: Import Other Components (Optional)**

- If you want to use other components within your new page component, you can import them using JavaScript import statements. For example:

```jsx
import XP_Topbar from "/apps/xp_system/components/navigation/topbar.js";

export default {
  components: {
    XP_Topbar, // Register the imported component here
  },
  template: `<XP_Topbar />`, // Use the registered component here
  // ... rest of the component code
};
```

### **Step 4: Add your page structure**

- Add your page HTML structure inside the template.

### **Step 5: Register the New Page in the System**

- Open the "route.js" file, which appears to be your app's router file. Import the "NewPage.js" component and add a new route for the new page. Here's the updated code:

```jsx
/*
Routes of the apps
 */

const Ext_Helloworld = () =>
  XP.import("/apps/helloworld/components/helloworld.js");

const Ext_NewPage = () => XP.import("/apps/helloworld/components/NewPage.js");

Router.addRoute({
  path: "/helloworld",
  name: "helloworld",
  component: Ext_Helloworld,
  meta: {
    title: "helloworld",
    requiresAuth: true,
    permissions: {
      name: "helloworld",
      action: "view",
    },
  },
});

Router.addRoute({
  path: "/newpage", // URL path name
  name: "newpage", // Route name
  component: Ext_NewPage, //imported component
  meta: {
    title: "New Page",
    requiresAuth: true, // Set to true if the page needs user authentication
    permissions: {
      //here we should declare the permission
      name: "helloworld",
      action: "view_newpage",
    },
  },
});

Router.replace(Router.currentRoute.value.fullPath);
```

Now, in your app, there's a fresh route called **`/newpage`**. When someone accesses it, the "NewPage.js" component will load, but only if **`requiresAuth`** is set to **`false`**. If you want to grant permission to view this page, move on to the next step, Step 6. Also, don't forget to update the meta information, including the title, authentication requirements, and permissions, as needed.

For more information about Vue Router, you can check out the official documentation: [Vue Router Documentation](https://router.vuejs.org/guide/)

### **Step 6: Grant System Permission for the New Page.**

- Navigate to the backend app folder of your "helloworld" app and open the "helloworld.xml" file. Add a new permission record for the "New Page" within the **`<user_permissions>`** section. Use the name that was defined in the route permission action, which is **`action: "view_newpage"`**.

```xml
    <user_permissions name="helloworld">
        <category name="basic_permissions">
            <permission display_name="Get hello world data" name="get_hello_data" auto_update="true"/>
            <permission display_name="View hello world app" name="view" auto_update="true"/>
						<permission display_name="View new page" name="view_newpage" auto_update="true"/>
        </category>
    </user_permissions>
```

<aside>
💡 Ensure that you have added permission with the correct display name and name. Set **`auto_update="true"`** if this is a default permission for the system admin. This step is crucial to grant users the necessary permissions to access the new page.

</aside>

### **Step 7: Enable Permissions for Users**

<aside>
💡 For more information about permissions and authentication

</aside>

1. Navigate to your system’s admin panel.
2. Go to "Roles & Permissions."
3. Look for the "helloworld" section.
4. Under the "helloworld" section, locate the declared permission, in this case, "View new page."
5. Add a tick/checkmark for the user roles that should have access to the new page.
6. Press the "Save Permissions" button.

- This action will update the permissions, allowing users with the specified roles to access the new page. Ensure that the roles granted permission align with the roles assigned to users who should have access. Once saved, users with the granted roles will be able to access the new page as defined by the permissions.

---

## Let’s get data from an API

Here are the steps to retrieve data from an API in your Vue.js component:

### Step 1: Add service to service.js

- Create a new async function using the Fetch API in your **`service.js`** file to handle the API call.

```jsx
// service.js

export const hello_world_services = {
  // ... other functions

  get_content: async function () {
    let response = await fetch(api_url + "/helloworld/get_content", {
      method: "GET",
      credentials: "include",
    });
    return await response.json();
  },
};
```

### Step 2: Import Services

- Import the **`hello_world_services`** from your services file to your component.

```jsx
// YourComponent.js
import { hello_world_services } from "../services.js";
```

### **Step 3: Create a Function for Getting Data**

```jsx
// YourComponent.js

data() {
    return {
        content: [], // Property to store the fetched data
    };
},
// ... rest of the component code

methods: {
    getHelloWorldContent: function () {
        hello_world_services.get_content()
            .then((res) => {
                if (res.response.success) {
                    this.content = res?.data;
                }
            })
            .catch((error) => {
                console.error(error);
            });
    },
},
```

### Step 4: Call the function

- Call the **`getHelloWorldContent`** function when the component is mounted to fetch data when the page loads.

```jsx
// YourComponent.js

// ... rest of the component code

mounted() {
    this.getHelloWorldContent(); // Call the function when the component is mounted
},

```

By following these steps, your Vue.js component will now fetch data from the specified API and update the **`content`** property with the response data.

---

## Let's create a new endpoint

Here are the steps to create a new endpoint in DoFramework:

### **Step 1: Register the Endpoint in the Controller Class**

1. Navigate to the **`api/app`** directory.
2. Find the "helloworld" app.
3. Open the controller class file, which is likely named **`helloworldController`**.

Assuming your new endpoint is named "get_content," follow these steps:

- Locate the `$publicEndpointsAry = array();` array in the controller class.
- Add "get_content" to the array, as it is the new endpoint you want to create.

<aside>
💡 If you're creating the endpoint for testing purposes, it should be removed from `$publicEndpointsAry` after testing. However, if you intend to make the endpoint public, you can keep it as it is.

</aside>

```php
// helloworldController.php

 $publicEndpointsAry = array('get_content',  // ... other endpoints);
```

<aside>
💡 adding the endpoint to the `$publicEndpointsAry`, it will be accessible to unauthorized users, making it available to anyone.

</aside>

- Inside the controller class, under the **`get`** handler function, add a new case for handling the "get_content" endpoint.

```php
// helloworldController.php

public function get($request) {
    switch ($request->url_elements[2]) {
        // ... other cases
        case 'get_content':
            $this->get_content();
            break;
        default:
            $this->notsupported();
            break;
    }
}
```

### Step 2: Create the endpoint function

Let’s create the **`get_content`** function within the controller class to handle the logic for the "get_content" endpoint.
go through the comments to understand this code block.

```php
    private function get_content()
    {
				//Create an instance of the Response class. And it will be used to manage the response to be sent back.
        $res = new Response();

				//The try block contains the main logic of the function.
        try {

						//returns an array. This function will be used to get data with the request.
						//works for both GET & POST type requests
            $data = $this->getRequest()->getData();

						//this line checks if the key 'param' exists in the data received with the request.
						//If it does, it assigns its value to the $message variable;
						//otherwise, it defaults to the string "Hi !!".
            $message =  isset($data['param']) ? $data['param'] : "Hi !!";

						//This sets the data to the response object.
						//This data will be used to send with the response back to the client.
            $res->setData($message);

						//This line outputs the response created by the create method of the $res object.
						//It takes three parameters:
						//HTTP status, a message associated with the response, indicates success or unsuccessful
            echo $res->create(200, 'Hello World content data.', true);
            return;

					//If any exception occurs during the execution of the try block,
					//it will be caught by the catch block.
        } catch (Exception $ex) {
						//in case of an exception, we can log the exception using System::errorlog
						//creating a log entry with the provided exception, location, and log level.
            System::errorlog(Loging::log($ex, 'helloworldController:get_content', LOG_WARN));
            echo $res->create(500, 'Something went wrong.', false);
            return;
        }
    }
```

- We can use a tool like [**Postman**](https://www.postman.com/) to test web APIs and examine their responses. Here's an example of what the response looks like.

```json
{
  "response": {
    "statusCode": 200,
    "statusMsg": "Hello World content data.",
    "success": true
  },
  "data": "Hi !!"
}
```

After completing these steps, you've successfully set up an endpoint. Now, let's explore how to enable authentication and grant permission for it.

### Step 3: Add permissions to the endpoint

- Locate **`$publicEndpointsAry`** and remove **`get_content`** from the array.
- Go to the "HelloWorld" XML configuration file (**`HelloWorld.xml`**) which is the XML configuration file of the app.
- Locate the **`<user_permissions name="helloworld">`** section. Inside the **`<category name="basic_permissions">`** section, add a **`<permission>`** tag for the "get_content" endpoint.

```xml
<!-- HelloWorld.xml -->

<user_permissions name="helloworld">
    <category name="basic_permissions">
        <!-- ... other permissions -->
        <permission display_name="Get hello world content data endpoint" name="get_content" auto_update="true"/>
    </category>
</user_permissions>

```

### **Step 4: Enable Permissions for Users**

1. Navigate to the admin panel.
2. Go to "Roles & Permissions."
3. Look for the "helloworld" app or section.
4. Under the "helloworld" section, locate the declared permission, in this case, "Get hello world content data endpoint."
5. Add a tick/checkmark for the user roles that should have access to the new page.
6. Press the "Save Permissions" button.

- This action will update the permissions, allowing users with the specified roles to access the endpoint. Ensure that the roles granted permission align with the roles assigned to users who should have access. Once saved, users with the granted roles will be able to access the new endpoint as defined by the permissions.

---

## Let’s see how to communicate with other apps

### **Step 1: Prepare Apps for Communication**

Firstly, to make this process work, ensure that you have two apps, one being your existing app and the other being your very own Hello World app. Follow these steps to enable permissions on the Hello World app so that communication can occur:

1. Locate the Hello world app in /api/helloworld/ in your file directory.
2. Identify the App XML file named helloworld.xml within the Hello World app directory.
3. If the <app_permissions> tag is not already present in helloworld.xml, add it. Inside this tag, include a <permission> tag with the property app_name="your_app_name".

Here's an example:

```xml

<app_permissions>
   <permission app_name="your_app_name"/>
</app_permissions>

```

By following these steps, you have successfully allowed permission for communication between your existing app and the Hello World app.

### **Step 2: Define a Simple Shared Function**

Navigate to the helloworld.class.php app class file within the Hello World app directory. Add a public PHP function named "greet" as follows:

```php
<?php
/**
 * Hello World App Class
 */
class helloworld extends App {

    // Other functions

    /**
     * Simple greeting function
     *
     * @return string
     */
    public function greet() {
        return "Hello Dev";
    }

    // Additional functions

}

```

### **Step 3: Invoke the function in your app**

Now, let's proceed with invoking the "greet" function from the Hello World app in your app.

Follow these steps:

```php
class yourAppController extends Controller
{
    // code

    private function test()
    {
        // Create the app object using AppManager::createInstance()
        $helloworldObj = AppManager::createInstance('helloworld');

        // Check if the permissions are allowed
        if ($helloworldObj) {

            // Invoke the greet function
            $output = $helloworldObj->greet();

            // Display the output
            echo $output;
        } else {
            // Handle permissions not allowed
            echo "Permission denied for Hello World app.";
        }
    }
    // code
}

```

That all! this maintains a secure and controlled communication flow between the two apps.

---

## Let’s export your app

Here are the steps to export app in DoFramework:

### **Step 1: Log in to the Admin Panel**

- Visit your domain followed by /api/admin.
- Login using your Docloud credentials or locally.

### **Step 2: Navigate to Apps**

- Click on "Apps" in the sidebar.

### **Step 3: Select the App to Export**

- Hover over the desired app and click the pen icon located at the top right.

### **Step 4: Download the App**

- A pop-up will appear; click on "Download App.”
- Ensure a smooth and easy-to-understand process.

---

## Let's create a new widget for the app

# Let’s brand your app
