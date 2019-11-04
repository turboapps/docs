## Repositories

Repositories are the units that make up the Hub. A repository contains the image and version histories of a project, and it may be public or private.

The Hub is where you can browse and search for repositories for popular applications and components, upload your own projects, and run them online with a single click.

If a repository is public, it will appear in search results, and any Turbo user can pull or run it. Only the repository owner (or members of the owning organization) can push to the repository. 

Private repositories are not searchable, and they can only be accessed, pulled, or changed by their named owner(s).

A repository can be owned by a user or an organization. Anywhere in this documentation that mentions the repository owner or profile, it could be used interchagably between a single user or an organization. Users belonging to the organization can access the repositories in the organization if they belong to the organization. Write access to an organizations repository is granted to the administrators and owner of the organization.

The homepage for a repository is located at **http://turbo.net/hub/[profile]/[repo]**, where **profile** is the username of the repository owner and **repo** is the name of the repository. The homepage contains 3 sections:

1. **About** - Provides an overview of the repository. 
2. **Releases** - Lists all tagged versions of the image.
3. **History** - Lists the full version history of the image.

On your repository's **About** page, you can edit the description, Readme, icon, URL, and steps for getting started with your project.

Other users viewing the repository details page can stream the project directly from the browser in a variety of ways. They can **Run** your image in a new container. This is equivalent to this command executed through the command-line interface:

```
# Run the image in a container
> turbo run [profile]/[repo]
```

They can **Pull** the image to their local registry. This button will execute this command as if entered via the command-line interface:

```
# Pull an image down from the Hub
> turbo pull [profile]/[repo]
```

They can **Open** a console window in a fresh container with your image as the base. These same actions can also be completed from the command-line interface:

```
# Open a console window with your image as base
> turbo run [profile]/[repo] cmd
```

You can create a new repository from the command-line interface by pushing it to the Hub from your local registry:

```
# First run a container
> turbo run clean

# Then commit the container to an image
> turbo commit 125ee2932 <image>

# Push an image to the Hub
> turbo push <image>

# The image is now pushed to the logged-in profile
```

To push a repository to an organization, include the name of the organization you are pushing to:

```
# Push image to organization
> turbo push <image> <org>/<reponame>
```