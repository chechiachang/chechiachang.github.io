THEME := "hugo-theme-air"
PUBLISH_DIR := "docs"

server:
	hugo server -t ${THEME}

hugo:
	rm -rf ${PUBLISH_DIR}
	hugo -t ${THEME}
