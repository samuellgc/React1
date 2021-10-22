import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListCategory() {
    return (
      <section class="container">
        <hr/>
      <div class="card card-body">
        <h1>Gerenciar Categorias</h1>

        <table class="table table-hover table-striped" id="table-categories-db">
          <thead class="table-dark">
            <tr>
              <th>Nome</th>
              <th>Referência</th>
              <th>Foto</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody id="table-categories">

          </tbody>
        </table>
      </div>
      </section>
    )
  }