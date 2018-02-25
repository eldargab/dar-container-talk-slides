app.def('response', (user) => `Hello ${user}!`)

app.def('user', (db, cookies) => db.getUser(cookies.user))

app.def('cookies', (req) => parse(req.headers['Cookie']))

app.def('db', () => open('mysql://...'))

app.def('main', function(Response) {
  http.createServer(function(req, res)) {
    let msg = Response(req)
    res.setHeader('Content-Type', 'text/plain');
    res.end(msg);
  })
})