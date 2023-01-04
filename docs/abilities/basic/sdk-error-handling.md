---
id: sdk-error-handling
sidebar_position: 12
description: sdk error handling。
---

# Sdk Error Handling

## Requirements

| **ONES** |
| :------- |
|          |

## Overview

When using the sdk methods provided by ONES, some error scenarios may occur. There is a standard processing method for how to catch and identify errors:

- Each sdk package has its own error type, for example, the ones-op/node-file package has the error type FileError, and the ones-op/node-database package has the error type DBError.
- The error types corresponding to the sdk package and the error scenarios corresponding to the sdk can be found in the corresponding api documentation.
- After knowing the error type corresponding to the sdk package, the plug-in developer can judge and obtain the error information by means of instead of.

## Usage

#### wrong description

Although each sdk package has its own error types, the corresponding types have common attributes, which are composed of reason, statusCode, level, and errcode.

- reason: Briefly describe the reason for the error.
- level: Error level, which is divided into error and warning levels. An error at the error level indicates that an error has occurred that blocks related actions, and an error at the warning level indicates that an error has occurred but does not block related actions.
- statusCode: It is consistent with the http status code, for example, 500 is an error on the platform side, and 400 is an error caused by the incorrect usage of the sdk caller.
- errcode: The error code corresponding to the error, each error code corresponds to an error scenario.

#### Examples

Here we use the makeDir method in the @ones-op/node-file package as an example.

This method has an error scenario. When the path passed in by the plug-in developer is not a legal path, a related error will be reported.

```typescript
try {
  await makeDir('../tmp/test')
} catch (e) {
  if (e instanceof FileError) {
    // InvalidParameter
    console.log(e.errcode)
    // 400
    console.log(e.statusCode)
    // Invalid parameter.
    console.log(e.reason)
    // error
    console.log(e.level)
  }
}
```
