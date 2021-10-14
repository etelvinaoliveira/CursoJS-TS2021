const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();
    //xhr.onload()
    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        // obj.success(xhr.responseText)
        resolve(xhr.responseText);
      } else {
        /*
        obj.error({
            code:xhr.status,
            msg:xhr.statusText
        })
        */
        reject({
          code: xhr.status,
          msg: xhr.statusText,
        });
      }
    });
  });
};

document.addEventListener("click", (e) => {
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(element);
  }
});

// function carregaPagina(element){
async function carregaPagina(element) {
  const href = element.getAttribute("href");
  /*
  request({
      method:'GET',
      url: href,
    //   success(response){
    //       carregaResultado(response)
    //   },
    //   error(errorText){
    //       console.log(errorText)
    //   }
  }).then(response=>{
      carregaResultado(response)
  }).catch(error=>{
      console.log(error);
  })
  */
  try {
    const response = await request({
      method: "GET",
      url: href,
    });

    carregaResultado(response);
  } catch (error) {
    console.log(error);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
