no default language dectected can't push to heroku

<!-- error msg -->

PS C:\Users\Trevor Pino\Desktop\techjunkies-hideout> git push origin master
Enter passphrase for key '/c/Users/Trevor Pino/.ssh/id_rsa':
Everything up-to-date
PS C:\Users\Trevor Pino\Desktop\techjunkies-hideout> heroku create
Creating app... done, ⬢ fierce-eyrie-67090
https://fierce-eyrie-67090.herokuapp.com/ | https://git.heroku.com/fierce-eyrie-67090.git
PS C:\Users\Trevor Pino\Desktop\techjunkies-hideout> git push heroku master
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (4/4), 320 bytes | 320.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
remote: Compressing source files... done.
remote: Building source:
remote: 
remote:  !     No default language could be detected for this app.
remote:                         HINT: This occurs when Heroku cannot detect the buildpack to use for this application automatically.
remote:                         See https://devcenter.heroku.com/articles/buildpacks
remote:
remote:  !     Push failed
remote:  !
remote:  ! ## Warning - The same version of this code has already been built: 0882d46e66dc6296699f6ed1f05992655053c6cd
remote:  !
remote:  ! We have detected that you have triggered a build from source code with version 0882d46e66dc6296699f6ed1f05992655053c6cd
remote:  ! at least twice. One common cause of this behavior is attempting to deploy code from a different branch.
remote:  !
remote:  ! If you are developing on a branch and deploying via git you must run:
remote:  !
remote:  !     git push heroku <branchname>:main
remote:  !
remote:  ! This article goes into details on the behavior:
remote:  !   https://devcenter.heroku.com/articles/duplicate-build-version
remote:
remote: Verifying deploy...
remote: 
remote: !       Push rejected to safe-taiga-63655.
remote:
To https://git.heroku.com/safe-taiga-63655.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://git.heroku.com/safe-taiga-63655.git'


