import { CustomError } from '@utilities/CustomError';

export const timeoutOptions = {
  // Optional. This will be the default timeout for all endpoints.
  // If omitted there is no default timeout on endpoints
  timeout: 3000,

  // Optional. This function will be called on a timeout and it MUST
  // terminate the request.
  // If omitted the module will end the request with a default 503 error.

  onTimeout: function (req, res) {
    let err = new CustomError(503, 'Service unavailable. Please retry.');
    res.status(503).json(err);
  },

  // Optional. Define a function to be called if an attempt to send a response
  // happens after the timeout where:
  // - method: is the method that was called on the response object
  // - args: are the arguments passed to the method
  // - requestTime: is the duration of the request
  // timeout happened
  onDelayedResponse: function (req, method, args, requestTime) {
    console.log(`Attempted to call ${method} after timeout`);
  },

  // Optional. Provide a list of which methods should be disabled on the
  // response object when a timeout happens and an error has been sent. If
  // omitted, a default list of all methods that tries to send a response
  // will be disable on the response object
  disable: ['write', 'setHeaders', 'send', 'json', 'end'],
};
