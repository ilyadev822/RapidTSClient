# RapidTSClient
#rapid web api client - using axios

#HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Youtube to mp3 converter</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

    <script src="models/yutubeToMp3/youtubeToMp3Class.js"></script>
    <script src="models/yutubeToMp3/apitest.js"></script>
</head>
<body>
 
    <br />
    <div class="container">
        <h3>Yotube to mp3 converter</h3>
        <form class="form-inline" action="Javascript:GetAudio()">
            <label for="videoId" class="mr-sm-2">video id:</label>
            <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Enter video id" id="videoId" required autocomplete="off">
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
    </div>
    <br />
    <div id="musicDiv" class="container">
        <img id="image" />
        <br />
        <h3>Audio File</h3>
        <table id="music" class="table table-bordered">
            <thead>
                <tr>
                    <th>Download Size</th>
                    <th>Download url</th>
                    <th>Full Video Link</th>
                    <th>Title</th>

                </tr>
            </thead>
            <tbody id="musicBody">
                
            </tbody>
        </table>
        <hr />
        <h3>Video Files</h3>
        <table id="video" class="table table-bordered" width="900px">
            <thead>
                <tr>
                    <th>quality</th>
                    <th>width</th>
                    <th>height</th>
                    <th>size</th>
                    <th>link</th>
                </tr>
            </thead>
            <tbody id="videoBody">
            </tbody>
        </table>
    </div>
    
</body>
</html>


#Functions
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
  

