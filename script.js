const class1 = document.querySelector('.class1');
const class2 = document.querySelector('.class2');
const urlContainer = document.querySelector('.urlContainer')
const downlaodBtn = document.querySelector('.downloadBtn');
const createBtn = document.querySelector('.button');


class1.addEventListener('click', ()=>{
    class2.classList.remove('selected')
    class1.classList.toggle('selected')

    urlContainer.classList.remove('hidden');
    createBtn.classList.remove('hidden');

    
})


class2.addEventListener('click', ()=>{
    class1.classList.remove('selected')
    class2.classList.toggle('selected')


    urlContainer.classList.toggle('hidden')

})

let qrcode = new QRCode(
    document.querySelector('.qrcode')
);

qrcode.makeCode("nothing");




function generateQR(){
    if (
        document.querySelector("input")
            .value === "" ||
        document.querySelector("input")
            .value === " ") {
        alert(
            "Input Field Can not be blank!"
        );
    } 
    else {
        qrcode.makeCode(
            document.querySelector(
                "input"
            ).value);


        downlaodBtn.classList.remove('hidden');
        createBtn.classList.toggle('hidden');
    }
}


function download(){
    const img = document.querySelector('.qrcode img');

    fetch(img.src)
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "qrcode.png"; 
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        })
        .catch(error => console.error("Error downloading image:", error));
    location.reload();
}