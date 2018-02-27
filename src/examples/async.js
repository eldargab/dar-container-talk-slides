class LevelFoo {
  get_bar() { // Геттеры результатов подзадач
    return this._bar === undefined ? this.compute_bar() : this._bar
  }

  compute_bar() { // Вызов подзадачи
    let baz = this.get_baz() // Вычисление зависимостей
    let qux = this.get_qux()
    let result = call_bar(baz, qux) // Выполнение подзадачи
    if (isAsync(result)) throw result // Если результат асинхронный, прерываем вычисление
    return this._bar = result // Иначе, кэшируем и возвращаем результат
  }

  main() {
    let future = new Future // Promise analog
    this.run(future) // Запускаем вычисление
    return future
  }

  run(future) {
    try {
      let result = this.get_bar() // Пытаемся получить результат
      future.done(null, result) // Результат готов, возвращаем
    } catch(asyncValue) {
      after(asyncValue, () => this.run(future)) // Пробуем ещё раз
    }
  }
}