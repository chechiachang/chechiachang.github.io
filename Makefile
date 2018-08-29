
THEME := "hugo-theme-air"

hugo:
	hugo -t ${THEME}

publish: hugo
	rm -rf public
	cp -r hugo/public/* .
