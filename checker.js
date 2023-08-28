// Imei Checker Generate 

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

function generateRandomAngka(panjang) {
    let hasil = '';
    const angkaMungkin = '0123456789';

    for (let i = 0; i < panjang; i++) {
        const randomIndex = Math.floor(Math.random() * angkaMungkin.length);
        hasil += angkaMungkin.charAt(randomIndex);
    }

    return hasil;
}

const angkaDepan = '35613331'; // Change this value if you have a first number Imei Specification a Model 
const panjangAngkaBelakang = 15 - angkaDepan.length;


function generateDanTampilkan() {
    const angkaBelakang = generateRandomAngka(panjangAngkaBelakang);
    const hasilAkhir = angkaDepan + angkaBelakang;
    // console.log(hasilAkhir);

    return hasilAkhir
}

// async function getFix(hasilAkhir) { 



// }


async function runData(hasilIMEI) {

    // let getNumber = generateDanTampilkan();
    // let checkNumber =  getFix()
    const url = 'https://kelpom-imei-checker1.p.rapidapi.com/api?service=model&imei=' + hasilIMEI;

    // console.log(url)

    const dataAPI = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aa14e9021emshec6160dde6d5ff8p149571jsn688f13038174',
            'X-RapidAPI-Host': 'kelpom-imei-checker1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, dataAPI);
        const result = await response.json();

        // return result
        // console.log(result)
        return result
        // console.log(result)
    } catch (error) {
        console.error(error);
    }
}

(async () => {

    setInterval(async () => {

        try {

            let getImei = generateDanTampilkan()
            let dataImei = await runData(getImei)

            // console.log(dataImei)
            // console.log('\n=======================================\n')
            console.log('Imei Number : ' + dataImei.imei)
            console.log('Device      : ' + dataImei.model.device)
            console.log('Brand       : ' + dataImei.model.brand)
            console.log('Model       : ' + dataImei.model.model_nb)
            console.log('\n=======================================\n')

        } catch (error) {
            console.log('')
        }

    }, 7000);
})()
