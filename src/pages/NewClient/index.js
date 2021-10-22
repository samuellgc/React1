import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss";

export default function NewClient() {
    return (
      <section class="container">
        <hr/>
        <div id="content" class="card card-body">
          <div className="add-client">
              <h1>Novo Cliente </h1>

              <form onsubmit="saveClient()" method="post">

              <label for="name">Nome</label>
              <input class="form-control mb-3" id="name" required placeholder="Ex:João Maria"/>

              <label for="cpf">CPF</label>
              <input onchange="(event)=> {console.log(event)}" class="form-control mb-3" id="cpf" type="text" required placeholder="Ex: 000.000.000-00"/>

              <label for="phone"> Telefone </label>
              <input class="form-control mb-3" id="phone" type="text" required placeholder="Ex: (00) 90000-0000"/>

              <label for="cep">Cep</label>
              <input class="form-control mb-3" id="cep" type="text" required placeholder="Ex: 000.00.000" onblur="searchCEP()"/>

              <label for="address">Endereço</label>
              <input class="form-control mb-3" id="address" required placeholder="Ex: Rua Jurandir Leonel, N: / Bairro:"/>

              <button class="btn btn-primary">ENVIAR</button>

              </form>
          </div>
          </div>
       </section>  
    )
  }