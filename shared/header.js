const template = document.createElement('template');
template.innerHTML=     
`<div class="topNavBar" id="NavBar">
        <a class="logo">PEC01</a>
        <a id="menuportada" href="index.html">Portada</a>
        <a id="menucategory" href="categoria.html">Categorias</a>
        <a id="menudetail" href="details.html">Detalles</a>
        <a id="menupresentacion" href="presentacion.html">Presentacion</a>
        <a id="menuenlaces" href="enlaces.html">Enlaces</a>
        <a href="javascript:void(0);" class="icon" onclick="expandMenu()">
            <i class="fa fa-bars"></i></a>
</div>`;
document.body.appendChild(template.content)