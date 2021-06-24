REM npm install -g gitbook-cli

call gitbook install

call gitbook build . --log=debug --debug

git worktree add ./_gh-pages gh-pages

cd _gh-pages

xcopy /s /y ..\_book .

git add .

git status

git commit -m "Book web site deployment"

git push

cd ..

git worktree remove ./_gh-pages

pause
