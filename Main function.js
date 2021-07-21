var robot = require("robotjs");
var screen =robot.getScreenSize();
var fs = require("fs");
robot.setMouseDelay(500);
setTimeout(handleNodePad, 2000);

function handleNodePad(){
    robot.moveMouseSmooth(90,845);
    robot.mouseClick();
    robot.typeString("Notepad");
    robot.keyTap("enter");
    setTimeout(function(){
    robot.typeString("I am Sankalp.... Thank You for providing me with the opportunity to present my project to you!");
    robot.keyTap("enter");
    robot.typeString("First we will open Paint and play tic-tac-toe.....");
    robot.keyTap("enter");
    robot.typeString("Second we will open Watsapp and send Hi to some friend");
    robot.keyTap("enter");
    robot.typeString("Third we will open chrome and go to the website of your Company!!");
    robot.keyTap("enter");
    robot.typeString("Finally we will have a small Pokemon Battle");
    robot.keyTap("enter");
    setTimeout(handlePaint,2000);
    },3000);
}

function handlePaint(){
    robot.moveMouseSmooth(90,845);
    robot.mouseClick();
    robot.typeStringDelayed("paint","1000");
    robot.keyTap("enter");
    robot.dragMouse(600,250);
    setTimeout(makeGrid, 2000);
    setTimeout(handleWatsapp, 5000);
}

function makeGrid(){
    robot.mouseToggle("down","left");
    robot.dragMouse(600,550);
    robot.mouseToggle("up","left");

    robot.dragMouse(700,250);
    robot.mouseToggle("down","left");
    robot.dragMouse(700,550);
    robot.mouseToggle("up","left");

    robot.dragMouse(500,350);
    robot.mouseToggle("down","left");
    robot.dragMouse(800,350);
    robot.mouseToggle("up","left");

    robot.dragMouse(500,450);
    robot.mouseToggle("down","left");
    robot.dragMouse(800,450);
    robot.mouseToggle("up","left");
}




function handleWatsapp(){
    robot.moveMouseSmooth(90,845);
    robot.mouseClick();
    robot.typeStringDelayed("whatsapp","1000");
    robot.keyTap("enter");
    setTimeout(function(){
        robot.moveMouseSmooth(80,114);
        robot.mouseClick();
        robot.typeStringDelayed("djs","1000");
        robot.keyTap("enter");
        robot.moveMouseSmooth(80,354);
        robot.typeStringDelayed("Hi","1000");
        robot.keyTap("enter");
        setTimeout(handleChrome,2000); 
    },10000); 
}

function handleChrome(){
    robot.moveMouseSmooth(90,845);
    setTimeout(function(){
        robot.mouseClick();
        robot.typeStringDelayed("chrome","1000");
        robot.keyTap("enter");
        setTimeout(openTabs,2000);
    },2000)
}

function openTabs(){
    var rdata = fs.readFileSync("./chrome.json");
    var tabs = JSON.parse(rdata);

    for(var i = 0; i<tabs.length;i++)
    {
        for(var j=0;j<tabs[i].length;j++)
        {
            robot.typeStringDelayed(tabs[i][j],"1000");
            robot.keyTap("enter");

            if(j<tabs[i].length-1)
            {
                robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control","up");
            }else if(i<tabs.length-1){
                robot.keyToggle("control","down");
                robot.keyTap("n");
                robot.keyToggle("control","up");
            }

        }
    }
    setTimeout(handleGBA,10000);
}

function handleGBA(){
    robot.setKeyboardDelay(2000);
    robot.moveMouseSmooth(1535,843);
    robot.mouseClick();
    robot.moveMouseSmooth(187,342);
    robot.mouseClick();
    robot.keyTap("enter");
    setTimeout(function(){
        robot.keyToggle("control","down");
        robot.keyTap("f1");
        robot.keyToggle("control","up");
        setTimeout(firstmove,3000);
    },3000);
}

function firstmove(){
    robot.keyTap("z");
    setTimeout(function(){
        robot.keyTap("z");
        robot.keyTap("z");
        robot.keyTap("z");
        robot.keyTap("z");
        console.log("First move done");
        setTimeout(secondmove,10000);
    },10000)
}

function secondmove(){
    robot.keyTap("z");
    setTimeout(function(){
        robot.keyTap("z");
        robot.keyTap("z");
        robot.keyTap("z");
        robot.keyTap("z");
        console.log("Second move done");
        setTimeout(thirdmove,10000);
    },10000)
}

function thirdmove(){
    robot.keyTap("z");
    robot.keyTap("z");
    robot.keyTap("z");
    robot.keyTap("z");
    robot.keyTap("z");
    robot.keyTap("z");
    robot.keyTap("down");
    robot.keyTap("down");
    robot.keyTap("z");
    console.log("Last part started");
    setTimeout(function(){
        robot.keyTap("z");
        robot.keyTap("down");
        robot.keyTap("z");
    },10000)
}
