# App configurations.

Owner: Nuwan Danushka

# Frontend app configuration.

## Introduction

In Do Framework's front-end development, we handle key settings in a file called app-config.json. This file, located at the root of your app, is like a control center for how your app looks and behaves. As a Do Framework developer, you'll often tweak this file to match your app's needs. It's where you fine-tune details for a smooth and user-friendly front-end experience, using simple elements like commas and brackets. So, dive in, explore your app's heart in app-config.json, and make your Do Framework app uniquely yours.

---

Here is a sample app-config.

```json
{
  "version": "1.0.0",
  "release_date": "2024-02-09",
  "app_name": "helloworld",
  "app_type": "custom",
  "status": "active",
  "description": "Description about this app",

  "resources": {
    "scripts": [{ "url": "assets/scripts.js" }, { "url": "route.js" }],

    "styles": [{ "url": "assets/styles.css" }]
  },

  "menus": [
    {
      "label": "Hello World",
      "icon": "fas fa-globe-americas",
      "path_name": "helloworld",
      "description": "Say Hello to Do Framework.",
      "position": {
        "sidebar": true,
        "sidebar_priority": 100,
        "megabar": true,
        "megabar_priority": 100
      },
      "permission": {
        "name": "helloworld",
        "action": "view"
      }
    }
  ],
  "settings": [
    {
      "name": "helloworld",
      "src": "/apps/helloworld/components/settings/helloworld_settings.js",
      "icon": "fas fa-globe-americas",
      "label": "Hello world settings",
      "permission": "helloworld_settings"
    }
  ],
  "widgets": [
    {
      "display_name": "Hello world widget",
      "component_name": "hello_widget",
      "sizes": ["small", "medium", "large"],
      "url": "/apps/helloworld/components/widgets/hello_widget.js"
    }
  ],
  "_comments": {
    "app_type": "Type of the app. Accepted values: system | custom",
    "status": "Status of this app. Accepted values: active | disabled",
    "menus": {
      "intro": "How the app navigation labels should be displayed",
      "icon": "Font Awesome class names for the menu icons",
      "path_name": "Route path name. (not the link)"
    }
  },

  "_public": [
    "version",
    "release_date",
    "app_name",
    "status",
    "description",
    "menus",
    "settings",
    "widgets"
  ]
}
```

---

## App Info

The "App Info" section provides a quick snapshot of the application, including version, release date, settings, name, status, and description.

```json
	"version": "1.0.0",
	"release_date": "2024-02-09",
	"app_name": "helloworld",
	"app_type": "custom",
	"status": "active",
	"description": "Description about this app",
```

### Version

The version number uniquely identifies the app's release. It facilitates tracking changes, updates, and compatibility with other components or systems, evolving as the app progresses.

### **Release Date**

The release date signifies the official launch date of the app. This timestamp aids users and developers in understanding when a particular version was introduced, crucial for version management and historical tracking.

### **App Name**

The app name serves as a distinct identifier, aiding recognition and reference. Choose a meaningful and memorable name aligned with the app's purpose and branding.

### **App Type**

Indicating the app type as "custom" implies tailoring to specific requirements and functionalities. This distinguishes custom apps from system applications, emphasizing their design for particular use cases.

### **Status**

The status attribute reflects the current operational state of the app. An "active" status implies accessibility and functionality, coupled with ongoing maintenance and support by the development team.

### **Description**

A detailed description is crucial for users and developers to comprehend the app's purpose, features, and unique qualities. A comprehensive description enhances user engagement and facilitates collaboration among developers.

## Resources

The "Resources" section serves as a vital component within the app configuration, outlining the fundamental assets that contribute to the app's development and functionality.

<aside>
💡 To extend functionality, add new scripts by specifying their URLs under "Scripts." For enhanced styling, include additional styles by appending their URLs under "Styles.”

</aside>

```json
	"resources": {
		"scripts": [
			{ "url": "assets/scripts.js" },
			{ "url": "route.js" }
		],

		"styles": [
			{ "url": "assets/styles.css" }
		]
	},
```

### Scripts

The scripts section lists JavaScript files employed in the app, contributing to its functionality and behavior.

### Styles

The styles section enumerates CSS files that define the app's visual presentation and layout.

---

## Menus

