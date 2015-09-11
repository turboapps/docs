### upgrade

Use the `upgrade` command to upgrade your Turbo subscription and get access to cross-browser testing with the browser sandbox, private repositories and automated build tools.

```
Usage: turbo upgrade <plan>

<options> available:
     --format=VALUE         Use json format for output
```

The available plans include:

- `pro` - Unlimited container storage, unlimited concurrent VMs and 5 private repos

- `dev` - All of the features of the `pro` subscription. Plus unlimited private repos and online sandbox tools (Browser-, SQL- and Selenium sandbox)

- `team` - All the features of the `dev` subscription. Plus 3 users included.

For details, see [Pricing](https://turbo.net/pricing)

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `redirect` object with URL to page that allows upgrade or an `error` object if command failed.