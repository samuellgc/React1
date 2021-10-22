import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListProduct() {
  
  return (
    <section className="page-products">   
      <section class="container">
      <hr/>
    <div class="card card-body">
    <h1>Gerenciar Produtos</h1>
      <table class="table table-hover table-striped" id="table-products">
        <thead class="table-dark">
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Quantidade</th>
            <th>Validade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody id="table-products-db">
       
        </tbody>
      </table>
    </div>
    </section>
    );
  </section>
  )
}