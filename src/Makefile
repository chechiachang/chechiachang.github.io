THEME := "hugo-theme-air"

hugo:
	rm -rf public
	hugo -t ${THEME}

publish: hugo
	cp -r public/* ..
