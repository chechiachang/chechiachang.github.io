THEME := "hugo-theme-air"

server:
	hugo server -t ${THEME}

hugo:
	rm -rf public
	hugo -t ${THEME}

publish: hugo
	cp -r public/* ..
