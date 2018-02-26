class LevelFoo {
  constructor(parent, arg) { // 1
    this.parent = parent
    this.arg = arg
  }

  get_bar() { // 2
    return this.parent.get_bar()
  }

  get_baz() { // 2
    return this._baz ? this._baz : this.compute_baz()
  }

  main() { // 3
    let Qux = qux => new LevelQux(this, qux).main() // 4
    return Qux(1) + Qux(2)
  }
}