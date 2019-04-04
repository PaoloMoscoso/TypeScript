# TypeScript

_this repository is for learning TypeScript according to the objective that I have_
## Why TypeScript
### Defining TypeScript
_TypeScript is an object-oriented programming language developed and maintained by the Microsoft Corporation. It is a superset of JavaScript and contains all of its elements._

_TypeScript totally follows the OOPS concept and with the help of TSC (TypeScript Compiler), we can convert Typescript code (.ts file) to JavaScript (.js file)_
### Why Sould we Use Types Typed programing languajes
* Early detection of `Error`
* Improve code readbility
* Improved IDEs Support
* Easy code Analysis
* large-scale application
### Why Should We Use TypeScript?
* TypeScript simplifies JavaScript code, making it easier to read and debug.
* TypeScript is open source.
* TypeScript provides highly productive development tools for JavaScript IDEs and practices, like static checking.
* TypeScript makes code easier to read and understand.
* With TypeScript, we can make a huge improvement over plain JavaScript.
* TypeScript gives us all the benefits of ES6 (ECMAScript 6), plus more productivity.
* TypeScript can help us to avoid painful bugs that developers commonly run into when writing JavaScript by type checking the code.
* Powerful type system, including generics.
* TypeScript is nothing but JavaScript with some additional features.
* Structural, rather than nominal.
* TypeScript code can be compiled as per ES5 and ES6 standards to support the latest browser.
* Aligned with ECMAScript for compatibility.
* Starts and ends with JavaScript.
* Supports static typing.
* TypeScript will save developers time.
* TypeScript is a superset of ES3, ES5, and ES6.
* Functions with optional parameters.
* Functions with REST parameters.
* Generics support.
* Modules support.

## Starting 🚀

_Clone the repository and enter folder by folder to follow the progress._

### Pre requirements 📋

_For the correct functioning of the repository it is necessary to have_
* Browser
* IDEs anyone
  * VS code
  * Sublime
  * Aton
  * IntelliJ IDEA
  * Others
* Node js last version
* npm last version

### installation 🔧
_enter to cmd how administrator_
* TypeScript

  ```
  C:\windows\system32> npm install -g typescript
  ``` 
  * verify the correct installation
  ``` typescript
  tsc --version //it should show the typescrip version 
  ```

## First Demo ⚙️

_we will do a small project to start with the learning of typescript_
* Stepts
  * create folder to project
  ```
  C:\Users\Name User\Documents> MD Demo
  ```
  * enter to folder
  ```
  C:\Users\Name User\Documents> cd Demo
  ```
  * create file greeter.ts
  ```
  C:\Users\Name User\Documents\Demo> COPY CON myFirstTs.ts
  ```
  * add in greeter.ts
  ``` ts 
  let hellow:string = 'Hellow'; //this variable will always be of type string
  let count:number = 404; //this variable will always be of type number
  let anything:any = 303; //this variable does not have type
  const PI_NUMBER = 3.141516; //this variable will always be first value also const has to be in Upercase

  function myFirstTs() {
      console.log(`${hellow} variables ${count}`);
      console.log(anything)
      anything = 'change the type in variable';
      console.log(anything)
      console.log(PI_NUMBER)
  }
  myFirstTs();
  ```
  * create file index.html
  ```
   C:\Users\Name User\Documents\Demo> COPY CON index.html
  ```
  * add in index.html
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>TypeScrip</title>
  </head>
  <body>
      <div>
          <h1>MY first Function in TypeScript</h1>
      </div>
      <script src="myFirstTs.js"></script>
  </body>
  </html>
  ```
  * Initialize the compilation options
  ```
  C:\Users\Name User\Documents\Demo> tsc -init
  ```
  _With this code you will have to create a file tsconfig.json_
  * Compiling your code
  ```
  C:\Users\Name User\Documents\Demo> tsc myFirstTs.ts
  ```
  _If you do not want to perform this action each time you make a change, we recommend that you use:_
  ```
  C:\Users\Name User\Documents\Demo> tsc -w
  ```
## Basic Types 🛠️
_Like JavaScript and any other languages, TypeScript also provides basic data types to handle numbers, strings etc. Some common data types in TypeScript are: number, string, boolean, enum, void, null, undefined, any, never, Array and tuple._

### number types
_In TypeScript, numbers are floating point values having the type as number. You can assign any numeric values including decimals, hexadecimals, binary and octal literals. But to use binary and octal literals, you must use a TypeScript version which follows ECMAScript 2015 or higher._
```ts
let decimalValue: number = 10;
let floatValue: number = 3.141516;
let hexaDecimalValue: number = 0xf10b;
let binaryValue: number = 0b110100;
let octalValue: number = 0o410;
```
### string types
_When you want to use textual data, the string types are used and is denoted by the keyword string. Like JavaScript, TypeScript also uses double quotes (") and single quotes (') to surround the string value._
```ts
let firstName: string = "Jorge"; // using double quotes
let lastName: string = 'Perez'; // using single quotes
```
### boolean types
_To use boolean data types in TypeScript, for declaring variables, use the boolean keyword. Here's a simple code to declare a boolean type variable_
```ts
let isMonday: boolean;
isMonday = true;
isMonday = false
isMonday = 'not'//error just recieved boolean type
```
### enum types
_A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values._
```ts
enum Gender { Female, Male }
let human: Gender;
human = Gender.Female;
```
### void types
_In general, this type of data types are used in functions that do not return any value. For example, function showMessage(): void { ... }. In TypeScript, you can also declare a variable of type void, but can only assign undefined or null to them. We will discuss about undefined and null types in the next points._
### any types
_While writing code you are unsure of the data type of a value, due to its dynamic content, you can use the keyword any to declare the said variable. This is often useful when you are seeking input from user or a 3rd party library/service. This is also useful when you are declaring an array which has a mixed data type. It's just like the dynamic keyword available in C#._
```ts
let dynamicValue: any = "Kunal Chowdhury";
dynamicValue = 100;
dynamicValue = 0b1100101;
dynamicValue = true;

let dynamicList: any[] = [ "Kunal Chowdhury",
                           "Free User",
                           21,
                           true
                         ];
```

* [More Types](https://www.typescriptlang.org/docs/handbook/basic-types.html) - oficial web TypeScript
* [Examples](https://github.com/PaoloMoscoso/TypeScript/tree/master/Variables) - examples about this topic



_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.


## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Andrés Villanueva** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 
