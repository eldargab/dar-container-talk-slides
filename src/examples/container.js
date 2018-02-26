app.def('result', (abcd, xy) => abcd + xy)
app.def('abcd', (ab, b) => ab + b)
app.def('ab', (a, b) => a + b)
app.def('xy', (abcd, x) => abcd + x)
app.def('x', (cd, d) => cd + d)
app.def('cd', (b, a) => b + a)
app.def('d', (ab, abcd) => ab + abcd)

let result = app.compile('result', ['a', 'b'])
result(1, 1) // => 13