let Response = app.compile('response', ['req', 'db'])

app.def('Response', function(db) {
  return req => Response(req, db)
})