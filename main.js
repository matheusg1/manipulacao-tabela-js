$(document).ready(function () {
    // Setup - add a text input to each footer cell
    $('#myTable tfoot th').each(function () {
        
        var title = $(this).text();
        $(this).html('<input type="text" placeholder="Search ' + title + '" />')
    });

    // DataTable
    var table = $('#myTable').DataTable({
        "pageLength": 25,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.13.1/i18n/pt-BR.json"
        },
        initComplete: function () {
            this.api()
                .columns()
                .every(function () {
                    var that = this;

                    $('input', this.footer()).on('keyup change clear', function () {
                        if (that.search() !== this.value) {
                            that.search(this.value).draw()
                        }
                    })
                })
        },
    })
    $('#myTable tfoot tr').appendTo('#myTable thead');

})



//Versao c/ select
/*
$(document).ready(function () {
    $('#myTable').DataTable({
        "pageLength": 25,
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
    })
})

var tfoot = document.getElementsByTagName('tfoot')[0]
var t23 = tfoot.firstElementChild
var t24 = t23.firstElementChild
var t25 = t24.firstElementChild
t24.style.visibility = 'hidden'
console.log(t25)
*/
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

var nomes = ['Rocky Chaney', 'Titus Hilliard', 'Belen Packer', 'Amanda Rangel', 'Jayde Hamel', 'Cierra Liles', 'German Cash', 'Kalli Dempsey', 'Blair Weber', 'Johnson Deluca', 'Jerome Bray', 'Pearl Seals', 'Darion Anderson', 'Kenyon Stull', 'Garret Toler', 'Sylvia Pence', 'Kristine Prescott', 'Ethan Palma', 'Destany Miller', 'Carlton Nobles', 'Jameson McClung', 'Kody Wang', 'Harley Fonseca', 'Dalia Beatty', 'Kayla Alston', 'Omar Foster', 'Trae Mcnutt', 'Tina Bird', 'Carlos Roy', 'Bishop Whiting', 'Moira McCarter', 'Chanel Carbajal', 'Sheldon Christy', 'Anderson Huber', 'Julio Sims', 'Tommy Dennis', 'Micayla Wasson', 'Vera Grabowski', 'Princess Feliciano', 'Ty Gulley', 'Colby Worthington', 'Messiah Ellington', 'Audrey Coulter', 'Junior Gorman', 'Easton Welker', 'Kayden Lim', 'Grecia Weinberg', 'Raina Slagle', 'Zain Sneed', 'Yamile Madrid', 'Guadalupe Strauss', 'Charlie Webster', 'Tristan Mojica', 'Cristian Yanez', 'Abdul Swope', 'Alex Allen', 'Johnson Dunning', 'June Viera', 'Kristina Kessler', 'Colt McCullough']
var cargos = ['Menachem Ho', 'Kaylynn Mays', 'Moses Goad', 'Shannon Lantz', 'Kaylan Fagan', 'Lucero Gold', 'Marquise Wetzel', 'Trenten Nugent', 'Alana Hartman', 'Marian Cook', 'Jailene Morrissey', 'Konnor Ernst', 'Brookelyn Snowden', 'Saira Robinson', 'Danny Mount', 'Lawson McClellan', 'Katya See', 'Fredy Eng', 'Jared Gary', 'Eugene Nye', 'Jonatan McClellan', 'Juliann Estrella', 'Maxim Hatch', 'Rocky Deluca', 'Helena Larkin', 'Eric Scherer', 'Jaycob Burton', 'Taniya Duff', 'Belen Mclemore', 'Tyreek Mcfarlane', 'Maxine Golden', 'Karina McGowan', 'Tierra Jamison', 'Chad Cochrane', 'Amaris Norwood', 'Giovanny Fuller', 'Aleigha Luttrell', 'Imani Brady', 'Cain Schott', 'Shauna Sun', 'Brennon Chen', 'Jaiden Echols', 'Theron Kauffman', 'Lauryn Jasper', 'Tye Cary', 'Octavia Sutton', 'Elian Doan', 'Marina Field', 'Warren Abbott', 'Kate Eads', 'Chyanne Seitz', 'Louise Nicholas', 'Kegan Searcy', 'Andrew Deaton', 'Emilie McCurdy', 'Edna Zavala', 'Carleigh Gossett', 'Marcel Alexander', 'Elexis Pedersen', 'Liam Neil']
var locais = ['Misael Crowder', 'Jaila Partridge', 'Sabina Pardo', 'Makaela Vickery', 'Emmanuel Melendez', 'Garett Cote', 'Elias Loera', 'Kendall Babb', 'Sariah Dunn', 'Kolby Chacon', 'Kobi Finley', 'Anissa Hernandez', 'Kamren Booker', 'Tyreke Busby', 'Paul Brinkley', 'Priscilla Victor', 'Brodie Heller', 'Brayan Godwin', 'Marianna Gulley', 'Armani Hendrix', 'Samira Robert', 'Kyra Hammons', 'Felipe Burk', 'Jaime Rowan', 'Amir Herrera', 'Kali Toney', 'Efren Lai', 'Raven Higdon', 'Melvin Coble', 'Amos Leahy', 'Emma Harry', 'Mikala Blalock', 'Kyron Lilly', 'Savanna Waugh', 'Taliyah Chao', 'Jaeden Saucedo', 'Christion Hanlon', 'Marlena Boyles', 'Alina Sargent', 'Juan Beal', 'Cruz Haas', 'Rowan Rogers', 'Aubree Paulsen', 'Sanjana Browning', 'Maia Serna', 'Tiara Temple', 'Jackson Guillen', 'Dianna Broussard', 'Esteban Ha', 'Freddie Bratcher', 'Haily Brandt', 'Devontae Gossett', 'Sabastian Salisbury', 'Maricela Dwyer', 'Bernardo Carrera', 'Rayna Lawless', 'Donte Potts', 'Hannah Coley', 'Vicente Deutsch', 'Raymond Morin']
var idade = [13, 25, 95, 38, 1, 16, 2, 35, 66, 9, 8, 74, 41, 30, 18, 31, 4, 29, 56, 47, 64, 56, 11, 85, 58, 3, 94, 41, 56, 18, 53, 49, 27, 65, 84, 52, 37, 53, 84, 96, 21, 62, 73, 87, 51, 19, 94, 99, 33, 88, 43, 50, 35, 12, 45, 27, 84, 40, 55, 64]
var diaInicio = [16, 32, 15, 12, 48, 59, 62, 1, 70, 56, 11, 19, 11, 27, 80, 44, 24, 59, 14, 62, 14, 21, 90, 87, 62, 41, 36, 86, 97, 43, 94, 45, 17, 75, 20, 76, 85, 33, 5, 90, 24, 26, 64, 22, 13, 60, 44, 44, 29, 31, 45, 71, 6, 96, 34, 34, 64, 15, 15, 83]


for (var i = 0; i < 50; i++) {
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