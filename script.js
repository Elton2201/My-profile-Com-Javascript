// está usando function para alterar o fundo

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar a tag img
  const img = document.querySelector("#profile img");

  // subistituir a Imagem
  //  Abaixo tem outra forma de fazer a mesma coisa está é usando verdadeiro ou falso
  if (html.classList.contains("light")) {
  //Se tiver light mode, add a imagem light
  img.setAttribute('src', './avatar-light.png')
  } else {
 
  // Se tiver sem light mode manter a imagem normal
img.setAttribute('src', './foto minha.jfif')

 }
}
