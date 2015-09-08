### Debugging Tests

Unlike other cloud-based testing services, Turbo makes live debugging of your tests as easy as setting a breakpoint in your IDE. 

When your test contains a breakpoint, the test will execute normally until it hits your breakpoint. At this point, all execution will freeze and the browser window will idle, waiting for the breakpoint to be passed. At this point, you can interact with the browser window as if it were natively installed. When you are done debugging, press **Continue** in your IDE, or continue to **Step Through** your code. Your test will then resume, with the browser continuing to respond to WebDriver commands from your test.

**Note**: Turbo is currently configured to automatically recycle any session that continues for 90 seconds without a successive command. This may cause your debugging session to end abruptly if it lasts longer than 90 seconds. We are currently working towards an option to turn this feature off for cases where a longer debugging time is required. 