Menus are the navigational elements within the app, guiding users through different sections and features.

```json
	"menus": [
		{
			"label": "Hello World",
			"icon": "fas fa-globe-americas",
			"path_name": "helloworld",
			"description": "Say Hello to Do Framework.",
			"position": { "sidebar": true, "sidebar_priority": 100, "megabar": true, "megabar_priority": 100 },
			"permission":{
				"name":"helloworld",
				"action":"view"
			}
		}
	],
```

### **Label**

Represents the display text for the menu. It is visible in various UI elements, such as icons or other designated places.

### **Icon**

Utilizes Font Awesome 5 icon class names to visually represent the menu. Enhances visual appeal and recognition.

### **Path Name**

Specifies the Vue Router path name, determining the route the menu leads to within the app.

### **Description**

Offers a brief description of the app or feature associated with the menu. Enhances user understanding.

### **Position**

Determines where the menu should be displayed, with options for the sidebar mega bar and other bars.

- **Sidebar:** Indicates whether the menu should appear in the sidebar.
- **Mega Bar:** Specifies whether the menu should be displayed in the megabar.

### **Priority**

Assigns priorities for the order of appearance in the sidebar and megabar, respectively. Lower values indicate a higher priority.

### **Permission**

Uses a permission JSON key and value to control access. Specifies the required permission name and associated action for the menu.

- **Name:** This is the identifier for the permission, helping to distinguish and recognize it. give it the name of the application. For example `helloworld` or `users`
- **Action:** This is the specific permission associated with the application, defined by the developer. It should be declared in the permission list in the `app.xml` For example `add_users` or `view_users` Developers create and declare these actions to control access to specific functionalities within the app.

---

## Widgets

Widgets are components that enhance the app's user interface and functionality.

```json
	"widgets": [
		{
			"display_name": "Hello world widget",
			"component_name": "hello_widget",
			"sizes": ["small","medium","large"],
			"url": "/apps/helloworld/components/widgets/hello_widget.js"
		}
	],
```

### **Display Name**

The name visible in the widget library, providing users with a recognizable label for the widget.

### **Component Name**

Specifies the Vue component name associated with the widget. Identifies the underlying code and functionality.

### **Sizes**

Indicates the supported sizes for the widget. Users can select from options such as small, medium, and large, tailoring the widget to their preferences.

### **URL**

Specifies the location of the Vue component, guiding the app to the file that contains the code for the widget. The URL is essential for loading and integrating the widget into the app.

---

## **Comments**

The comments section includes additional insights and explanations for app config attributes.

<aside>
💡 The "Comments" section provides space for developers to include additional insights and explanations for app configuration attributes. Developers can add comments for each attribute, offering clarification, examples, and context to enhance understanding. For instance, comments can provide details such as accepted values, usage instructions, or any additional information that aids developers in configuring the app effectively.

</aside>

```json
	"_comments": {
		"app_type": "Type of the app. Accepted values: system | custom",
		"status": "Status of this app. Accepted values: active | disabled",
		"menus": {
			"intro": "How the app navigation labels should be displayed",
			"icon": "Font Awesome class names for the menu icons",
			"path_name": "Route path name. (not the link)"
		}
	},
```

---

## **\_Public**

The "\_Public" section allows developers to declare which attributes are available for public access. Attributes listed here are intended to be shared with the system or external entities.

<aside>
💡 Developers can include attributes like  "menus," "settings," and "widgets" in the "_Public" array to make them accessible externally. This declaration serves as a clear guideline for developers to determine which attributes can be exposed to the system or other external entities, promoting transparency and controlled information sharing.

</aside>

```json
	"_public": [
		"version", "release_date", "app_name", "status", "description", "menus", "settings", "widgets"
	]
```

---

# Backend app configuration.

## Introduction

In Do Framework's back-end development, we handle key settings and info in an XML file. This file contains XML tags.

