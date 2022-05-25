var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jak802zvl/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("detected").innerHTML = "Detected Dog - "+dog+", Detected Cat - "+cat+", Detected lion - "+lion+", Detected Cow - "+cow;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("animal_voices").innerHTML = "Detected Voice Is Of - " + results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("animal_images");

        if(results[0].label == "Barking"){
           img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
           dog = dog + 1;
        }
        else if(results[0].label == "Meowing"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat + 1;
        }
        else if(results[0].label == "Roar"){
            img.src = "https://th.bing.com/th/id/R.ed424ce7e8aa8e8ea5909c5ec394be07?rik=Q5S23Xusd9rU%2bQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTj%2fXXX%2fKTjXXX8gc.gif&ehk=KUdjPcBBkT%2fjY0VxirZWUyUob6J0qb5M73sJqKYFXbA%3d&risl=&pid=ImgRaw&r=0";
            lion = lion + 1;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://th.bing.com/th/id/R.b4e11dc2b70207cb94f423386acf3f2c?rik=j%2fSbeyNl%2b8Nc2Q&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9iR%2f5qE%2f9iR5qEgpT.gif&ehk=ShP2z1%2fWaL85z9sRKB1qRZaNUWwnJc9ykc22f6jdMGc%3d&risl=&pid=ImgRaw&r=0";
            cow = cow + 1;
        }
        else{
          img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
        }
    }
}