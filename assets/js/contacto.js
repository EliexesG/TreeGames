let birthDateDom = document.getElementById("fecha");

console.log(birthDateDom)

birthDateDom.addEventListener('change', function(evt) {
    let birthDate = this.value;
    CalculateAge(birthDate)
;});

function CalculateAge(birthDateString) {

    let ageDom = document.getElementById("edad");

    let today = new Date();
    let birthDate = new Date(birthDateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    ageDom.innerHTML = age;
}