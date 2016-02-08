### netstat

The `netstat` command displays active port mappings, name resolution information, and links for the specified container.

```
Usage: turbo netstat <container>

<options> available:
     --format=VALUE         Use json format for output
```

#### Examples:

```
> turbo run --route-add=tcp://8080:80 --hosts=localhost:lhost --link=0218:service -d <image> 63621076457c4b4fb7fff3fcbfda06b1
> turbo netstat 6362

Active port mappings:
49767:80

Name resolution overrides:
localhost lhost

Container links:
021833f5b86c4a80980eff9e5e9f39e2 as service
```

**Note**: only active port mappings are printed. Since the container in the example did not expose any service on tcp port 8081, the mapping corresponding to flag `--route-add=:8081` was not present in the output.

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain `ports`, `dns` and `containerLinks` arrays with information about container or an `error` object if command failed.