Here is a sample app.xml.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<app>
    <app_register active="true"/>
    <info>
        <app_name>helloworld</app_name>
        <app_author>DoCloud</app_author>
        <display_name>Hello World</display_name>
        <app_version>1.0.2</app_version>
        <api_version>0.0.1</api_version>
        <app_icon>fas fa-globe-americas</app_icon>
        <app_image src="/assets/images/app_icons/app-icon.png"/>
        <app_type>application</app_type>
        <status>active</status>
        <release_date>2023-10-17</release_date>
        <description>
				 Hello World Module: The HelloWorld module, a cornerstone of the Domedia (DO) API framework,
				 introduces basic "Hello World" operations. Tailored for simplicity,
				 it offers developers an easy entry point to grasp essential API functionalities,
				 providing a straightforward toolset for swift integration and initiation into the broader Domedia ecosystem.
        </description>
        <changelog>
            fixed errors, added a settings page on admin panel .
        </changelog>
    </info>
    <app_options active="true">
        <db_table name="options"
                  name_column="name"
                  value_column="value"
                  timestamp_column="updated_at"
                  user_id_column="updated_by" />
        <allowed_options>
            <option name="option_one"/>
            <option name="option_two"/>
            <option name="option_three"/>
        </allowed_options>
    </app_options>
    <app_permissions>
        <permission app_name="auth"/>
        <permission app_name="xp_system"/>
        <permission app_name="xp_users"/>
    </app_permissions>
    <user_permissions name="helloworld">
        <category name="basic_permissions">
            <permission display_name="Get hello world data" name="get_hello_data" auto_update="true"/>
            <permission display_name="View hello world app" name="view" auto_update="true"/>
        </category>
    </user_permissions>
    <admin_panel_permissions>
        <category name="basic_permissions">
            <permission display_name="view setting page" name="view" auto_update="true"/>
            <permission display_name="Get hello world data" name="get_hello_data" auto_update="true"/>
        </category>
    </admin_panel_permissions>
    <user_notifications>
			  <category name="helloworld_management_notifications" display_name="Hello world Management Notifications">
				    <notification name="mention_at_comment" display_name="Mention in a Comment" description="Notifies when mentioned in a comment" default_enabled="true">
					     <email active="true">
                    <options name="optiona_one_name" default="1">
                        <option>detailed</option>
                        <option>minified</option>
                    </options>
                    <options name="optiona_two_name" default="1">
                        <option>detailed</option>
                        <option>minified</option>
                    </options>
               </email>
               <push active="true">
                    <options name="optiona_one_name" default="2">
                        <option>detailed</option>
                        <option>minified</option>
                    </options>
               </push>
               <sms active="true"></sms>
				    </notification>
			  </category>
    </user_notifications>
    <createTables>
        <table name="helloworld">
            <column name='id' type='bigint' size='20' default='' attributes='UNSIGNED' null='false' autoincrement='true'
                    primarykey='true'/>
            <column name='message' type='text' size='' default='' attributes='' null='true'/>
            <column name='status' type='int' size='5' default='' attributes='' null='true'/>
            <column name='created_date' type='datetime' size='' default='' attributes='' null='false'/>
            <column name='created_by' type='bigint' size='20' default='' attributes='UNSIGNED' null='true'/>
        </table>
        <table name="helloworld_meta">
            <column name='id' type='bigint' size='20' default='' attributes='UNSIGNED' null='false' autoincrement='true'
                    primarykey='true'/>
            <column name='helloworld_id' type='bigint' size='20' default='' attributes='UNSIGNED' null='false'/>
            <column name='meta_key' type='varchar' size='255' default='' attributes='' null='true'/>
            <column name='meta_value' type='longtext' size='' default='' attributes='' null='true'/>
        </table>
    </createTables>
    <prerequisites>
			<apps>
				<xp-users>
					<app_name>xp-users</app_name>
					<app_version>1.0.0</app_version>
				</xp-users>
			</apps>
    </prerequisites>
    <uninstallConfiguration>
			****<apps>
				<xp_users>
					<cleanup>
					  <database>
							<meta_key>helloworld_id</meta_key>
			      </database>
			    </cleanup>
			  </xp_users>
			</apps>
    </uninstallConfiguration>
