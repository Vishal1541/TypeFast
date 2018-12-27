var timer = document.getElementById ("timer");
var mainContainer = document.getElementById ("main_container");
var paraShow = document.getElementById ("para_show");
var paraType = document.getElementById ("para_type");
var timeup = document.getElementById ("timeup");
var wrapper = document.getElementById ("wrapper");
var tryAgain = document.getElementById ("btn_try_again");
var timeRem = 90;
var score = 0;
const totalTime = timeRem;

var show_para = function () {
    paraShow.innerHTML = para;
};

var calcSpeed = function () {
    var words = paraType.value.split(" ").length;
    return (words * 60.0) / totalTime;
};

var start_timer = function () {
    var get_time = setInterval (function () {
        timeRem--;
        timer.innerHTML = "Time Rem: " + timeRem + "sec";
        if (timeRem == 0) {
            clearInterval (start_timer);
            mainContainer.remove ();
            wrapper.remove ();
            timer.remove ();
            document.body.appendChild (timeup);
            document.getElementById ("fscore").innerHTML = "Speed: " + calcSpeed() + " words per minute";
            timeup.style.display = "block";
        }
    }, 1000);
    paraType.removeEventListener ("keydown", start_timer);
};

var start = function () {
    timer.innerHTML = "Time Rem: " + timeRem + "sec";
    paraType.value = "";
    show_para ();
    paraType.addEventListener ("keydown", start_timer);
};

var para = "There were once two brothers who lived on the edge of a forest. The elder brother was very mean to his younger brother and ate up all the food and took all his good clothes. One day, the elder brother went into the forest to find some firewood to sell in the market. As he went around chopping the branches of a tree after tree, he came upon a magical tree. The tree said to him, ‘Oh kind sir, please do not cut my branches. If you spare me, I will give you my golden apples’. The elder brother agreed but was disappointed with the number apples the tree gave him. Greed overcame him, and he threatened to cut the entire trunk if the tree didn’t give him more apples. The magical tree instead showered upon the elder brother hundreds upon hundreds of tiny needles. The elder brother lay on the ground crying in pain as the sun began to lower down the horizon.";

start ();

tryAgain.addEventListener ("click", function (){
    window.location.reload ();
});