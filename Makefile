
assets: graphs

graphs: $(patsubst %.dot, %.svg, $(wildcard src/examples/*.dot))

%.svg: %.dot Makefile
	@dot -Tsvg \
	-Gfontname="Helvetica Neue" \
	-Nfontname="Helvetica Neue" \
	-Nfontsize="16" \
	-Efontname="Helvetica Neue" \
	$< \
	| tail -n +7 \
	> $@


start:
	@./node_modules/.bin/parcel src/index.pug


clean:
	@rm -rf .cache dist


build:
	@rm -r docs
	@./node_modules/.bin/parcel build src/index.pug --no-cache --no-minify --public-url ./ --out-dir docs


publish: build
	@git add -A && git commit -m "Publish" && git push


.PHONY: start clean build publish