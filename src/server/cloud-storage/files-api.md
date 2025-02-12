# Overview

The following documentation describes the Files API implemented by the Turbo Server Portal. The Files API allows users to view and manage files stored in their connected cloud storage accounts. 

For more information cloud storage integrations and connecting cloud storage accounts, see:
* [OneDrive](../../server/cloud-storage/onedrive.html)
* [Dropbox](../../server/cloud-storage/dropbox.html)
* [Google Drive](../../server/cloud-storage/google-drive.html)
* [Filr](../../server/cloud-storage/filr.html)
* [File Share (SMB)](../../server/cloud-storage/file-share.html)
* [End User Guide](../../server/cloud-storage/end-user.html#end-user-guide) 

All request paths described in this document are relative to the base Portal URL: `https://{portal}`

### Authorization

All requests expect an `X-Turbo-Ticket` header with a JWT access token value. If this token is missing or invalid, a **401** unauthorized response error is returned.

### Request and response formats

#### **Date format**

All dates returned by the Files API are in UTC time and ISO 8601 format:

`2015-05-15T15:50:38Z`

#### Resource Address Format

File resources are uniquely located by their resource address. The resource address is formatted in standard unix path formatting (ex. `/my-onedrive/path/to/file.txt`). The root path segment is the storage provider slug, which identifies the remote storage provider that contains the resource, and the remaining path segments are the resource address within the remote storage provider.

The Files API metadata object include the resource’s address in its **address** field. Resource addresses should be used as-is and should not be manually altered or created.

The root folder is addressed by an empty string or `/`.

### Endpoints

#### Create Folder

Creates a new folder at the given path in the storage provider.

```json
POST /rest/0.1/files/create-folder

Request Body:
A CreateFolderRequest object

Response:
A FolderMetadata object
```

##### Example

```json
POST /rest/0.1/files/create-folder

Request Headers:
Content-Type: application/json

Request Body:
{
  "parentAddress": "/fsshare/Homework",
  "name": "chemistry"
}

Response Body:
{
  "address": "/fsshare/Homework/chemistry",
  "path": "/Shared Files/Homework/chemistry",
  "name": "chemistry",
  "itemType": "folder",
  "created": "2022-07-19T23:55:16.201Z",
  "modified": "2022-07-19T23:55:16.201Z",
  "permissions": [
    "read",
    "write",
    "delete"
  ],
  "attributes": []
}
```

#### Delete

Deletes the file or folder at the given path from the storage provider.

```
DELETE /rest/0.1/files/delete

Request Body:
A ResourceRequest object

Response:
<empty>
```

##### Example

```json
DELETE /rest/0.1/files/delete

Request Headers:
Content-Type: application/json

Request Body:
{
  "address": "/googledrive/12Df5FLeWhGtN6WgJkR23VKpq8NvUxNKx"
}

Response:
<empty>
```

#### Download File

Downloads the file content for the given path from the storage provider. Response headers are passed through as-is from the storage provider.

```
POST /rest/0.1/files/download

Request Body:
A ResourceRequest object

Response:
File content
```

##### Example

```json
POST /rest/0.1/files/download

Request Headers:
Content-Type: application/json

Request Body:
{
  "address": "/googledrive/12Df5FLeWhGtN6WgJkR23VKpq8NvUxNKx"
}

Response Body:
File content
```

#### Get Metadata

Returns a metadata object that includes detailed information about the file or folder.

```json
POST /rest/0.1/files/get-metadata

Request Body:
A ResourceRequest object

Response:
A FileMetadata or FolderMetadata object
```

##### Example

```json
POST /rest/0.1/files/get-metadata

Request Headers:
Content-Type: application/json

Request Body:
{
  "address": "/googledrive-turbo/1iP4Os3sJItDjf2OcEEFqyKOB1BRb-xj2"
}

Response Body:
{
  "address": "/googledrive-turbo/1iP4Os3sJItDjf2OcEEFqyKOB1BRb-xj2",
  "path": "/Google Drive Turbo/clients/turbo-client.vhd",
  "name": "turbo-client.vhd",
  "itemType": "file",
  "created": "2022-07-18T21:42:37.343Z",
  "modified": "2022-07-18T21:42:37.975Z",
  "size": 252157952,
  "permissions": [
    "read",
    "write",
    "delete"
  ],
  "attributes": []
}
```

#### List Directory

Returns a list of file and folder metadata objects that are contained within the specified folder.

```
POST /rest/0.1/files/list-folder

Request Body:
A ResourceRequest object

Response:
A ListFolderResult object
```

##### Example

```json
POST /rest/0.1/files/list-folder

Request Headers:
Content-Type: application/json

Request Body:
{
  "address": "/fsshare/homework"
}

Response:
{
  "items": [
    {
      "address": "/fsshare/homework/Prime_Numbers.txt",
      "path": "/Shared Files/homework/Prime_Numbers.txt",
      "name": "Prime_Numbers.txt",
      "itemType": "file",
      "size": 7212,
      "created": "2022-07-14T22:38:28.054Z",
      "modified": "2022-07-15T00:32:06.474Z",
      "permissions": [
        "read",
        "write",
        "delete"
      ],
      "attributes": []
    },
    ...
  ]
}
```

#### Move

Moves a file or folder from the source address to the destination address. If the destination address conflicts with an existing file, that file will be overwritten.

```
POST /rest/0.1/files/move

Request Body:
A MoveRequest object

Response:
A FileMetadata or FolderMetadata object
```

##### Example

```json
POST /rest/0.1/files/move

Request Headers:
Content-Type: application/json

Request Body:
{
	"fromAddress": "/onedrive/path/to/turbo-client-22.6.vhd", 
	"toParentAddress": "/onedrive"
}

Response:
{
  "address": "/onedrive/turbo-client-22.6.vhd",
  "path": "/OneDrive/turbo-client-22.6.vhd",
  "name": "turbo-client-22.6.vhd",
  "itemType": "file",
  "created": "2022-07-18T21:42:37.343Z",
  "modified": "2022-07-18T21:42:37.975Z",
  "size": 252157952,
  "permissions": [
    "read",
    "write",
    "delete"
  ],
  "attributes": []
}
```

#### Rename

Renames a file or folder from the address with the specified name. If the new name conflicts with an existing file, that file will be overwritten.

```
POST /rest/0.1/files/rename

Request Body:
A RenameRequest object

Response:
A FileMetadata or FolderMetadata object
```

##### Example

```json
POST /rest/0.1/files/rename

Request Headers:
Content-Type: application/json

Request Body:
{
	"address": "/onedrive/turbo-client-22.6.vhd", 
	"name": "turbo-client.vhd"
}

Response:
{
  "address": "/onedrive/turbo-client.vhd",
  "path": "/OneDrive/turbo-client.vhd",
  "name": "turbo-client-22.6.vhd",
  "itemType": "file",
  "created": "2022-07-18T21:42:37.343Z",
  "modified": "2022-07-18T21:42:37.975Z",
  "size": 252157952,
  "permissions": [
    "read",
    "write",
    "delete"
  ],
  "attributes": []
}
```

#### Upload File

Uploads a file to the storage provider. If the upload would conflict with an existing file, that file will be overwritten.

If `Allocation-Size` is defined and valid, then a file of that size will be created and any file content will be ignored. This can be used to check the disk quota before uploading the file content.

```
POST /rest/0.1/files/upload

Request Headers:
Parent-Address - The resource address of the parent folder to which the file will be uploaded
File-Name - The name that will be assigned to the uploaded file
Allocation-Size - Creates a file of the allocation size in bytes, filled with zero bytes

Request Body:
<File content>

Response:
A FileMetadata object
```

##### Example

```json
POST /rest/0.1/files/upload

Request Headers:
Parent-Address: /my-onedrive/logs
File-Name: app1-logs_20220720_110704.zip
Content-Type: application/octet-stream

Request Body:
<File content>

Response:
{
  "address": "/my-onedrive/logs/app1-logs_20220720_110704.zip",
  "path": "/My OneDrive/logs/app1-logs_20220720_110704.zip",
  "name": "app1-logs_20220720_110704.zip",
  "itemType": "file",
  "created": "2022-07-20T22:56:35.520Z",
  "modified": "2022-07-20T22:56:35.520Z",
  "size": 2898334,
  "permissions": [
    "read",
    "write",
    "delete"
  ],
  "attributes": []
}
```

### Errors

The Files API errors return an error status code in addition to a JSON object in the response body with additional details.

The following section describes the various error responses that should be handled by consuming clients.

#### 400: Bad Request

A 400 error response indicates that the provided arguments were invalid or the requested operation failed. For example:

- A required header or JSON body was not provided
- An invalid header or JSON body was provided
- The supplied arguments resulted in an endpoint-specific error, such as an missing resource, path conflict, incorrect file type, etc.

For example, a list-folder request with an address that does not point to a file or folder would return a 400 error with the following JSON:

```json
{
  "code": "itemNotFound",
  "message": "The resource could not be found."
}
```

The message may also contain additional information about the error. To resolve this issue, check the error response and adjust your arguments accordingly.

#### 401: Unauthorized Response

A 401 error response indicates that the user is not authorized to access the requested file or folder. This occurs when then user did not provide a valid ticket.

For example, a get-metadata request with an expired ticket would return a 401 error with the following JSON:

```json
{
  "code": "unauthorized",
  "message": "The caller is not authenticated."
}
```

To resolve this issue, check the error response and adjust your provided authentication header accordingly.

#### 5xx: Server Error

A 5xx error response indicates that an unexpected error occurred while processing the request.

5xx errors are not guaranteed to return a JSON response body.

#### Error Codes

| Reason Code | Description | Code |
| --- | --- | --- |
| accessDenied | Access to resource denied | 400 |
| cannotCopySharedFolder | Cannot copy a shared folder. | 400 |
| cannotDeleteRootFolder | Cannot delete a root folder. | 400 |
| cannotModifyRootFolder | Cannot modify root folder. | 400 |
| cannotModifyRootFolderContent | Cannot modify root folder content. | 400 |
| cannotMoveBetweenRootFolders | Cannot move resources between root folders. | 400 |
| cannotMoveIntoRootFolder | Cannot move resources into a root folder. | 400 |
| cannotMoveRootFolder | Cannot move a root folder. | 400 |
| cannotMoveSharedFolder | Cannot move a shared folder. | 400 |
| cannotNestSharedFolder | Cannot nest a shared folder. | 400 |
| cannotTransferOwnership | Cannot transfer ownership. | 400 |
| duplicateOrNestedPaths | The request contains duplicate or nested paths. | 400 |
| fileContentRestricted | The file content is restricted. | 400 |
| fileTypeRestricted | The file type is restricted. | 400 |
| fileTypeUnsupported | The file type is not supported by the requested operation. | 400 |
| fileTooLarge | The file is too large. | 400 |
| folderCannotContainItself | A folder cannot be added as a subfolder of itself. | 400 |
| insufficientPermissions | The caller does not have sufficient permissions for the requested operation. | 400 |
| invalidRequest | The request is malformed or incorrect. Please check the request body and headers and try again.  | 400 |
| itemAlreadyExists | The resource already exists. | 400 |
| itemLocked | The resource is busy or locked. Please wait or stop the locking process and try again. | 400 |
| itemNotFound | The resource could not be found. | 400 |
| methodNotAllowed | The resource does not support this operation. | 400 |
| notFile | The requested path is not a file. | 400 |
| notFolder | The requested path is not a folder. | 400 |
| operationNotPermitted | The operation is not permitted. Please check that the service user has permission to perform the action on the file. | 400 |
| quotaLimitReached | The caller has reached their quota limit. | 400 |
| serverError | The server encountered an unexpected error. | 500 |
| tooManyFiles | The request contains too many files. | 400 |
| tooManyWriteOperations | There are too many active write operations. Please wait and try again. | 400 |
| unauthorized | The caller is not authenticated. | 401 |

### Object Models

#### Request Objects

##### CreateFolderRequest

A JSON object sent in named resource request bodies, such as create folder.

- **parentAddress** - {ResourceAddress} The address of the parent folder
- **name** - {String} The name of the file or folder

##### MoveRequest

A JSON object sent in move request bodies.

- **fromAddress** - {ResourceAddress} The address of the source file or folder
- **toParentAddress** - {ResourceAddress} The address of the parent folder that will contain the moved file or folder

##### RenameRequest

A JSON object sent in rename request bodies.

- **address** - {ResourceAddress} The address of the resource that will be renamed
- **name** - {String} The new name of the file or folder

##### ResourceRequest

A JSON object sent in resource request bodies, such as list folder.

- **address** - {ResourceAddress} The address of the file or folder

#### Response Objects

##### ListFolderResult

A JSON object returned in the list-folder response body.

- **items** - {Array of FileMetadata | FolderMetadata} A list of file or folder metadata objects

##### FileMetadata

Metadata that describes various attributes about a file.

- **address** - {ResourceAddress} A string that uniquely locates the file
- **path** - {String} The display path to the file. Paths are not guaranteed to be unique and cannot be used to lookup files.
- **name** - {String} The file display name
- **itemType** - {String} The item type. Supported values are `file` and `folder`
- **size** - {Number} The size of the file in bytes
- **modified** - {Timestamp} The datetime at which the file was last modified on the server, in ISO 8601 datetime format
- **created** - {Timestamp} The datetime at which the file was created on the server, in ISO 8601 datetime format
- **permissions** - {String[]} A list of strings that specify the user’s file permissions. Valid values are `read`, `write`, and `delete`.
- **attributes** - {String[]} A list of strings that specify the file attributes. For example, `readonly` or `hidden`.
- **webViewLink** - {String} A URL to view the file in an external web viewer, such as Google Sheets. Can be absent if no external web viewer exists for the file.

##### FolderMetadata

Metadata that describes various attributes about a folder.

- **address** - {ResourceAddress} A string that uniquely locates the folder
- **path** - {String} The display path to the folder. Paths are not guaranteed to be unique and cannot be used to lookup files.
- **name** - {String} The folder display name
- **itemType** - {String} The file type. Supported values are `file` and `folder`
- **modified** - {Timestamp} The datetime at which the file was last modified on the server, in ISO 8601 datetime format
- **created** - {Timestamp} The datetime at which the file was created on the server, in ISO 8601 datetime format
- **permissions** - {String[]} A list of strings that specify the user’s folder permissions. Valid values are `read`, `write`, and `delete`.
- **attributes** - {String[]} A list of strings that specify the folder attributes. For example, `readonly` or `hidden`.

#### Types

##### ResourceAddress

A string that uniquely locates a file resource in [Resource Address Format](#request-and-response-formats-resource-address-format).

### Examples

#### Download all files to a local folder

The following C# console application demonstrates how a client can iterate through a user's connected cloud storage providers and download all files and folders to a local folder:

```
using System.Net.Http.Headers;
using System.Text.Json;
using System.Text.Json.Serialization;

internal class Program
{
    const string ApiServer = "https://<your-server-hostname>";

    private static async Task Main(string[] args)
    {
        // For demonstration purposes these values are left as hardcoded placeholders.
        // In practice these values should be passed in or loaded dynamically.
        var outputFolder = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "out");
        var accessToken = "<jwt-token>";

        await CopyTurboDriveToLocal("", outputFolder, accessToken);

        Console.WriteLine("Press any key to exit");
        Console.In.ReadLine();
    }

    /// <summary>
    /// Recursively, asynchronously copies all files and folders from the remote address to the outputfolder.
    /// </summary>
    private static async Task CopyTurboDriveToLocal(string remoteAddress, string outputFolder, string accessToken)
    {
        var listFolderArgs = new AddressedResourceArgs() { Address = remoteAddress };
        var listFolderRes = await ListFolder(listFolderArgs, accessToken);

        if (listFolderRes != null)
        {
            var listFolderTasks = new List<Task>();
            var downloadTasks = new List<Task>();

            if (!Directory.Exists(outputFolder))
            {
                Directory.CreateDirectory(outputFolder);
            }

            foreach (var item in listFolderRes.Items)
            {
                if (item.IsFile)
                {
                    var downloadFileArgs = new AddressedResourceArgs() { Address = item.Address };
                    var filePath = Path.Combine(outputFolder, item.Name);

                    // Create a task that will download this file asynchrounosly
                    var downloadTask = Task.Run(async () =>
                    {
                        try
                        {
                            using (var downloadStream = await DownloadFile(downloadFileArgs, accessToken))
                            using (var fileStream = File.OpenWrite(filePath))
                            {
                                if (downloadStream != null)
                                {
                                    downloadStream.CopyTo(fileStream);
                                }
                            }
                        }
                        catch (Exception e)
                        {
                            Console.Error.WriteLine($"Failed to download file {filePath} with error: {e.Message}");
                        }
                    });
                    downloadTasks.Add(downloadTask);
                }
                else
                {
                    // Create a task that will list this subfolder asynchrounosly
                    var listFolderTask = Task.Run(async () =>
                    {
                        await CopyTurboDriveToLocal(item.Address, Path.Combine(outputFolder, item.Name), accessToken);
                    });
                    listFolderTasks.Add(listFolderTask);
                }
            };

            // Concurrently download all files and list all subfolders.
            await Task.WhenAll(downloadTasks.Concat(listFolderTasks).ToArray());
        }
        else
        {
            Console.Error.WriteLine($"Failed to download folder {remoteAddress}");
        }
    }

    /// <summary>
    /// Asynchronously fetches a download stream for the requested resource.
    /// Returns null if the request cannot be processed or if an error response is returned
    /// </summary>
    private static async Task<Stream> DownloadFile(AddressedResourceArgs args, string accessToken)
    {
        try
        {
            var uri = new Uri(ApiServer + "/rest/0.1/files/download");
            var reqContent = new StringContent(JsonSerializer.Serialize(args));
            reqContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            reqContent.Headers.Add("X-Turbo-Ticket", accessToken);

            var httpClient = new HttpClient();
            var res = await httpClient.PostAsync(uri, reqContent);
            if (res.IsSuccessStatusCode)
            {
                return await res.Content.ReadAsStreamAsync();
            }
            else
            {
                var resContent = await res.Content.ReadAsStreamAsync();
                var result = JsonSerializer.Deserialize<ErrorResult>(resContent);

                if (result == null)
                {
                    Console.Error.WriteLine($"DownloadFile query for address {args.Address} returned error status {res.StatusCode}");
                }
                else
                {
                    Console.Error.WriteLine($"DownloadFile query for address {args.Address} returned error status {res.StatusCode} with details: {result.Code}, {result.Message}");
                }
                return null;
            }
        }
        catch (Exception e)
        {
            Console.Error.WriteLine($"DownloadFile query for address {args.Address} failed with error: {e.Message}");
            return null;
        }
    }

    /// <summary>
    /// Asynchronously lists the folder contents of the requested resource
    /// Returns null if the request cannot be processed or if an error response is returned
    /// </summary>
    private static async Task<ListFolderResult> ListFolder(AddressedResourceArgs args, string accessToken)
    {
        try
        {
            var uri = new Uri(ApiServer + "/rest/0.1/files/list-folder");
            var reqContent = new StringContent(JsonSerializer.Serialize(args));
            reqContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            reqContent.Headers.Add("X-Turbo-Ticket", accessToken);

            var httpClient = new HttpClient();

            var res = await httpClient.PostAsync(uri, reqContent);
            if (res.IsSuccessStatusCode)
            {
                var resContent = await res.Content.ReadAsStreamAsync();
                var result = JsonSerializer.Deserialize<ListFolderResult>(resContent);
                return result;
            }
            else
            {
                var resContent = await res.Content.ReadAsStreamAsync();
                var result = JsonSerializer.Deserialize<ErrorResult>(resContent);

                if (result == null)
                {
                    Console.Error.WriteLine($"ListFolder query for address {args.Address} returned error status {res.StatusCode}");
                }
                else
                {
                    Console.Error.WriteLine($"ListFolder query for address {args.Address} returned error status {res.StatusCode} with details: {result.Code}, {result.Message}");
                }

                return null;
            }
        }
        catch (Exception e)
        {
            Console.Error.WriteLine($"ListFolder query for address {args.Address} failed with error: {e.Message}");
            return null;
        }
    }

    public class AddressedResourceArgs
    {
        [JsonPropertyName("address")]
        public string Address { get; set; }
    }

    public class ListFolderResult
    {
        [JsonPropertyName("items")]
        public List<ItemMetadata> Items { get; set; }
    }

    public class ItemMetadata
    {
        [JsonPropertyName("address")]
        public string Address { get; set; }
        [JsonPropertyName("attributes")]
        public string[] Attributes { get; set; }
        [JsonPropertyName("created")]
        public string Created { get; set; }
        [JsonPropertyName("itemType")]
        public string ItemType { get; set; }
        [JsonPropertyName("modified")]
        public string Modified { get; set; }
        [JsonPropertyName("name")]
        public string Name { get; set; }
        [JsonPropertyName("path")]
        public string Path { get; set; }
        [JsonPropertyName("permissions")]
        public string[] Permissions { get; set; }
        [JsonPropertyName("Size")]
        public ulong Size { get; set; }
        [JsonPropertyName("webViewLink")]
        public string WebViewLink { get; set; }

        public bool IsFile
        {
            get
            {
                return ItemType == "file";
            }
        }
    }

    public class ErrorResult
    {
        [JsonPropertyName("code")]
        public string Code { get; set; }
        [JsonPropertyName("message")]
        public string Message { get; set; }
    }
}
```