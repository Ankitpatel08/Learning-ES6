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

    }
}