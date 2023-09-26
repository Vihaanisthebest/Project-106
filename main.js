function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pkDZiofQP/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

var Dog = 0;
var Cat = 0;
var Tiger = 0;
var Cow = 0;

function gotResults(results, error)
{
    if (error)
    {
        console.log(error);
    }else
    {
        console.log(results)
        random_color_r = Math.floor(Math.random() * 255) + 1;
        random_color_g = Math.floor(Math.random() * 255) + 1;
        random_color_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I Can Hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_color_r+","+random_color_g+","+random_color_b+")";
        document.getElementById("result_confindence").style.color = "rgb("+random_color_r+","+random_color_g+","+random_color_b+")";

        img = document.getElementById('animal1');
        img1 = document.getElementById('animal2');
        img2 = document.getElementById('animal3');
        img3 = document.getElementById('animal4');

        if (results[0].label == "Barking")
        {
            img.src = 'Dog-gif.gif';

        } else if (results[0].label == "Meowing")
        {
            img1.src = 'Cat-Gif.gif';

        } else if (results[0].label == "Roaring")
        {
            img2.src = 'Tiger-gif.gif';

        } else if (results[0].label == "Mooing")
        {
            img3.src = 'Cow-gif.gif';
        }
        

    }
}