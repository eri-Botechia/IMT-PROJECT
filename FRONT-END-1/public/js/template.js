let partial00A = `       
<nav class="menu">
  <label><img src="img/logo/logo1_base.png" alt="logo libretaPET" class="logoBrand" />
    <h2 id="labelNav">
    </h2>
  </label>
  <ul class="menu__item ">
    <li class="item"><a href="index.html" class="link-item">Home</a></li>
    <li class="item"><a href="buscaTermos.html" class="link-item">Buscador</a></li>
    <li class="item"><a href="formmato.html" class="link-item">Pagamento</a></li>
   </ul>

  <span class="btn__menu" id="buttonMenu">
      <i class="fa fa-bars"></i>
    </span>
</nav>
`
let partial00B = `
  <footer>
    <ul class="social-icons-list">
    <li>
      <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
    </li>
    <li>
      <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
    </li>
    <li>
      <a href="mailto:termoexemplo@gmail.com" class="social-link"><i class="fab fa-google-plus-g"></i></a>
    </li>
    <li>
      <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
    </li>
    </ul>
    
    </footer>
`
addEventListener('DOMContentLoaded', () => {

    let id00 = document.getElementById('id00A')
    let id01 = document.getElementById('id00B')
    id00.innerHTML += partial00A;
    id01.innerHTML += partial00B;

})


