function initMaterializeSelect(){
    // select
    var elems = document.querySelectorAll('select');
    
    var instances = M.FormSelect.init(elems, {});
}
document.addEventListener('DOMContentLoaded', function () {
    // navbar
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {

    });

    // modals
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});