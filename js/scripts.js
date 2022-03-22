
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

class Pessoa {
    nome
    email
    telefone
    Servico
    obs
    data
    constructor(nome, email, telefone, servico, obs, data) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.servico = servico;
        this.obs = obs;
        this.data = data;
    }


}

function logar() {
    var usuario = "admin";
    var senha = "admin";

    var u = document.getElementById("lemail1").value;
    var s = document.getElementById("lsenha1").value;

    if (usuario === u && senha === s) {
        window.open("http://127.0.0.1:5500/logado.html", "_self");

    } else {
        alert("usuario nao existe");
    }
}




var listaAgendamentos = [];
function enviarAgendamento() {


    var nome = document.getElementById("lnome").value;
    var email = document.getElementById("lemail").value;
    var telefone = document.getElementById("ltelefone").value;
    var servico = document.getElementById("lservico").value;
    var obs = document.getElementById("lobs").value;
    var data = document.getElementById("ldata").value;

    var pessoa = new Pessoa(nome, email, telefone, servico, obs, data);


    listaAgendamentos.push(pessoa);

    localStorage.setItem("listaAgendamentos", JSON.stringify(listaAgendamentos));

    document.getElementById("lnome").value = "";
    document.getElementById("lemail").value = "";
    document.getElementById("ltelefone").value = "";
    document.getElementById("lservico").value = "";
    document.getElementById("lobs").value = "";
    document.getElementById("ldata").value = "";


}
var listaAgendados = []
//lista dinamica dos servicos agendados
function exibirAgendados() {
    listaAgendados = JSON.parse(localStorage.getItem("listaAgendamentos"));

    var tbody = document.getElementById("tbody");
    tbody.innerText = "";


    for (let i = 0; i < listaAgendados.length; i++) {

        let tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_email = tr.insertCell();
        let td_telefone = tr.insertCell();
        let td_servico = tr.insertCell();
        let td_obs = tr.insertCell();
        let td_data = tr.insertCell();

        td_id.innerText = i;
        td_nome.innerText = listaAgendados[i].nome;
        td_email.innerText = listaAgendados[i].email;
        td_telefone.innerText = listaAgendados[i].telefone;
        td_servico.innerText = listaAgendados[i].servico;
        td_obs.innerText = listaAgendados[i].obs;
        td_data.innerText = listaAgendados[i].data;
    }


}
