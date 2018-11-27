import Reveal from '../reveal/reveal.js'
import hljs from 'highlight.js/lib/highlight'
import CLOJURE_LANG from 'highlight.js/lib/languages/clojure'


hljs.registerLanguage('clojure', CLOJURE_LANG);
hljs.initHighlighting();


Reveal.initialize({
  history: true,
  center: false,
  controlsTutorial: false,
  pdfMaxPagesPerSlide: 1
});