</app>
```

---

## **<app_register>**

Properties of the `<app_register>` tag

- **active:** Set to either true or false.
  - If your app needs to communicate with other apps, set it to true.

---

## <info> **Tag**

The "Info" section provides a quick snapshot of the application, including version, release date, settings, name, status, and description.

```xml
<info>
        <app_name>helloworld</app_name>
        <app_author>DoCloud</app_author>
        <display_name>Hello World</display_name>
        <app_version>1.0.2</app_version>
        <api_version>0.0.1</api_version>
        <app_icon>fas fa-globe-americas</app_icon>
        <app_image src="/assets/images/app_icons/app-icon.png"/>
        <app_type>application</app_type>
        <status>active</status>
        <release_date>2023-10-17</release_date>
        <description>
				 Hello World Module: The HelloWorld module, a cornerstone of the Domedia (DO) API framework,
				 introduces basic "Hello World" operations. Tailored for simplicity,
				 it offers developers an easy entry point to grasp essential API functionalities,
				 providing a straightforward toolset for swift integration and initiation into the broader Domedia ecosystem.
        </description>
        <changelog>
            fixed errors, added a settings page on admin panel .
        </changelog>
</info>
```

### <app_name>

The name of the application.

### <app_author>

The name of the author.

### <display_name>

How the application should be presented in interfaces.

### <app_version>

The version number of the application.

### <api_version>

The API version the app supports.

### <app_icon>

Font Awesome 5 icon class name representing the app.

### <app_type>

Specifies whether the app is a System app or a regular application.

- app_types: `application / system_app`

### <**app_image**>

The **`<app_image>`** tag defines the location of the application icon.

**Steps to add an app image**

1. Place your icon in the app's frontend root directory at **`"/assets/images/app_icons/"`**.
2. In the **`<app_image>`** tag, set the **`src`** attribute to the path of your icon

```xml
<app_image src="/assets/images/app_icons/app-icon.png"/>
```

This ensures that the application references the correct image path for displaying the icon.

### <**status**>

Conveys the current operational status of the application, set as "active."

### <**release_date**>

Specifies the official release date of the application

### <description>

A brief description providing details about the app.

### <changelog>

A summary of recent changes to the application.

---

## **<**app_options**>**

The **<app_options>** tag informs the API about the permitted app options that can be accessed from the front end.

For information on how to access app options from the front end, click

### **<**db_table**>**

The `<db_table>` tag defines the structure of a table in the database. It has the following properties:

- **name:** Specifies the name of the table.
- name_column**:** Specifies the column that stores the option name of the specified option table.
- value_column**:** Specifies the column that stores the option value of the specified option table.
- timestamp_column**:** Specifies the column that stores a datetime of the specified option table.
- user_id_column**:** Specifies the user id column of the specified option table.

### **<**allowed_options**>**

The `<allowed_options>` tag acts as a container for different options that are permitted. It is the parent tag for individual `<option>` tags.

### **<**option**>**

The `<option>` tag represents a single option within the `<allowed_options>` tag.

**Properties of the <**option**> tag**

- **name:** Specifies the name of the option.

**Example of Options:**

```xml
<app_options active="true">
	<db_table name="options"
	          name_column="name"
            value_column="value"
            timestamp_column="updated_at"
            user_id_column="updated_by" />
	<allowed_options>
            <option name="option_one"/>
            <option name="option_two"/>
            <option name="option_three"/>
	</allowed_options>
</app_options>
```

---

## **<**app_permissions**>**

The **<app_permissions>** tag informs the API about the permitted communication between apps.
How to communicate between apps click here. It contains child tags called **<permission>**.

### **<permission>**

**Properties of the <permission> tag**

- **app_name:** Specifies the name of the app granted permission.

**Example of Permission:**

```xml
<app_permissions>
	<permission app_name="xp_users" />
</app_permissions>
```

---

## **<**user_permissions**>**

The **<user_permissions>** tag plays a pivotal role in configuring user permissions for the app. It serves as the container where permissions specific to the application are defined. Additionally, this tag incorporates child tags known as **<category>**, further enhancing the organization of permissions.

### **<**category**>**

The **<category>** tag enhances the organization of permissions.

**Properties of the <**category**> tag**

- **name:**  Specifies the category's name.

<aside>
💡 Within the **<category>** tag, there is the **<permission>** tag, defining the app's permissions.

</aside>

### **<**permission**>**

permission tag is the child tag of the category tag. here we are defining the permissions of that app uses

**Properties of the <**permission**> tag**

- **display_name:** Specifies how the permission would be displayed in the user interface.
- **name:** Specify the name of the permission.
- **auto_update:** Takes a boolean value (true/false). If set to true, the permission is automatically added to the system during installation or updates.

**Example of User Permission:**

```xml
<user_permissions name="helloworld">
        <category name="basic_permissions">
            <permission display_name="Get hello world data" name="get_hello_data" auto_update="true"/>
            <permission display_name="View hello world app" name="view" auto_update="true"/>
        </category>
 </user_permissions>
