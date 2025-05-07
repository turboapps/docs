The May 2025 update to Turbo Client includes the following improvements:

- **New!** **P2P bandwidth throttling** feature allows limiting upload and download speeds for P2P downloads.
    To enable P2P bandwidth throttling use the following `turbo config` flags:

    ```
    --p2p-max-download-speed=VALUE   Maximum P2P download speed in KB/s (0 for unlimited)
    --p2p-max-upload-speed=VALUE     Maximum P2P upload speed in KB/s (0 for unlimited)
    ```

- **New!** **P2P seeding** feature allows seeding images after downloading.

  To enable P2P seeding, use the following command:

      `turbo config --enable=P2PSeeding`

- The search command now includes releases and supports the -n parameter to return more results.

This update includes fixes for the following issues:

- XVM updated even when the `turbo subscribe --no-pull` flag was specified.
- P2P download fails when a corrupted version of the target .svm existed in the repository.
- Turbo Drive Filr integration did not work against the latest Filr server.
- Turbo GCI did not delete P2P files correctly.

Additional improvements:

- Improved P2P hash verification time.
