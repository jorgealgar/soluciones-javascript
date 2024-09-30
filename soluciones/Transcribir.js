function transcribir(adn) {
  const complementos = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  return adn
    .split("")
    .map((nucleotido) => complementos[nucleotido] || nucleotido)
    .join("");
}

console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"
