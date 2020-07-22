const rental_info = 'data/rates.json';

fetch(rental_info)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        for (let i = 0; i < 6; i++) {
            document.getElementById('veh' + i).textContent = jsonObject.vehicles[i].type;
            document.getElementById('max' + i).textContent = jsonObject.vehicles[i].max;
            document.getElementById('reshalf' + i).textContent = "$" + jsonObject.vehicles[i].reservation.half;
            document.getElementById('resfull' + i).textContent = "$" + jsonObject.vehicles[i].reservation.full;
            document.getElementById('wihalf' + i).textContent = "$" + jsonObject.vehicles[i].walk.half;
            document.getElementById('wifull' + i).textContent = "$" + jsonObject.vehicles[i].walk.full;
        }
    });

const images = document.querySelectorAll("[data-src]");

const loadImages = (image) => {
        image.setAttribute("src",image.getAttribute("data-src"));
        image.onload = () => {image.removeAttribute("data-src");};
    };
    
const imgOptions = {
        threshold: 1,
        rootMargin: "0px 0px 150px 0px"
    };
    
if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries, imgObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImages(entry.target);
                    imgObserver.unobserve(entry.target);
                }
            });
        }, imgOptions);
        images.forEach((img)=>{
            imgObserver.observe(img);
        });
    } else {
        images.forEach(image => {
            loadImages(image);
        });
    }