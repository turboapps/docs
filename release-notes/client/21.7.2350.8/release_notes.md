The August 2021 update to Turbo Client includes the following reliability and experience improvements:

- Improved session state management and reporting to enable new Server 21.7 features. See the Server 21.7 release notes for more details.
- Added User Agent analytics reporting.
- Fixed permissions to metadata files when installed and configured for **All Users**.
- Fixed permissions when subscribing to a workspace as **All Users**.
- Improved **turbo config --add-trusted-sources** command by defaulting to **https** protocol if the user omits the protocol.
- Improved antivirus false positive on dependency **adshim.dll**.
- Fixed an error preventing **turbo push** for very large images.
- Fixed an error when importing images from Studio 21.5.
- Allow cloud drive providers to map to other drive letters.
- Deprecated **--mount-if** flag from **turbo run**.
- Fixed an issue when passing **turboplay turbo** CLI commands if quoted arguments contained whitespaces.



