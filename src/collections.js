// Collections : Set & Map
// Maps: mapping a key to value
// Sets : similar to array : do not allow duplicate

export default class collections {
    constructor() {
        // Map : Simple key -> value pair
        // syntax : new Map([iterable])
        // set() : function to define key -> value pair
        // get() : function is used to retrieve the value corresponding to spec-
        // ified key | returns undefined if key is not doesn't exist
        var mapEmployee = new Map();
        mapEmployee.set('name', 'Ankit');
        console.log("get value from map", mapEmployee.get('name'));

        //convert two dimensional array into map
        var arrayMap = [[0, 1], [1, 2] , [2, 3]],
            resultMap = new Map(arrayMap);
        console.log("convert array into map", resultMap);

        // Map distinguish between similar values but bear different data types
        // integer key 1 is considered different from string kay "1"

        // Set method is chainable
        var chainMap = new Map();
        chainMap.set('name', 'Ankit')
        .set('age', 22)
        .set('profession', 'software engineer');
        // Check wheather key is available in map or not
        console.log("check key in map", chainMap.has('profession'));
        console.log("chainMap using set() chain", chainMap);

        //======================= Map Methods =======================//

        var mapMethod = new Map();
        mapMethod.set('key1', 'value1')
        .set('key2', 'value2')
        .set('key3', 'value3');

        // 1. Map.clear() : removes all key/value pairs from map object
        mapMethod.clear();
        console.log("map after clear", mapMethod);

        mapMethod.set('key1', 'value1')
        .set('key2', 'value2')
        .set('key3', 'value3');

        // 2. Map.delete(key)
        mapMethod.delete('key1');
        console.log("map after delete key1", mapMethod);

        mapMethod.set('key1', 'value1');

        // 3. map.entries()
        var entries = mapMethod.entries();
        console.log("map: entries", entries.next().value);
        console.log("map: entries", entries.next().value);

        // 4. map.forEach( callback [ , Arguments])
        function callbackMap(key, value) {
            console.log(`forEach key -> value + ${key} -> ${value}`);
        }
        mapMethod.forEach(callbackMap);

        // 5. map.keys() : returns new iterator object referring to the keys
        // 6. map.values() : returns new iterator object referring to the values
        var keysMap = mapMethod.keys(),
            valuesMap = mapMethod.values();

        console.log("map | key1", keysMap.next().value);
        console.log("map | value1", valuesMap.next().value);
        console.log("map | key2", keysMap.next().value);
        console.log("map | value2", valuesMap.next().value);

        // for...of loop
        for (let content of mapMethod.entries()) {
            console.log(`map | for loop | ${content[0]} + ${content[1]}`);
        }

        // WeakMap
        // 1. key must be object
        // 2. keys in weak map can be garbage collected
        // 3. A weakmap cannot be iterated or cleared
        let weakMap = new WeakMap(),
            obj = {};
        weakMap.set(obj, "value");
        console.log("weakMap object", weakMap.has(obj));

        // Sets : array can not contain duplicates

        var setEmployee = new Set('emp1', 'emp2', 'emp3'),
            setSize = setEmployee.size;

            //set.size property : returns the number of values in the set object
            console.log("set size", setSize);

            //================== Set Methods ======================//
            // 1. set.add() : add element in set
            setEmployee.add("emp4");
            console.log("set.add", setEmployee);

            //2. set.clear() : clear all elements
            setEmployee.clear();
            console.log("set after clear", setEmployee);

            setEmployee.add('emp1')
            .add('emp2')
            .add('emp3');

            // 3. set.delete(value) : delete value from set
            setEmployee.delete('emp3');

            setEmployee.add('emp3');

            // 4. set.entries : returns array of [value, value]
            var setEntries = setEmployee.entries();
            console.log("set entries", setEntries.next().value);
            console.log("set entries", setEntries.next().value);

            // 5. forEach : execute specified function for each entry
            function printDetails(value) {
                console.log("set forEach", value);
            }

            setEmployee.forEach(printDetails);

            // 6. set.has(value) : returns boolean
            console.log("set has value", setEmployee.has('emp1'));

            // 7. set.values() : returns new Iterator object that contains
            // the value
            var setValues = setEmployee.values();
            console.log("set values", setValues.next().value);
            console.log("set values", setValues.next().value);

            // WeakSet : only contains objects, cannot be iterated
            var weakSet = new WeakSet();
            let obj1 = {
                    'key1': 'value1'
                },
                obj2 = {
                    'key2': 'value2'
                };

            weakSet.add(obj1)
            .add(obj2);
            console.log("weakset object check", weakSet.has(obj1));


    }
}