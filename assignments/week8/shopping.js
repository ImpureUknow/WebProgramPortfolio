window.onload = pageLoad;

function pageLoad(){
    // สร้าง XMLHttpRequest เพื่อดึงข้อมูลจากไฟล์ JSON
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "cloth.json", true);

    xhr.onload = function() {
        // แปลงข้อมูล Response ที่ได้จาก JSON string ให้เป็น JavaScript Object/Array
        let data = JSON.parse(xhr.responseText);
        showData(data);
    };

    xhr.onerror = function() {
        let data = [
            {pic: "pic/top1.jpg", brand: "A.K.O.O Clothing", price: "200 Baht"},
            {pic: "pic/top2.jpg", brand: "Abercrombie & Fitch", price: "300 Baht"},
            {pic: "pic/top3.jpg", brand: "Gap Inc", price: "400 Baht"},
            {pic: "pic/top4.jpg", brand: "Brand 4", price: "250 Baht"},
            {pic: "pic/top5.jpg", brand: "Brand 5", price: "350 Baht"},
            {pic: "pic/top6.jpg", brand: "Brand 6", price: "450 Baht"},
            {pic: "pic/top7.jpg", brand: "Brand 7", price: "500 Baht"},
            {pic: "pic/top8.jpg", brand: "Brand 8", price: "550 Baht"},
            {pic: "pic/top9.jpg", brand: "Brand 9", price: "600 Baht"}
        ];
        showData(data);
    };

    xhr.send();
}

function showData(data){
    // ดึงกล่องใหญ่ layer และกล่องลูก div ทั้งหมดข้างใน
    const layer = document.getElementById("layer");
    const childDivs = layer.getElementsByTagName("div");

    // วนลูปข้อมูลสินค้าทีละตัว เพื่อเอาไปใส่ในกล่อง div ย่อยแต่ละกล่อง
    for (let i = 0; i < data.length; i++) {
        // 1. สร้างแท็กรูปภาพ ชื่อแบรนด์ และราคา
        let img = document.createElement("img");
        img.src = data[i].pic; // path รูปภาพตามโครงสร้างข้อมูล

        let title = document.createElement("p");
        title.innerText = data[i].brand; // ชื่อแบรนด์สินค้า

        let price = document.createElement("p");
        price.innerText = data[i].price; // ราคาสินค้า

        // 2. เอาข้อมูลใส่เข้าไปใน div ย่อยตัวที่ i
        childDivs[i].appendChild(img);
        childDivs[i].appendChild(title);
        childDivs[i].appendChild(price);
    }
}
