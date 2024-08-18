function toggleDesc(id, button) {
    let desc = document.getElementById(id);
    let img = document.getElementById(id + 'img')
    if (desc.style.display == 'none' || desc.style.display == '') { 
        desc.style.display = 'block'; // Use '=' instead of '=='
        img.src = "../assets/images/icon-minus.svg"
    } else {
        desc.style.display = 'none'; // Use '=' instead of '=='
        img.src = "../assets/images/icon-plus.svg"
    }
}