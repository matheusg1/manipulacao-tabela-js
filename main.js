var table = document.querySelector('tbody')
var nome = document.getElementsByTagName('tr')[0]
var idade = document.getElementsByTagName('tr')[1]

var nomes = ['Maria', 'Jose', 'Marcos', 'Beiçola', 'Jurema', 'Valdemar']
var numeros = [43, 65, 98, 55, 47, 56, 21, 32]

for (var i = 0; i < 6; i++) {
    var tr = document.createElement('tr')

    var td = document.createElement('td')
    td.innerText = nomes[i]
    tr.appendChild(td)

    var td = document.createElement('td')
    td.innerText = 23 + i
    tr.appendChild(td)

    var td = document.createElement('td')
    td.innerText = numeros[i]
    tr.appendChild(td)

    table.appendChild(tr)
}

//getCellValue = recebeValorColuna

const recebeValorColuna = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparador = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(recebeValorColuna(asc ? a : b, idx), recebeValorColuna(asc ? b : a, idx));

    document.querySelectorAll('.tituloTabela').forEach(th => th.addEventListener('click', (() => {
        const table = th.closest('table');
        const tbody = table.querySelector('tbody');
        Array.from(tbody.querySelectorAll('tr'))
          .sort(comparador(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
          .forEach(tr => tbody.appendChild(tr));
})));


function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabela");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function myFunction2() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementsByClassName("filtro")[1];
    filter = input.value.toUpperCase();
    table = document.getElementById("tabela");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function myFunction3() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementsByClassName("filtro")[2];
    filter = input.value.toUpperCase();
    table = document.getElementById("tabela");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}