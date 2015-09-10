### upgrade

Use the `upgrade` command to upgrade your Turbo subscription and get access to cross-browser testing with the browser sandbox, private repositories and automated build tools.

```
Usage: turbo upgrade <plan>

<options> available:
     --format=VALUE         Use json format for output
```

The available plans include:

- `build` - Unlimited public and private repositories, automated builds and access to the browser sandbox.

- `build-test` - All of the features of the `build` subscription plus unlimited selenium testing.

- `build-test-deploy` - All the features of the `build-test` subscription plus on-premise capabilities with Turbo Server.

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `redirect` object with URL to page that allows upgrade or an `error` object if command failed.