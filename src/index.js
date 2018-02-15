import Reveal from 'reveal.js'
import hljs from 'highlight.js/lib/highlight'
import JS_LANG from 'highlight.js/lib/languages/javascript'


hljs.registerLanguage('javascript', JS_LANG);
hljs.initHighlighting();


Reveal.initialize({
  history: true,
  center: true,
  pdfMaxPagesPerSlide: 1
});