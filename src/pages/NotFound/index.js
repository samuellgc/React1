import img_notfound from "./notfound.svg";
import "./styles.scss"

export default function NotFound() {
  return (
    <div class="not-found">
      <h5>
        Ops... Desculpe, página não encontrada!
      </h5>
    <img src={img_notfound} alt="página não encontrada"/>
    </div>
  )
}