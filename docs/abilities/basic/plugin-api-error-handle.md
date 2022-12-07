# Plugin API error handle

## Requirements

| **ONES** |
| -------- |
| 3.6+     |

## Overview

When the ONES API generates an error, it needs to return a specific error format, so that the UI can display a friendly error prompt. Therefore, all API provided to UI calls need to return error information in a standard format. For example, when a plugin uses the [ONES API hijacking ability](../business/ONES-API-operation/ONES-API-hijacking.md) to hijack an API, since the original API is replaced, an error message must be returned in a standard format when an error occurs. **The plugin API error handle ability** provides the specification of error information, so that the plugin API can return errors in the correct form and display its own error prompts.

## Usage

When the plugin API reports an error, the error content can be returned according to the following data structure:

```typescript
return {
  body: {
    code: 502,
    reason: 'Plugin service is unavailable',
    type: 'error',
    model: 'plugin.xxx',
  },
}
```

Return param description

| Param  | Type             | Description                                                |
| ------ | ---------------- | ---------------------------------------------------------- |
| code   | number           | Request error code                                         |
| reason | string           | Error cause description                                    |
| type   | warning \| error | Error level                                                |
| model  | plugin.xxx       | Wrong model (with `plugin.` return value at the beginning) |
