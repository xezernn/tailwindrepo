const modal = document.getElementById("modal");
const content = document.getElementById("content");
const marka = document.getElementById("marka");
const imgLink = document.getElementById("imgLink");
const price = document.getElementById("price");

let flag = true;
function setModal() {
    modal.classList.toggle("hidden")
    flag = !flag;
}

function dayan(event) {
    event.stopPropagation()
}


function addToCar() {
    if(marka.value.trim().length < 3) return alert("Qaqa senin yazdigin marka adi 3 herfden balacadir!")
    if(+price.value < 2000){
        alert("Sen dedenin cani 2000 den asagi masin olar???")
        return
    }
    content.innerHTML += `
        <a rel="noopener noreferrer" href="#"
            class="max-h-[400px] max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <img onerror="this.src = 'https://starbucks-guney.vercel.app/assets/errImg.webp'" role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500"
            src="${imgLink.value}">
            <div class="p-6 space-y-2">
                <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">
                    ${marka.value}
                </h3>
                <span class="text-xs dark:text-gray-600">January 21, 2021</span>
                <p>
                    ${price.value}AZN
                </p>
            </div>
        </a>
    `
    marka.value = ""
    price.value = ""
    imgLink.value = ""
    setModal()
}