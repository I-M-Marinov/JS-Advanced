// Using a closure, create an inner object to process list commands. The commands supported should be the following:

// · add <string> - adds the following string in an inner collection.
// · remove <string> - removes all occurrences of the supplied <string> from the inner collection.
// · print - prints all elements of the inner collection joined by ",".

// Input
// The input will come as an array of strings - each string represents a command to be executed from the command execution engine.

// Output
// For every print command - you should print on the console the inner collection joined by ",".


function processListCommands(commands) {

    let collection = [];

    const commandProcessor = {
        add: (string) => collection.push(string),
        remove: (string) => {
            collection = collection.filter(item => item !== string);
        },
        print: () => {
            console.log(collection.join(','));
        }
    };

    commands.forEach(command => {
        const [action, value] = command.split(' ');
        commandProcessor[action](value); 
    });
}

processListCommands(['add pesho', 'add george', 'add peter', 'remove peter','print']);
processListCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);