import 'bootstrap/dist/css/bootstrap.min.css';

export default function NewCategory() {
    return (
      <section class="container">
        <hr/>
        <div id="content" class="card card-body">
          <div className="add-client">
          <h1>Nova Categoria</h1>

            <form onsubmit="saveCategory()">
              <label for="category_name">Nome</label>
              <input class="form-control mb-3" id="category_name" required placeholder="Digite aqui"/>

              <label for="category_photo">Foto</label>
              <input class="form-control mb-3" id="category_photo" required placeholder="URL da foto"/>

              <label for="category_reference">Referência</label>
              <input class="form-control mb-3" id="category_reference" required placeholder="Digite aqui"/>

              <label for="category_description">Descrição</label>
              <textarea class="form-control mb-3" id="category_description" required placeholder="Digite aqui"></textarea>

              <button class="btn btn-primary">ENVIAR</button>

            </form>
          </div>
          </div>
       </section> 
    )
  }