```

---

## **<**admin_panel_permissions**>**

The **<**admin_panel_permissions**>** tag holds significant importance in configuring admin panel permissions within the app. This tag is where we specifically define the permissions required for the admin panel. It incorporates child tags known as **<category>**.

### **<**category**>**

The **<category>** tag enhances the organization of permissions.

**Properties of the <**category**> tag**

- **name:**  Specifies the category's name.

<aside>
💡 Within the **<category>** tag, there is the **<permission>** tag, defining the app's permissions.

</aside>

### **<**permission**>**

permission tag is the child tag of the category tag. here we are defining the permissions of that app uses

**Properties of the <**permission**> tag**

- **display_name:** Specifies how the permission would be displayed in the user interface.
- **name:** Specify the name of the permission.
- **auto_update:** Takes a boolean value (true/false). If set to true, the permission is automatically added to the system during installation or updates.

**Example of User Permission:**

```xml
    <admin_panel_permissions>
        <category name="basic_permissions">
            <permission display_name="view setting page" name="view" auto_update="true"/>
            <permission display_name="Get hello world data" name="get_hello_data" auto_update="true"/>
        </category>
    </admin_panel_permissions>
```

---

## **<user_notifications>**

The `user_notifications` tag specifies the notifications available in the app. Notifications are organized under `category` tags, each containing a name, display name, and an indication of whether the notification is enabled by default. Within a category, notifications are defined with their own name, display name, description, and default enabled status. Each notification can have different methods, such as email, push, or SMS. The `active` attribute in these method tags indicates if the method is enabled by default. If there are options for a notification, they should be specified within `options` tags. The `options` tag must include a name, and the default option will be the first element unless specified otherwise using the `default` attribute, which should be a number.

### **<category>**

The **<category>** tag organizes notifications into manageable groups.

**Properties of the <category> tag**

- **name:** Specifies the category's name.
- **display_name:** Specifies the category's display name.

<aside>
💡 Within the **<category>** tag, there is the **<notification>** tag, defining the app's notifications.

</aside>

### **<notification>**

The **<notification>** tag is a child tag of the **<category>** tag. It defines the specific notifications used by the app.

**Properties of the <notification> tag**

- **name:** Specifies the name of the notification.
- **display_name:** Specifies how the notification is displayed in the user interface.
- **description:** Provides a brief description of the notification.
- **default_enabled:** Takes a boolean value (true/false) indicating whether the notification is enabled by default.

**Example of User Notification:**

```jsx
<user_notifications>
  <category
    name="helloworld_management_notifications"
    display_name="Hello world Management Notifications"
  >
    <notification
      name="mention_at_comment"
      display_name="Mention in a Comment"
      description="Notifies when mentioned in a comment"
      default_enabled="true"
    >
      <email active="true">
        <options name="optiona_one_name" default="1">
          <option>detailed</option>
          <option>minified</option>
        </options>
        <options name="optiona_two_name" default="1">
          <option>detailed</option>
          <option>minified</option>
        </options>
      </email>
      <push active="true">
        <options name="optiona_one_name" default="2">
          <option>detailed</option>
          <option>minified</option>
        </options>
      </push>
      <sms active="true"></sms>
    </notification>
  </category>
