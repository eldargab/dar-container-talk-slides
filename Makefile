
assets: graphs

graphs: $(patsubst %.dot, %.svg, $(wildcard src/examples/*.dot))

%.svg: %.dot
	@dot -Tsvg -Gfontname="Helvetica Neue" -Nfontname="Helvetica Neue" -Efontname="Helvetica Neue" $< -o $@


start: assets
	@./node_modules/.bin/parcel src/index.html


.PHONY: assets start