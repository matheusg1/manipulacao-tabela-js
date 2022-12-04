
$(document).ready(function () {
    $('#myTable').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.13.1/i18n/pt-BR.json"
        },
        initComplete: function () {
            this.api()
                .columns()
                .every(function () {
                    var column = this;
                    var select = $('<select><option value=""></option></select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function () {
                            var val = $.fn.dataTable.util.escapeRegex($(this).val());

                            column.search(val ? '^' + val + '$' : '', true, false).draw();
                        });

                    column
                        .data()
                        .unique()
                        .sort()
                        .each(function (d, j) {
                            select.append('<option value="' + d + '">' + d + '</option>');
                        });
                });
        },
    });
});


/*
$(document).ready(function () {
    $('#myTable').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.13.1/i18n/pt-BR.json"
        }
    });
});
*/

var tbody = document.querySelector('tbody')
var nome = document.getElementsByTagName('tr')[0]
var idade = document.getElementsByTagName('tr')[1]

var nomes = ['Maria', 'Jose', 'Marcos', 'Beiçola', 'Jurema', 'Valdemar']
var cargos = ['Estoquista', 'Vendedor', 'Faxineiro', 'Mestre', 'Professor', 'Policia']
var locais = ['RJ', 'SP', 'MG', 'ES', 'PB', 'PE']
var idade = [43, 65, 98, 55, 47, 56, 21, 32]
var diaInicio = ['23', '25', '12', '10', '01', '12']


for (var i = 0; i < 6; i++) {
    var tr = document.createElement('tr')

    var td = document.createElement('td')
    td.innerText = nomes[i]
    tr.appendChild(td)

    var td = document.createElement('td')
    td.innerText = cargos[i]
    tr.appendChild(td)

    var td = document.createElement('td')
    td.innerText = locais[i]
    tr.appendChild(td)

    var td = document.createElement('td')
    td.innerText = 23 + i
    tr.appendChild(td)

    var td = document.createElement('td')
    td.innerText = idade[i]
    tr.appendChild(td)

    tbody.appendChild(tr)
}
/*

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





var todosFiltros = document.querySelectorAll('.filtro')

todosFiltros.forEach(function(input, indice){
    input.addEventListener('keyup', function() {
    var filtro = input.value.toUpperCase();
    filtrarTabela(indice, filtro)
    })
})

function filtrarTabela(indice, filtro) {
    var table, tr, td, i, texto;
    table = document.getElementById("tabela");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[indice];
        if (td) {
            texto = td.textContent || td.innerText;
            if (texto.toUpperCase().indexOf(filtro) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
*/