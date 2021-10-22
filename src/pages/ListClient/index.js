import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListClient() {
    return (
      <section class="container">
        <hr/>
      <div class="card card-body">
        <h1>Gerenciar Clientes</h1>
        <table class="table table-hover table-striped text-center" id="table-clients">
        <thead class="table-dark">
          <tr>
            <th>CPF</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody id="table-clients-data">
        </tbody>
      </table>
      </div>
      </section>
    )
  }