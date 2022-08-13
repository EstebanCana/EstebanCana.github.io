const inputTexto = document.getElementById("textoRecibido");
const output = document.getElementById("output");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById('btnCopiar')

const letras = ["a", "e", "i", "o", "u"];
const letrasCript = ["ai", "enter", "imes", "ober", "ufat"];

const encriptar = (texto) => {
  const textoEncriptado = [];
  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case "a":
        textoEncriptado.push(letrasCript[0]);
        break;
      case "e":
        textoEncriptado.push(letrasCript[1]);
        break;
      case "i":
        textoEncriptado.push(letrasCript[2]);
        break;
      case "o":
        textoEncriptado.push(letrasCript[3]);
        break;
      case "u":
        textoEncriptado.push(letrasCript[4]);
        break;
      default:
        textoEncriptado.push(texto[i]);
        break;
    }
  }
  inputTexto.value = "";
  localStorage.setItem("text", textoEncriptado.join(""));
};

const desencriptar = (texto) => {
  const textoDesencriptado = [];
  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case "a":
        textoDesencriptado.push(texto[i]);
        i += letrasCript[0].length -1;
        break;
      case "e":
        textoDesencriptado.push(texto[i]);
        i += letrasCript[1].length -1;
        break;
      case "i":
        textoDesencriptado.push(texto[i]);
        i += letrasCript[2].length -1;
        break;
      case "o":
        textoDesencriptado.push(texto[i]);
        i += letrasCript[3].length -1;
        break;
      case "u":
        textoDesencriptado.push(texto[i]);
        i += letrasCript[4].length -1;
        break;
      default:
        textoDesencriptado.push(texto[i]);
        break;
    }
  }
  inputTexto.value = "";
  localStorage.setItem("textDes", textoDesencriptado.join(""));
};

btnEncriptar.addEventListener("click", () => {
  encriptar(inputTexto.value);
  output.value = localStorage.getItem("text");
  document.getElementById('munieco').classList.add('disabled');
  document.getElementById('parrafo').classList.add('disabled');
  document.getElementById('output').classList.remove('disabled');
  document.getElementById('btnCopiar').classList.remove('disabled');
});

btnDesencriptar.addEventListener("click",() => {
  desencriptar(inputTexto.value);
  output.value = localStorage.getItem("textDes");
  document.getElementById('munieco').classList.add('disabled');
  document.getElementById('parrafo').classList.add('disabled');
  document.getElementById('output').classList.remove('disabled');
  document.getElementById('btnCopiar').classList.remove('disabled');
});

btnCopiar.addEventListener('click', () => {
  const content = output.value;
  const cb=navigator.clipboard;
  cb.writeText(content);
});