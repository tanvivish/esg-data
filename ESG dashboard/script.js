document.getElementById('bruh').onclick = async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '033ea80b78mshdf4b6a903e54860p1c9370jsn8efbc93b4c3e',
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
        }
    };
    const tick = document.getElementById("tickr").value;
    // const start = document.getElementById("startdate").value;
    // const end = document.getElementById("enddate").value;

    // var records = new Array();
    // for (var i = 0; i < 10; i++) {

    var results = 'https://yahoo-finance127.p.rapidapi.com/esg-score/tsla';
    results=results.concat(tick);
    results=results.concat('&symb=');
    const url=results;
    const res = await fetch(url, options);
    const record = await res.json();
//  const url=results
//             .concat(tick)
//             .concat('&minDate=')
//             .concat(start)
//             .concat('&maxDate=')
//             .concat(end)
//             .concat('&page=')
//             .concat(i);
//     const res = await fetch(url, options);  
// //const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=San%20Francisco&minDate=2022-10-31&maxDate=2022-11-05&page=1', options)
//     const record = await res.json();
    // records.push(record);
    
    // document.getElementById("tickr").innerHTML = record.data.map(item => `<li>${symb}</li>`).join('');
    document.getElementById("environment").innerHTML = record.data.map(item => `<li>${environmentScore.fmt}</li>`).join('');
    document.getElementById("social").innerHTML = record.data.map(item => `<li>${socialScore.fmt}</li>`).join('');
    document.getElementById("governance").innerHTML = record.data.map(item => `<li>${governanceScore.fmt}</li>`).join('');
    

}
