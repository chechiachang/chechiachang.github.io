hugo:
	hugo

publish: hugo
	rm -rf public
	cp -r hugo/public/* .
