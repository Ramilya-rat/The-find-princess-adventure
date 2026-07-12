gdjs.WINCode = {};
gdjs.WINCode.localVariables = [];
gdjs.WINCode.idToCallbackMap = new Map();
gdjs.WINCode.GDWinObjects1= [];
gdjs.WINCode.GDWinObjects2= [];
gdjs.WINCode.GDTrophyObjects1= [];
gdjs.WINCode.GDTrophyObjects2= [];
gdjs.WINCode.GDPrincesObjects1= [];
gdjs.WINCode.GDPrincesObjects2= [];
gdjs.WINCode.GDPlayerObjects1= [];
gdjs.WINCode.GDPlayerObjects2= [];
gdjs.WINCode.GDWin2Objects1= [];
gdjs.WINCode.GDWin2Objects2= [];
gdjs.WINCode.GDYellowButtonObjects1= [];
gdjs.WINCode.GDYellowButtonObjects2= [];


gdjs.WINCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.WINCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WINCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.WINCode.GDYellowButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.WINCode.GDYellowButtonObjects1[k] = gdjs.WINCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.WINCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Меню", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "the-sound-of-victory-winning.mp3", 6, false, 40, 1);
}
}

}


};

gdjs.WINCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WINCode.GDWinObjects1.length = 0;
gdjs.WINCode.GDWinObjects2.length = 0;
gdjs.WINCode.GDTrophyObjects1.length = 0;
gdjs.WINCode.GDTrophyObjects2.length = 0;
gdjs.WINCode.GDPrincesObjects1.length = 0;
gdjs.WINCode.GDPrincesObjects2.length = 0;
gdjs.WINCode.GDPlayerObjects1.length = 0;
gdjs.WINCode.GDPlayerObjects2.length = 0;
gdjs.WINCode.GDWin2Objects1.length = 0;
gdjs.WINCode.GDWin2Objects2.length = 0;
gdjs.WINCode.GDYellowButtonObjects1.length = 0;
gdjs.WINCode.GDYellowButtonObjects2.length = 0;

gdjs.WINCode.eventsList0(runtimeScene);
gdjs.WINCode.GDWinObjects1.length = 0;
gdjs.WINCode.GDWinObjects2.length = 0;
gdjs.WINCode.GDTrophyObjects1.length = 0;
gdjs.WINCode.GDTrophyObjects2.length = 0;
gdjs.WINCode.GDPrincesObjects1.length = 0;
gdjs.WINCode.GDPrincesObjects2.length = 0;
gdjs.WINCode.GDPlayerObjects1.length = 0;
gdjs.WINCode.GDPlayerObjects2.length = 0;
gdjs.WINCode.GDWin2Objects1.length = 0;
gdjs.WINCode.GDWin2Objects2.length = 0;
gdjs.WINCode.GDYellowButtonObjects1.length = 0;
gdjs.WINCode.GDYellowButtonObjects2.length = 0;


return;

}

gdjs['WINCode'] = gdjs.WINCode;
