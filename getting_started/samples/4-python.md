### Python

In this tutorial, we'll walk you through how to create and containerize a basic Python web application. We'll also show you how to automate the creation of new images of your web application using **SpoonScripts** and walk you through some of the basics of the Turbo containerization network stack. 

**Topics Covered**

- The basic container/image creation path
- Copying local files into a container
- Automating image creation with SpoonScript
- The Turbo network stack

#### Create the App

For this tutorial, we'll use Python 2.7 and the [Flask](http://flask.pocoo.org/) microframework. 

To begin, create a new directory for the project.  

```
> mkdir C:\flaskapp
```

Create a new file in this directory named `hello.py`. In this file, add: 

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
	return "Hello World!"

if __name__ == "__main__":
	app.run()
```

If you have Python installed locally, you can test out your app by running: `python hello.py`. (Note: you must install `Flask` first -- `pip install Flask`).

#### Create a Container

Next, we'll containerize our application. 

First, pull the **spoonbrew/python** image from the hub -- this will be the base image for the application. 

```
> turbo pull spoonbrew/python
```

Before starting the container, download [get-pip.py](https://bootstrap.pypa.io/get-pip.py). We'll use this script to install `pip` in the container. 

Next, run the image to create a new container with Python. The default startup file for **spoonbrew/python** is usually the python interpreter. For this tutorial, we'll change the startup file to **cmd.exe** so that we can configure the container.  

```
> turbo run --startup-file=C:\system32\cmd.exe spoonbrew/python
```

A new command prompt should appear with a modified prompt. Any commands to configure the container should be run in this window. 

Next, we'll configure the container by installing `pip` and `Flask` and adding the `hello.py` file. From the containerized command prompt: 

```
# Install pip
> python \path\to\get-pip.py

# Install Flask
> pip install Flask

# Copy hello.py into the container
> mkdir C:\container-flask
> copy C:\flaskapp\hello.py C:\container-flask
```

Finally, start the server by executing the `hello.py` file

```
> python C:\container-flask\hello.py
```

To confirm that the server is running, open a browser and navigate to **http://localhost:5000**. You should see "Hello World!" appear in the browser. 

When you want to stop the container, go back to your native command prompt and run `turbo stop <container id>`. 