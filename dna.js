function pair (str) {
  return str.split('').map((element) => {
    switch (element) {
      case 'A':
        return ["A", "T"]
      case 'T':
        return ["T", "A"]
      case 'C':
        return ["C", "G"]
      case 'G':
        return ["G", "C"]
    }
  })
}

console.log(pair('GCG'))
