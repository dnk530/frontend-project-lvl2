install: 
	npm ci
	
genDiff: 
	node bin/genDiff.js

publish:
	npm publish --dry-run