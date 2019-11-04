## Configuration

The table below describes the registry settings to configure the application server:

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Path</p>
            </div>
         </th>
         <th data-column="1">
           <div>
             <p>Setting</p>
          </div>
         <th data-column="2">
            <div>
               <p>Value</p>
            </div>
         </th>
         <th data-column="3">
           <div>
             <p>Comment</p>
           </div>
         </th>
      </tr>
      <tr>
         <td colspan="1">HKLM:\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services</td>
         <td colspan="1">fResetBroken</td>
         <td colspan="1">1 (DWORD)</td>
         <td colspan="1">Ends the session after disconnect.</td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">MaxConnectionTime</td>
         <td colspan="1">(DWORD)</td>
         <td colspan="1"><a href="https://www.windows-security.org/b78a6c9be6ee3ba31d2e1737274f91ea/set-time-limit-for-active-remote-desktop-services-sessions">Max RDP session time</a></td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">MaxIdleTime</td>
         <td colspan="1">(DWORD)</td>
         <td colspan="1"><a href="https://www.windows-security.org/cbeb2d81ac9f076b0cdde53077328afb/set-time-limit-for-active-but-idle-remote-desktop-services-sessions">Max RDP idle time</a></td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">RemoteAppLogoffTimeLimit</td>
         <td colspan="1">(DWORD)</td>
         <td colspan="1"><a href="https://www.windows-security.org/f133e6f0d1e4b6906129f6075ab87bfc/set-time-limit-for-logoff-of-remoteapp-sessions">Specifies how long the RDP session will stay alive after closing the application windows(s)</a></td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">MaxDisconnectionTime</td>
         <td colspan="1">(DWORD)</td>
         <td colspan="1"><a href="https://www.windows-security.org/666d6d71daa691cfa387b9c885da1f3d/set-time-limit-for-disconnected-sessions">Specifies how long the RDP session will stay alive and be reconnected to if the user disconnects</a></td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">Shadow</td>
         <td colspan="1">4(DWORD)</td>
         <td colspan="1"><a href="https://www.windows-security.org/d1cb44a0c8fa4a101929e6cb9b67e656/set-rules-for-remote-control-of-remote-desktop-services-user">Allow viewing a users RDP session with mstsc /shadow:{session-id} /noConsentPrompt</a></td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">bEnumerateHWBeforeSW</td>
         <td colspan="1">1 (DWORD)</td>
         <td colspan="1">Prioritizes hardware graphics adaptor for RDP</td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">AVC444ModePreferred</td>
         <td colspan="1">1 (DWORD)</td>
         <td colspan="1">Prioritizes the H.264/AVC 444 graphics mode for non-RemoteFX vGPU scenarios</td>
      </tr>
</table>

The following table describes the corresponding group policies for the registry settings:

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Path</p>
            </div>
         </th>
         <th data-column="1">
           <div>
             <p>Setting</p>
          </div>
         <th data-column="2">
            <div>
               <p>Value</p>
            </div>
         </th>
         <th data-column="3">
           <div>
             <p>Comment</p>
           </div>
         </th>
      </tr>
      <tr>
         <td colspan="1">Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Remote Session Environment</td>
         <td colspan="1">Use hardware graphics adapters for all Remote Desktop Services sessions</td>
         <td colspan="1">1 (DWORD)</td>
         <td colspan="1">Prioritizes hardware graphics adaptor for RDP</td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">Prioritize H.264/AVC 444 graphics mode for Remote Desktop Connections</td>
         <td colspan="1">1 (DWORD)</td>
         <td colspan="1">Prioritizes the H.264/AVC 444 graphics mode for non-RemoteFX vGPU scenarios</td>
      </tr>      
</table>
