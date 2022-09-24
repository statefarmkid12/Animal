function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/G09ZqBGCC/model.json", ModelActivated);
}

function ModelActivated(){
    classifier.classify(gotResult);
    console.log("Model has been activated");
}

dog = 0;
cat = 0;

function gotResult(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);

        document.getElementById("Animal_Name").innerHTML = "Sound Heard is - "+ results[0].label;
        document.getElementById("Animal_Collection").innerHTML = "Dogs - "+dog+" Cats - "+cat;

        if(results[0].label == "Dog"){
            img.src = "KOA_Nassau_2697x1517.jpg";
        } else if(results[0].label == Cat){
            img.src = "GettyImages-1175550351.jpg";
        } else{
            img.src = "62590-listening.gif"
        }

        if(results[0].label == "Cats"){
            img.src = "GettyImages-1175550351.jpg";
            cat = cat+1
        }
    }
}