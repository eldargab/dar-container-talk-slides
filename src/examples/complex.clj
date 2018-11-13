(let [ab   (+ b a)
      abcd (+ b ab)
      d    (+ abcd ab)
      cd   (+ b a)
      x    (+ d cd)
      xy   (+ abcd x)]
  (+ abcd xy))