# Jack
A simple logging utility for Node.

## Documentation

### Types
The following entry types are currently available:
- 'info' - Used for general output or info, defaults to blue text.
- 'success' - Used for messages indicating success or completion, defaults to green text.
- 'warning' - Used for messages warning the user about a problem or potential problem, defaults to orange text.
- 'error' - Used for notifying the user of an error
- 'detail' - Used for adding additional data to other log levels, has no default text color.
- 'generic' - Anything that isn't equal too one of the above types, takes on the given label, type, or logger name as a label, has no default text color.

### Preferences
The following preferences are currently available:
- 'name' - String - Used as a fallback label, defaults to 'logger'
- 'detailIdentifier' - String - Used to signify that a log entry is a detail, defaults to '|'
- 'showColor' - Boolean - Signifies whether to use colored output or not, defaults to 'true'
- 'showTime' - Boolean - Signifies whether to include the time a entry was logged, defaults to 'true'
- 'showLabel' - Boolean - Signifies whether to include a entry's label, defaults to 'true'

### Methods
The following methods are currently available:
- create - `static create(preferences)` - Returns a new Logger object.
- log - `log(message, type, details, label, color)` - Used to log a new entry to the screen.
- createMessage - `createMessage(message, type, details, label, color)` - Returns a string, used internally.
- createDetails - `createDetails(details, color)` - Returns a string, used internally.
- createTimestamp - `createTimeStamp()` - Returns a string, used internally.
- createLabel - `createLabel(label)` - Returns a string, used internally.

## Getting Started
The `jack-logger` module exports a javascript class. In the object returned, there's a `create` method, it accepts an object as a parameter, this object should store all your preferences. Most of Jack's methods are intended for internal use. The most important method is `log`, this is used to write new entries to the console.

```
var logger = require('jack-logger').create({
    name: 'Jack the Logger',
    showTime: false,
    showLabel: true,
    showColor: true,
    detailIdentifier: '|'
});

logger.log('This is my first log! Hello World!', 'success', ['This is my first detail!', 'This is my second detail!']);
```

Simple, right?

