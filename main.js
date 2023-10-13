/**
 * B1: Hiển thị Danh sách kính
 * _Glasses
 * _GlassesList
 * B2:Xây dựng chức năng thử kính
 * B3:Xây dựng chức năng so sánh
 */
let dataGlasses = [
    { id: "G1", src: "./img/v1.png", virtuaImg: "./img/gl1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, descrtiption: "    Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: "G2", src: "./img/v2.png", virtuaImg: "./img/gl2.png", brand: "Arnette", name: "American flag", color: "black", price: 150, descrtiption: "    Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: "G3", src: "./img/v3.png", virtuaImg: "./img/gl3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "black", price: 150, descrtiption: "    Lorem ipsum dolor sit amet consectetur adipisicing elit." },
]
//Import các lớp đối tượng vào main
import { Glasses } from "./glasses.js";
import { GlassesList } from "./glassesList.js";

let glassesList = new GlassesList();

//Hàm rút gọn cú pháp láy elementbyID
//Khai báo hàm
const getELE = (id) => {
    return document.getElementById(id);
}

//Hàm hiển thị danh sách kính 
const showGlassesList = () => {
    let divGlassesList = getELE("vglassesList");
    //Tạo đối tượng kính và thêm kính vào danh sách các kính
    //duyệt mảng data
    dataGlasses.map((item, index) => {
        let gl = new Glasses(item.id, item.src, item.virtuaImg, item.brand, item.name, item.color, item.price, item.descrtiption);
        glassesList.addGlasses(gl);
    })
    console.log(glassesList);
    divGlassesList.innerHTML = glassesList.renderGlasses();
}
showGlassesList();


const tryOnGlasses = (e) => {
    let gID = e.target.getAttribute("data-id");
    let gObject = {};
    //value lầ một đối  tượng kính trong danh sách kính
    for (let value of glassesList.glist) {
        if (value.id == gID) {
            gObject = value;
        }
    }
    showInfo(gObject);
}
window.tryOnGlasses = tryOnGlasses;


//Khai báo hàm
const showInfo = (gObject) => {
    let divAvatar = getELE("avatar");
    let divInfo = getELE("glassesInfo");
    divAvatar.innerHTML = `<img id="glasses" src="${gObject.virtuaImg}">`;

    let status = "";
    if (gObject.status) {
        status = "Stocking";
    } else {
        status = "Sold Out"
    }
    divInfo.innerHTML = `<h5>${gObject.name} - ${gObject.brand} - (${gObject.color})</h5>
    <p class="card-text">
    <span class="btn btn-danger btn-sm mr-2">$${gObject.price}</span>
    <span class="text-success">${status}</span>
    </p>
    <p class="card-text">
    ${gObject.desc}
    </p>
    `;
    divInfo.style.display = "block";
}
/**
 * Before: gỡ kính ra
 * After: gắn kính vào mẫu
 */
const removeGlasses = (isDisplay) => {
    let glasses = getELE("glasses")
    if (glasses != null) {
        if (isDisplay) {
            glasses.style.opacity = 0.9;
        } else {
            glasses.style.opacity = 0;
        }
    }
}
window.removeGlasses = removeGlasses;