const planets = [
    {
        name: "Mặt trời",
        image: "img/sunCatP.png",
        diameter: "1.392.700 km.",
        surface: "6,09 x 10<sup>12</sup>  km²",
        volume: "1,41 x 10<sup>18</sup> km³",
        mass: "1,989 x 10<sup>30</sup> kg",
        page: "info/mattroi.html"
    }
    ,
    {
        name: "Sao Thủy",
        image: "img/saoThuyCatP.png",
        diameter: "4,879 km.",
        surface: "7,48 x 10<sup>7</sup> km²",
        volume: "6,08 x 10<sup>10</sup> km³",
        mass: "3,30 x 10<sup>23</sup> kg",
        page: "info/saothuy.html"
    },
    {
        name: "Sao Kim",
        image: "img/saoKimCatP.png",
        diameter: "12.103,6 km",
        surface: "4,6023 x 10<sup>8</sup> km²",
        volume: "9,284 x 10<sup>11</sup> km³",
        mass: "4,8675 x10<sup>24</sup> kg",
        page: "info/saokim.html"
    },
    {
        name: "Trái Đất",
        image: "img/TraiĐấtCatP.png",
        diameter: "12.756 km",
        surface: "5,10 x 10<sup>8</sup> km²",
        volume: "1,083 x 10<sup>12</sup> km",
        mass: "5,972 x 10<sup>24</sup> kg",
        page: "info/traidat.html"
    },
    {
        name: "Sao Hỏa",
        image: "img/saoHoaCatP.png",
        diameter: "6.779 - 6.792 km.",
        surface: "144,37 × 10<sup>6</sup>  km²",
        volume: "1,631 x 10<sup>11</sup> km³",
        mass: "6,417 x 10<sup>23</sup> kg",
        page: "info/saohoa.html"
    },
    {
        name: "Sao Mộc",
        image: "img/saoMocCatP.png",
        diameter: "142.984 km.",
        surface: "6,14 x 10<sup>10</sup> km²",
        volume: "1,43 x 10<sup>15</sup> km³",
        mass: "1,8986 x 10<sup>27</sup> kg",
        page: "info/saomoc.html"
    },
    {
        name: "Sao Thổ",
        image: "img/saoThoCatP.png",
        diameter: "120.500 - 120.660 km",
        surface: "4,27 x 10<sup>10</sup> km²",
        volume: "8.27 x 10<sup>14</sup> km³",
        mass: "5,685 x 10<sup>26</sup> kg",
        page: "info/saotho.html"
    },
    {
        name: "Sao Thiên Vương",
        image: "img/saoThienVuongCatP.png",
        diameter: "51.118 km",
        surface: " 81156 x 10<sup>9</sup>km²",
        volume: "6.833 x 10<sup>13</sup> km³",
        mass: "8,682 x 10<sup>25</sup> kg",
         page: "info/thienVuong.html"
    },
    {
        name: "Sao Hải Vương",
        image: "img/saoHaiVuongCatP.png",
        diameter: "49,244 km.",
        surface: "7,64 x 10<sup>9</sup> km²",
        volume: "6,25 x 10<sup>13</sup> km³",
        mass: "1,02 x 10<sup>26</sup> kg",
         page: "info/saohaivuong.html"
    }
];

const params = new URLSearchParams(window.location.search);

let currentIndex = parseInt(params.get("planet")) || 0;

function updatePlanet() {
    const planet = planets[currentIndex];

    // 1. Cập nhật nội dung chữ
    document.getElementById("planetName").innerHTML = planet.name;
    document.getElementById("diameter").innerHTML = planet.diameter;
    document.getElementById("surface").innerHTML = planet.surface;
    document.getElementById("volume").innerHTML = planet.volume;
    document.getElementById("mass").innerHTML = planet.mass;
    

    // 2. Cập nhật ảnh (Vị trí và size đã được CSS cố định nên sẽ giống hệt nhau)
    const mainImg = document.getElementById("mainPlanet");
    mainImg.src = planet.image;
    document.getElementById("planetLink").href =
    planet.page + "?planet=" + currentIndex;

    // 3. Cập nhật hành tinh phụ hai bên
    let leftIndex = (currentIndex - 1 + planets.length) % planets.length;
    let rightIndex = (currentIndex + 1) % planets.length;
    document.getElementById("leftPlanet").src = planets[leftIndex].image;
    document.getElementById("rightPlanet").src = planets[rightIndex].image;

    // 4. Áp dụng CSS riêng về màu sắc Glow (Đây là phần bạn muốn)
    // 4. Áp dụng hiệu ứng Glow đặc trưng cho từng hành tinh
    let glowColor = "";
    switch (planet.name) {
        case "Mặt trời":
            glowColor = "rgba(255, 140, 0, 0.7)"; 
            break;
        case "Sao Thủy":
            glowColor = "rgba(165, 165, 165, 0.4)"; 
            break;
        case "Sao Kim":
            glowColor = "rgba(255, 200, 100, 0.5)"; 
            break;
        case "Trái Đất":
            glowColor = "rgba(0, 150, 255, 0.6)"; 
            break;
        case "Sao Hỏa":
            glowColor = "rgba(255, 60, 0, 0.5)"; 
            break;
        case "Sao Mộc":
            glowColor = "rgba(210, 180, 140, 0.4)"; 
            break;
        case "Sao Thổ":
            glowColor = "rgba(230, 210, 150, 0.4)"; 
            break;
        case "Sao Thiên Vương":
            glowColor = "rgba(175, 238, 238, 0.5)"; 
            break;
        case "Sao Hải Vương":
            glowColor = "rgba(0, 100, 255, 0.6)"; 
            break;
        default:
            glowColor = "rgba(255, 255, 255, 0.3)";
    }

    // Áp dụng filter động vào ảnh chính
    let shadowSize = (planet.name === "Mặt trời") ? "100px" : "70px";
    mainImg.style.filter = `drop-shadow(0 0 ${shadowSize} ${glowColor})`;
} // <-- Đây là dấu đóng ngoặc nhọn kết thúc hàm updatePlanet


function nextPlanet() {
    currentIndex = (currentIndex + 1) % planets.length;
    updatePlanet();
}

function prevPlanet() {
    currentIndex = (currentIndex - 1 + planets.length) % planets.length;
    updatePlanet();
}

// Khởi tạo lần đầu
updatePlanet();