// Write a closure that can create and modify objects. 
// All created objects should be kept and be accessible by name. You should support the following functionality:

// · create <name> - creates an object with the supplied <name>
// · create <name> inherits <parentName> - creates an object with the given <name>, that inherits from the parent object with the <parentName>
// · set <name> <key> <value> - sets the property with key equal to <key> to <value> in the object with the supplied <name>.
// · print <name> - prints the object with the supplied <name> in the format "<key1>:<value1>,<key2>:<value2>…" - the printing 
// should also print all inherited properties from parent objects. Inherited properties should come after own properties.

// Input
// The input will come as an array of strings - each string represents a command to be executed from your closure.

// Output
// For every print command - you should print on the console all properties of the object in the above-mentioned format.

// Constraints
// · All commands will always be valid, there will be no nonexistent or incorrect input.

function objectManager(commands) {
    
    const objects = {};

    const commandProcessor = {
        create: (name, inherit, parentName) => {
            objects[name] = inherit ? Object.create(objects[parentName]) : {};
        },
        set: (name, key, value) => {
            objects[name][key] = value;
        },
        print: (name) => {
            const result = [];
            for (const key in objects[name]) {
                result.push(`${key}:${objects[name][key]}`);
            }
            console.log(result.join(','));
        }
    };

    commands.forEach(command => {
        const [action, name, secondArg, thirdArg] = command.split(' ');
        if (action === 'create') {
            commandProcessor.create(name, secondArg === 'inherit', thirdArg);
        } else if (action === 'set') {
            commandProcessor.set(name, secondArg, thirdArg);
        } else if (action === 'print') {
            commandProcessor.print(name);
        }
    });
}


objectManager(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);
