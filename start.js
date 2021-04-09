function GetAudio() {
    let videoId: string = (<HTMLInputElement>document.getElementById('videoId')).value;
    let method = 'GET';
    let url = 'https://youtube-to-mp32.p.rapidapi.com/yt_to_mp3';
    let params = { video_id: videoId };
    let headers: object = {
        'x-rapidapi-key': '<rapid key>',
        'x-rapidapi-host': 'youtube-to-mp32.p.rapidapi.com'
    };
  let api: RapidAClient = new RapidApiUsing(method, url, params, headers);
  api.GetResponse().then(function (response) {
        let values: any[] = <any>response.data;
        //  alert(values["Status"]);
        if (String(values["Status"]) == "Success") {
            let musicDiv = document.getElementById('musicDiv');
            let img = <HTMLImageElement>document.getElementById('image');
            let tblBody = <HTMLTableElement>document.getElementById('musicBody');
            tblBody.innerHTML = "";

            var Download_Size = values["Download_Size"];
            var Download_url = values["Download_url"];
            var Full_Video_Link = values["Full_Video_Link"];
            var Title = values["Title"];
            var Video_Thumbnail = values["Video_Thumbnail"];

            img.src = Video_Thumbnail;


            let tr = document.createElement('tr');
            var td = document.createElement('td');
            td.innerHTML = Download_Size;
            tr.appendChild(td);
            var td = document.createElement('td');
            var a = document.createElement('a');
            a.href = Download_url;
            a.innerHTML = Download_url;
            td.appendChild(a);
            tr.appendChild(td);
            var td = document.createElement('td');
            var a = document.createElement('a');
            a.href = Full_Video_Link;
            a.innerHTML = Full_Video_Link;
            td.appendChild(a);
            tr.appendChild(td);
            var td = document.createElement('td');
            td.innerHTML = Title;
            tr.appendChild(td);
            tblBody.appendChild(tr);
        }
        else {
            alert("video not found");
        }
    }).catch(function (error) {
        alert(error);
    });
}
