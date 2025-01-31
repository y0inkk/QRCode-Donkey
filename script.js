const class1 = document.querySelector('.class1');
const class2 = document.querySelector('.class2');
const urlContainer = document.querySelector('.urlContainer')
const downlaodBtn = document.querySelector('.downloadBtn');
const downlaodBtnV = document.querySelector('.downloadBtnV');
const buttonV = document.querySelector('.buttonV')
const createBtn = document.querySelector('.button');
const vcardContainer = document.querySelector('.vcardContainer');

class1.addEventListener('click', () => {
    if (!class1.classList.contains('selected')) {
        class2.classList.remove('selected');
        class1.classList.add('selected');

        urlContainer.classList.remove('hidden');
        createBtn.classList.remove('hidden');
        vcardContainer.classList.add('hidden'); 
    }
});

class2.addEventListener('click', () => {
    if (!class2.classList.contains('selected')) {
        class1.classList.remove('selected');
        class2.classList.add('selected');

        urlContainer.classList.add('hidden');
        vcardContainer.classList.remove('hidden');
    }
});


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





function vcardQR() {
    let name = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobileNum").value;


    

    if (!name || !mobile) {
        alert("Please enter name or mobile number");
        return;
    }

    let qrcodev = new QRCode(
        document.querySelector('.qrcodev')
    );
    

    let vCardData = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN:${name}\r\nEMAIL:${email}\r\nTEL:${mobile}\r\nEND:VCARD`;


    qrcodev.makeCode(
        vCardData
    );

    downlaodBtnV.classList.remove('hidden');
    buttonV.classList.toggle('hidden');
}


function downloadv(){
    const img = document.querySelector('.qrcodev img');

    fetch(img.src)
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "vCardQR.png"; 
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        })
        .catch(error => console.error("Error downloading image:", error));
    location.reload();
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