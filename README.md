# Http Status Codes
A Configuration to help developers use the correct http status codes

## Installation
`meteor add patrickml:http-status`

## Usage
Create an error handling helper function:

*app/lib/errorHandling/throwError.js*

    throwError = function(error, reason, details) {
      var meteorError = new Meteor.Error(error, reason, details);

      if (Meteor.isClient) {
        // this error is never used
        // on the client, the return value of a stub is ignored
        return meteorError;
      } else if (Meteor.isServer) {
        throw meteorError;
      }
    };

In your method:

      'checkSomething': function(param) {
          if (falseLogic) {
              // Where HTTPSTATUS.TOO_MANY_REQUESTS -> 429
              return throwError(HTTPSTATUS.TOO_MANY_REQUESTS, "Just why bro");
          }
       },


## History
v0.0.1: After reviewing  [Wikipedia - List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes), and because winter was coming, this was inevitable to be created.

## Credits
Developers:
Patrick M. Lewis - V 1.0.0 @patrickml

## License

The MIT License (MIT)

Copyright (c) 2015 Patrick M. Lewis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
