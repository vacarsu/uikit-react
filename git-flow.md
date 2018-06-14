## Step 1 Clone
First clone the repository to your machine so you can start working, the clone is only required once. If you already have the cloned repository on your machine move to step 2.

```git clone https://github.com/vacarsu/uikit-react.git```

## Step 2 Make sure you're on correct branch
Make sure you're working on the correct branch you want to make changes to. In an initial clone you will only have the master branch so you will need to fetch on the remote branchs.

```git fetch --all```
or
```git fetch origin/name-of-branch```

## Step 3 Switch to fetched branch
If you fetched branches you can switch between them.
```git checkout name_of_branch```

If you ever need to get back to the master branch you can do the following. Just make sure you've commited  changes in your current working branch.
```git checkout origin/master```

You can also checkout a new branch.
```git checkout -b name_of_your_new_branch```
This command will create a new branch from your current working one.

## Step 4 Pull down changes
Now we need to grab the most up to do code. If you are on a freshly cloned project you shouldn't have to do this and you can skip this step. Otherwise you should do this everytime before you start working to ensure that no conflicts are merged into the source code.

```git pull```

## Step 5 Make changes!
Now that we have a cloned repository and have the latest changes of the codebase locally, we can start making our own changes.

## Step 6 Add our changes to the tracker
You've made your necessary changes to the code base, now we need to make git track those changes for commit.

```git add .``` (The period tells git to track all local changes.)

## Step 7 Commit
After setting git up to track the changed files we need to create the commit.

```git commit -m "Your fancy commit message that describes your change"```

## Step 8 Push Changes!!!!
Now all that is left is to push your changes.

```git push```
If you're are on a new local branch you will need to register it with the remote repository.
```git push -u origin name_of_your_branch```

## Step 9 Create a pull request
The last and final step is to create a pull request. Go to the repository on github.com and select the branch you want to pull request 2. Click submit pull request, and select your new branch to compare with. Submit that and you're good to go. Someone will review it, and, once approved you can then merge it into the code base.