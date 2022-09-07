function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("", ModelActivated);
}

function ModelActivated(){
    classifier.classify(gotResult)
}

function gotResult(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results)
    }
}