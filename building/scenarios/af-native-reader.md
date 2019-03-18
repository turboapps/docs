### Integration with Native Applications

Often it is desirable to integrate containers with application toolchains that are installed natively on the machine. Turbo containers have the flexibility to allow this kind of integration. Below we will walk through how to open a .PDF file defined in a container with Adobe Reader which is installed natively on the system.

#### Opening with native Adobe Reader

We will start by creating a simple container image which has a .PDF in it that we will want to open. I will source the .PDF from a file on my desktop and copy it into a new folder called "MyPDFs".

```
# start the new container, mounting the directory where the files will be sourced from
> turbo new clean --mount="%USERPROFILE%\desktop" -n=mypdfs-container

# inside the new container, create a folder and copy the files in
(container)> mkdir c:\MyPDFs
(container)> copy "%USERPROFILE%\desktop\test.pdf" c:\MyPDFs
(container)> exit

# now commit the container to a new image
turbo commit mypdfs-container mypdfs
```

Now that we have the new container image **mypdfs**, let's use it with a natively installed Adobe Reader instance. Since the container will need to be able to view the native machine in order to "see" the Adobe Reader files, we will run in **Write-Copy** isolation mode. In this mode, the native machine is visible to the container but any attempts to write to the native machine will be redirected to the container's sandbox.

Also note the use of **adobe/disable-reader-sandbox**. This is used for compatibility of the Adobe Reader instance inside the container.

```
> turbo run mypdfs,adobe/disable-reader-sandbox --isolate=write-copy --startup-file="C:\Program Files (x86)\Adobe\Acrobat Reader DC\Reader\AcroRd32.exe" -- c:\MyPDFs\test.pdf
```

![](/docs/building/scenarios/reader1.png)