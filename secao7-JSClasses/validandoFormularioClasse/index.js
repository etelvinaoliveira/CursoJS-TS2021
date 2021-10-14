class Cliente {
  constructor() {
    this.validaFormulario();
  }

  validaFormulario() {
    this.formulario = document.querySelector(".formulario");
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.validaCampos();
    this.validaSenha();

    if (this.validaCampos() && this.validaSenha()) {
      this.formulario.submit();
      alert("Formulário enviado");
    }
  }

  validaCampos() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.criaErro(campo, `O campo "${label}" não pode estar em branco`);
        valid = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCpf(campo)) valid = false;
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }

    return valid;
  }

  validaSenha() {
    let valid = true;

    const senha = this.formulario.querySelector(".senha");
    const senhaRepetida = this.formulario.querySelector(".senhaRepetida");

    if (senha.value !== senhaRepetida.value) {
      valid = false;
      this.criaErro(senha, "Campos senha e repetir senha precisam ser iguais");
      this.criaErro(
        senhaRepetida,
        "Campos senha e repetir senha precisam ser iguais"
      );
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, "Senha precisa estar entre 6 e 12 caracteres");
    }
    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;

    let valid = true;

    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, "Usuário precisa ter entre 3 e 12 caracteres");
      valid = false;
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, "Usuário precisa ter apenas letras e/ou numeros");
      valid = false;
    }

    return valid;
  }

  validaCpf(campo) {
    const cpf = new CPF(campo.value);

    if (!cpf.validaCPF()) {
      this.criaErro(campo, "CPF inválido");
      return false;
    }

    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");

    campo.insertAdjacentElement("afterend", div);
  }
}

const cliente = new Cliente();
