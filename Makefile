
assets: graphs

graphs: $(patsubst %.dot, %.svg, $(wildcard src/examples/*.dot))

%.svg: %.dot Makefile
	@dot -Tsvg \
	-Gfontname="Helvetica Neue" \
	-Nfontname="Helvetica Neue" \
	-Efontname="Helvetica Neue" \
	$< \
	| tail -n +7 \
	> $@


start: assets
	@./node_modules/.bin/parcel src/index.pug


clean:
	@rm -rf .cache dist


.PHONY: start clean