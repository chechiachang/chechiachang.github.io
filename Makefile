hugo:
	hugo

publish: hugo
	cp -r hugo/public/* .
