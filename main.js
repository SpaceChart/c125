noseX=0;
noseY=0;
function setup() {
    video createCapure(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('¡PoseNet está inicializado!')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    }
}

function draw() {
    background('#66c7d2');
}