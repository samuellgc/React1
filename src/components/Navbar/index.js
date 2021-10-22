import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import "./styles.scss";


export default function Navbar(props) {
   
    return (
        <div className="row container">
            <div className="col-2">
                <a href="/">
                <img src={logo} width="150px" className="text-left" alt="logo mercado todo dia"/>
                </a>
            </div>
                 <div className="btn-group col-10">
                    
                    <button type="button" className="btn btn-outline-dark">
                        <a href="/lista-clientes">Lista de Clientes</a>
                    </button>
                    
                    <button type="button" className="btn btn-outline-dark">
                        <a href="/add-cliente">Novo Cliente</a>
                    </button>
                   
                    <button type="button" className="btn btn-outline-dark">
                        <a href="/lista-categorias">Lista de Categorias</a>
                    </button>
                   
                    <button type="button" className="btn btn-outline-dark">
                        <a href="/add-categoria">Nova Categoria</a>
                    </button>
                   
                    <button type="button" className="btn btn-outline-dark">
                        <a href="/lista-produtos">Lista de Produtos</a>
                    </button>
                    
                    <button type="button" className="btn btn-outline-dark">
                        <a href="/add-produto">Novo Produto</a>
                    </button>

                </div>
            </div>
    )
  };