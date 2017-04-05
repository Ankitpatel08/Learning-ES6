import restParameters from "./rest-function";
import anonymousFunc from "./anonymous-function";
import lambdaFunc from "./lambda-function";
import eventHandler from "./event-handler";
import dialogBoxes from "./dialog-boxes";
import objects from "./objects";
import numbers from "./numbers";
import strings from "./strings";
import arrays from "./arrays";
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