### Building from the Command Line

The command-line version of Turbo Studio is called <b>XStudio.exe</b> and can be found in the Turbo Studio installation directory. See below for a list of command-line arguments and options for the XStudio tool.

<table>
	<tr>
		<th>Command</th>
		<th>Usage</th>
		<th>Description</th>
	</tr>
	<tr>
        <td><strong><span>&lt;path to XAPPL configuration file&gt;</span></strong></td>
        <td><span>/l &lt;path to license file&gt; [/o &lt;path to output&gt;] [/component] [/d] [/compressed] [/uncompressed] [/deletesandbox] [/v &lt;version&gt;] [/startupfile &lt;virtual path to file&gt;]</span></td>
        <td>
            <p>Builds the virtual application based on the application configuration file.</p>
            <p>/l - Path the the license file. <span>The license file needs to be stored in Unicode format.</span></p>
            <p>/o - Path to the output file. This will override the setting in the XAPPL <span>configuration </span>file.</p>
            <p>/component - Sets the <strong>Project Type</strong> to <em>Component</em> resulting in an SVM output rather than EXE output.&nbsp;</p>
            <p>/d - Enables the <strong>Generate diagnostic-mode executable </strong>setting.</p>
            <p>/compressed - Enables the <strong>Compress payload</strong> setting.</p>
            <p>/uncompressed - Disables the <strong>Compress payload</strong> setting.</p>
            <p>/deletesandbox - Enables the <strong>Delete sandbox on application shutdown</strong> setting.</p>
            <p>/v - Sets the <strong>Version </strong>of the output exe.</p>
            <p>/startupfile - Sets the <strong>Startup File</strong> of the virtual application.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p><strong>/before</strong></p>
        </td>
        <td>/beforepath &lt;path to where snapshot file is saved&gt;</td>
        <td>
            <p>Performs a before snapshot and saves the snapshot to the specified folder.</p>
            <p>/beforepath - Path to the where the snapshot file is saved.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p><strong>/after</strong></p>
        </td>
        <td>
            <p>/beforepath &lt;path to where snapshot is saved&gt; /o &lt;path to where XAPPL configuration file is saved&gt;</p>
        </td>
        <td>
            <p>Performs an after snapshot using the specified before snapshot path.</p>
            <p>/beforepath - Path to the before snapshot file.</p>
            <p>/o - Path to where the XAPPL configuration file is saved.</p>
        </td>
    </tr>
    <tr>
        <td>
             <p><strong>/import</strong></p>
        </td>
        <td>/i &lt;path to the configuration file to be imported&gt; /o <span>&lt;path to where XAPPL configuration file is saved&gt;</span></td>
        <td>
            <p>Import MSI, AXT, or ThinApp configurations.</p>
            <p>/i - Path to the configuration file to import.</p>
            <p>/o - Path to where the <span>XAPPL configuration file is saved.</span></p>
        </td>
    </tr>
    <tr>
        <td>
             <p><strong>/sandboxmerge</strong></p>
        </td>
        <td>/i &lt;input-config&gt; /o &lt;output-config&gt; &lt;sandbox-path&gt;</td>
        <td>
            <p>Merge configuration and sandbox.</p>
            <p>/i - Path to source configuration file.</p>
            <p>/o - Path to output merged configuration file.</p>
            <p>sandbox-path - Path to sandbox.</p>
        </td>
    </tr>
    <tr>
        <td>
             <p><strong>/vmsettings</strong></p>
        </td>
        <td>/i &lt;input-file-xappl-exe-svm&gt [name]</td>
        <td>
            <p>Getting virtualization settings from the configurations file or application.</p>
            <p>/i - Path to the configuration file (xappl, exe or svm).</p>
            <p>name - Name of settings or empty for all settings.</p>
        </td>
    </tr>
    <tr>
        <td>
             <p><strong>/pathreplace</strong></p>
        </td>
        <td>[/reg] [/revert] &lt;path&gt</td>
        <td>
            <p>Replace path from native to virtual format.</p>
            <p>/reg - Path is a register path instead of filesystem path.</p>
            <p>/revert - Revert path from virtual to native format.</p>
            <p>path - Path to replace.</p>
        </td>
    </tr>
        <td>
             <p><strong>/nologo</strong></p>
        </td>
        <td></td>
        <td>
            <p>Switch for suppress printing copyrigth and logo information.</p>
        </td>
    </tr>
</table>
<br>

**Note:** Configuration files that are generated from the command-line after using the **/after** flag do not have an output file specified in the **XAPPL** configuration file. When using scripting for snapshots, it may be necessary to apply changes to the generated **XAPPL** file, either manually or programmatically.

**Note:** If running XStudio displays the error `<SandboxCollision> is missing from the string table` the XStudio application cannot be run while Turbo Studio is also running. Turbo Studio must be closed before running XStudio via the command line.
