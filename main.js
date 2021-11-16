leftWrist = "";
rightWrist = "";
difference = "";
x = "";
function preload(){

}
function setup(){
    console.log("check");
    video = createCapture(VIDEO);
    video.size(500, 700);
    //video.size(height, width);
    video.position(50, 150)

    canvas = createCanvas(1450, 700);
    canvas.position(155, 220);

    //createCanvas(height, width);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose' ,  gotPoses);
    // posenet.on('pose' ,  gotPoses()); Why was this giving an error just because of the barakcet after the function?;
}
function draw(){
    canvas.background("pink");
    canvas.textSize(difference);
    canvas.fill("grey");
    canvas.text(x , 50, 400);
    x = document.getElementById("input").value;
}
function modelLoaded(){
    console.log('Posenet is initialized' );
    // why can't we just give the poses here  console.log('pose(s)' )
}
    function gotPoses(results){
        console.log("got Poses function is initialized/started");
        if(results.length > 0){
            console.log("Results.length is greater than 0")
            //if(results[0].length > 0){
            // if(result.length > 0){
            console.log(results);

            leftWrist = results[0].pose.leftWrist.x;
            rightWrist = results[0].pose.rightWrist.x;

            difference = Math.floor(leftWrist - rightWrist)
        }
    }

    //Quiz > why do we put results[0].length > we do so because an array's length always starts with 0 and results is an array so the first answer in 0 variable is the most accurate!!


    // function color(){
        
    // if(rightWrist < 100){
    //     ans = "purple";
    // }
    // else if(rightWrist > 100){
    //     ans = "green";
    // }
// }


// color();
// function draw(){
 
//     canvas.background(ans);
//     canvas.textSize(difference);
//    canvas.text( txt , 50, 400 );
// }


// leftWrist = "";
// rightWrist = "";
// difference = "";
// ans = "";
// txt="";
// txt= document.getElementById("input").value;

    