</user_notifications>
```

---

## **<createTables>**

The **<createTables>** tag is responsible for automatically generating tables when you initialize the app. Each table is represented by the **<table>** tag, and you should use a separate **<table>** tag for each table.

### <table>

**Properties of the <table> tag**

- **name:** The name of the table.

### <column>

**Properties of the <column> tag**

- **name:** The name of the column.
- **type:** The data type of the column.
  - The data type of the column, supporting SQL data types such as varchar, int, text, etc.
- **size:** The size or length of the column.
  - Length/Values of the type such as if the type is varchar the size can be the value like 255
- **default:** The default value for the column.
  - The default can be NULL or a specific value like CURRENT_TIMESTAMP.
- **attributes:** Additional attributes for the column.
  - Additional attributes for the column, such as BINARY, UNSIGNED, ZEROFILL, etc.
- **null:** Specifies whether the column can be null.
  - Set it to 'true' if the column allows null values, and 'false' if null values are not permitted.
- **autoincrement:** Indicates if the column should auto-increment.
  - Set it to 'true' for auto-incrementable columns.
  - Note that auto-increment works only if the column is a primary key.
- **primarykey:** Marks the column as the primary key.
  - Set it to 'true' if the column is a primary key.
- **index:** Adds the column as an index.
  - Set it to 'true' if the column should be indexed.
- **unique:** Marks the column as a **unique**
  - Set it to 'true' if the column should be **unique**.

**Example of creating table:**

```xml
<createTables>
	<table name="user">
		<column name="id" type="INT" size="11" autoincrement="true" primarykey="true" />
		<column name="name" type="VARCHAR" size="255" />
		<!-- Add more columns as needed -->
	</table>
</createTables>
```

---

## <prerequisites>

The `<prerequisites>` tag enables you to specify prerequisite apps for your application, indicating that your app requires other apps to function properly.

**You can define prerequisites as shown below:**

```xml
<prerequisites>
	<apps>
		<xp-users> <!-- App Name -->
			<app_name>xp-users</app_name> <!-- App Name -->
			<app_version>1.0.0</app_version> <!-- App Version-->
		</xp-users>
		<company> <!-- App Name -->
			<app_name>company</app_name> <!-- App Name -->
			<app_version>1.0.0</app_version> <!-- App Version-->
		</company>
	 <!-- Add more prerequisite apps as needed -->
	</apps>
</prerequisites>
```

Make sure to enclose each prerequisite app within the **`<apps>`** tag and provide the **`app_name`** and **`app_version`** for each app.

<aside>
💡 **If your app doesn't have any prerequisites, you can leave the `<prerequisites>` tag blank.**

</aside>

---

## <uninstallConfiguration>

The **`<uninstallConfiguration>`** section provides a structured way to define cleanup actions when uninstalling the app.

In this example:

```xml
<uninstallConfiguration>
	****<apps>
		<xp_users>
			<cleanup>
			  <database>
					<meta_key>company_id</meta_key>
					<meta_key>company_contact_id</meta_key>
	      </database>
	    </cleanup>
	  </xp_users>
	</apps>
</uninstallConfiguration>
```

- **`<xp_users>`** specifies the app from which cleanup actions should be performed.
- **`<cleanup>`** indicates that cleanup actions are defined.
  - only cleanup is available for the moment.
- **`<database>`** specifies the type of cleanup action, targeting the database.
  - only database available for the moment.
- **`<meta_key>`** indicates that metadata cleanup action is defined.
  - **`company_id`** meta key for which cleanup will be executed.
    <aside>
    💡 Here you can add multiple meta keys under **<database>** tag
    
    </aside>


This configuration ensures that, upon uninstallation, specified cleanup actions related to the database's **`company_id`** metadata will be executed, contingent on the app's permissions

<aside>
💡 Data will be removed if only the app allows permissions for your app

</aside>

---

## <run>

The **`<run>`** tag is utilized to define actions performed when adding this app to DoFramework or when reinitializing from the admin panel.

- SQL execution is facilitated using the **`<sql>`** tag, triggering the execution of an SQL file placed in the app's root directory.
- Script execution is achieved with the **`<script>`** tag, initiating the execution of a PHP file. The PHP file should be placed in the app's root directory.

```xml
<run>
	<script class_name="run" function_name="init" file="run.class.php"/>
  <sql>filename.sql</sql>
</run>
```

### <script>

The **`<script>`** tag is used to execute a PHP script during the app's addition or reinitialization.

```xml
<script class_name="run" function_name="init" file="run.class.php"/>
```

- **class_name:** Specifies the class name in the file.
- **function_name:** Identifies the function to trigger.
- **file:** Specifies the PHP file's name for script execution.

### <sql>

The **`<sql>`** tag initiates the execution of an SQL file during the app's addition or reinitialization.

```xml
<sql>filename.sql</sql>
```

Specify the SQL file name within the tag.
