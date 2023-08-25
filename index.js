const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const prompt = require("prompt-sync")();
console.log('IMEI DEVICE CHECKER ')


const getImei = async () => {

    let numberImei = await prompt('Input Imei : ')
    const url = 'https://kelpom-imei-checker1.p.rapidapi.com/api?service=model&imei=' + numberImei;
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

        // return result.model.device
        return result.model.device
        // console.log(result)
    } catch (error) {
        console.error(error);
    }


}


(async () => {

    let dataImei = await getImei()

    console.log('Device : ' + dataImei)

})()