REM npm install -g gitbook-cli

call gitbook install

call gitbook build . --log=debug --debug

git checkout gh-pages

xcopy /s /y _book .

git add .

git status

git commit -m "Book web site deployment"

git push

git checkout master

pause
