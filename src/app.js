import restParameters from "./rest-function";
import anonymousFunc from "./anonymous-function";
import lambdaFunc from "./lambda-function";
import eventHandler from "./event-handler";
import dialogBoxes from "./dialog-boxes";
import objects from "./objects";
import numbers from "./numbers";
import strings from "./strings";
import arrays from "./arrays";
import collections from "./collections";
import ClassCar from "./class";
import ClassCategory from "./class-inheritance";
import ClassB from "./method-overriding";
import Callback from "./callback";
import promises from "./promises";
import Modules from "./modules";
import css from "./main.css";

//calling function with rest parameters
restParameters('param1','param2');
restParameters('param1','param2','param3');

//calling anonymous function
anonymousFunc(10, 20);

//calling lambda function
lambdaFunc();

//eventHandler
self.eventHandler = new eventHandler();

//dialog boxess
self.dialogBoxes = new dialogBoxes();

//objects
self.objects = new objects();

//numbers
self.numbers = new numbers();

//strings
self.strings = new strings();

//Arrays
self.arrays = new arrays();

//collections
self.collections = new collections();

//classes
var camry = new ClassCar('toyota', 2018);
camry._printDetails();

//static method of ClassCar object
ClassCar.staticFunction();

//instanceof operator
var isCar = camry instanceof ClassCar;
console.log(`instance of operator --> ${isCar}`);

//extended class : class-category
var camryHybrid = new ClassCategory();
camryHybrid._printCategory("hybrid");

// Method Overriding
var objB = new ClassB();
objB._print();

//callback | sync function 
var sync = new Callback();
sync._callSync();

//callback | async function 
var async = new Callback();
async._callAsync();

//exported class : modules
var modules = new Modules('Ankit', 22);
modules._displayDetails();