import 'bootstrap/dist/css/bootstrap.min.css';

export default function NewProduct() {
    return (
      <section class="container">
        <hr/>
        <div id="content" class="card card-body">
          <div className="add-client">
          <h1>Novo Produto</h1>

            <form onsubmit="saveProduct()" method="post" action="">

              <label for="product_name">Nome</label>
              <input class="form-control mb-3" id="product_name" type="text" required placeholder="Ex: Nome do produto"/>

              <label for="product_image">Imagem</label>
              <input class="form-control mb-3" id="product_image" type="text" required placeholder="URL da imagem"/>

              <label for="product_value">Valor</label>
              <input class="form-control mb-3" id="product_value" required placeholder="R$"/>

              <label for="product_ean">Código de barras</label>
              <input class="form-control mb-3" id="product_ean" required placeholder="Digite aqui"/>

              <label for="product_cod">Código Interno</label>
              <input class="form-control mb-3" id="product_cod" required placeholder="Digite aqui"/>

              <label for="product_lot">Lote</label>
              <input class="form-control mb-3" id="product_lot" required placeholder="Digite aqui"/>

              <label for="product_validity">Validade</label>
              <input class="form-control mb-3" id="product_validity" required placeholder="Digite aqui"/>

              <label for="product_quantity">Quantidade</label>
              <input class="form-control mb-3" id="product_quantity" required placeholder="Digite aqui"/>

              <label for="product_description">Descrição</label>
              <textarea class="form-control mb-3" id="product_description" required placeholder="Digite aqui"></textarea>

              <label for="product_category">Categoria</label>
              <input class="form-control mb-3" id="product_name" type="text" required placeholder="Ex:Nome da categoria"/>

              <button class="btn btn-primary">CADASTRAR</button>

            </form>
          </div>
          </div>
       </section> 
    )
  }