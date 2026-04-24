# Util

Owner: Nuwan Danushka

[Common Functions](Util/Common%20Functions%2063a749c3562a44398de05cf3bcd3f4ab.md)

[Date And Time Manager](Util/Date%20And%20Time%20Manager%209506b28358f54c7bb7bd766f1eccfef5.md)

[IP Manager](Util/IP%20Manager%20a6c3f6cbe2e549aea3d77615ee5b2856.md)

[QR Code](Util/QR%20Code%20ffd43d657d9a4fb8a2741fb52e7b0a96.md)

[Time Zone](Util/Time%20Zone%2048a10dc3aa7e4666842403979d15b99d.md)

[Validation](Util/Validation%209adf6730c7b44bf8a7ea221e7e0f1af8.md)

---

# Introduction

The Util module in the DoFramework delivers a versatile toolkit comprising essential utility classes tailored to streamline common programming challenges. From handling date and time functionalities to managing IP addresses and performing data validations, this module offers a comprehensive array of tools to simplify development tasks. With classes such as CommonFunctions, DateTime, IPManager, TimeZone, and Validations, developers gain access to reusable components that enhance code efficiency and maintainability. By incorporating the Util Classes module into their projects, developers can accelerate development workflows, promote code reusability, and ensure robustness across various application scenarios.

---

# How to Access The Util Module’s Classes

To access the classes within the Util module, you can utilize either Type 1 or Type 2. 

Type 1 includes static methods, while Type 2 does not.

---

## Type 1: Access Static Methods in Util Class

```php
// Access Util class for static methods
$timestamp = Util::DateAndTimeManager()::get_timestamp(); 
```

In this step:

- **`DateAndTimeManager()`** is a static method inside the **`Util`** class, returning a class that manages date and time.
- Then, we call the **`get_timestamp()`** method on the returned class to retrieve the timestamp.

---

## **Type2: Access Non-Static Methods in Util Class**

```php
// Access Util class for non-static methods
$common_functions_obj = Util::CommonFunction(); // Returns an instance of the CommonFunction class
$country_list = $common_functions_obj->countryList(); // Call the countryList() function
```

In this step:

- **`CommonFunction()`** is a method inside the **`Util`** class, returning an instance of the **`CommonFunction`** class.
- We store this instance in **`$common_functions_obj`**.
- Then, we call the **`countryList()`** method on the **`$common_functions_obj`** instance to retrieve the list of countries.

---