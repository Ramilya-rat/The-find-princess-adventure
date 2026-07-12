gdjs._1052_1077_1085_1102Code = {};
gdjs._1052_1077_1085_1102Code.localVariables = [];
gdjs._1052_1077_1085_1102Code.idToCallbackMap = new Map();
gdjs._1052_1077_1085_1102Code.GDPlatformObjects1= [];
gdjs._1052_1077_1085_1102Code.GDPlatformObjects2= [];
gdjs._1052_1077_1085_1102Code.GDDecorObjects1= [];
gdjs._1052_1077_1085_1102Code.GDDecorObjects2= [];
gdjs._1052_1077_1085_1102Code.GDStartTEXTObjects1= [];
gdjs._1052_1077_1085_1102Code.GDStartTEXTObjects2= [];
gdjs._1052_1077_1085_1102Code.GDYellowButtonObjects1= [];
gdjs._1052_1077_1085_1102Code.GDYellowButtonObjects2= [];
gdjs._1052_1077_1085_1102Code.GDNewSpriteObjects1= [];
gdjs._1052_1077_1085_1102Code.GDNewSpriteObjects2= [];
gdjs._1052_1077_1085_1102Code.GDPlaerObjects1= [];
gdjs._1052_1077_1085_1102Code.GDPlaerObjects2= [];
gdjs._1052_1077_1085_1102Code.GDText_95951Objects1= [];
gdjs._1052_1077_1085_1102Code.GDText_95951Objects2= [];


gdjs._1052_1077_1085_1102Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs._1052_1077_1085_1102Code.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1052_1077_1085_1102Code.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs._1052_1077_1085_1102Code.GDYellowButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._1052_1077_1085_1102Code.GDYellowButtonObjects1[k] = gdjs._1052_1077_1085_1102Code.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs._1052_1077_1085_1102Code.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Игра", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "e6064270c17e44749731109caae5235232e0d30069c78312d0f3334346afbbf1_04 - castle nosferatu.aac", 1, false, 20, 1);
}
}

}


};

gdjs._1052_1077_1085_1102Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1052_1077_1085_1102Code.GDPlatformObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDPlatformObjects2.length = 0;
gdjs._1052_1077_1085_1102Code.GDDecorObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDDecorObjects2.length = 0;
gdjs._1052_1077_1085_1102Code.GDStartTEXTObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDStartTEXTObjects2.length = 0;
gdjs._1052_1077_1085_1102Code.GDYellowButtonObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDYellowButtonObjects2.length = 0;
gdjs._1052_1077_1085_1102Code.GDNewSpriteObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDNewSpriteObjects2.length = 0;
gdjs._1052_1077_1085_1102Code.GDPlaerObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDPlaerObjects2.length = 0;
gdjs._1052_1077_1085_1102Code.GDText_95951Objects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDText_95951Objects2.length = 0;

gdjs._1052_1077_1085_1102Code.eventsList0(runtimeScene);
gdjs._1052_1077_1085_1102Code.GDPlatformObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDPlatformObjects2.length = 0;
gdjs._1052_1077_1085_1102Code.GDDecorObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDDecorObjects2.length = 0;
gdjs._1052_1077_1085_1102Code.GDStartTEXTObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDStartTEXTObjects2.length = 0;
gdjs._1052_1077_1085_1102Code.GDYellowButtonObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDYellowButtonObjects2.length = 0;
gdjs._1052_1077_1085_1102Code.GDNewSpriteObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDNewSpriteObjects2.length = 0;
gdjs._1052_1077_1085_1102Code.GDPlaerObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDPlaerObjects2.length = 0;
gdjs._1052_1077_1085_1102Code.GDText_95951Objects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDText_95951Objects2.length = 0;


return;

}

gdjs['_1052_1077_1085_1102Code'] = gdjs._1052_1077_1085_1102Code;
