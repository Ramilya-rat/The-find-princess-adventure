gdjs._1048_1075_1088_1072Code = {};
gdjs._1048_1075_1088_1072Code.localVariables = [];
gdjs._1048_1075_1088_1072Code.idToCallbackMap = new Map();
gdjs._1048_1075_1088_1072Code.GDPlatformerObjects1= [];
gdjs._1048_1075_1088_1072Code.GDPlatformerObjects2= [];
gdjs._1048_1075_1088_1072Code.GDPlatformerObjects3= [];
gdjs._1048_1075_1088_1072Code.GDPlayerObjects1= [];
gdjs._1048_1075_1088_1072Code.GDPlayerObjects2= [];
gdjs._1048_1075_1088_1072Code.GDPlayerObjects3= [];
gdjs._1048_1075_1088_1072Code.GDSpikesObjects1= [];
gdjs._1048_1075_1088_1072Code.GDSpikesObjects2= [];
gdjs._1048_1075_1088_1072Code.GDSpikesObjects3= [];
gdjs._1048_1075_1088_1072Code.GDCoinObjects1= [];
gdjs._1048_1075_1088_1072Code.GDCoinObjects2= [];
gdjs._1048_1075_1088_1072Code.GDCoinObjects3= [];
gdjs._1048_1075_1088_1072Code.GDLadderObjects1= [];
gdjs._1048_1075_1088_1072Code.GDLadderObjects2= [];
gdjs._1048_1075_1088_1072Code.GDLadderObjects3= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595VObjects1= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595VObjects2= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595VObjects3= [];
gdjs._1048_1075_1088_1072Code.GDLavaObjects1= [];
gdjs._1048_1075_1088_1072Code.GDLavaObjects2= [];
gdjs._1048_1075_1088_1072Code.GDLavaObjects3= [];
gdjs._1048_1075_1088_1072Code.GDLock_9595ClosedObjects1= [];
gdjs._1048_1075_1088_1072Code.GDLock_9595ClosedObjects2= [];
gdjs._1048_1075_1088_1072Code.GDLock_9595ClosedObjects3= [];
gdjs._1048_1075_1088_1072Code.GDDoorObjects1= [];
gdjs._1048_1075_1088_1072Code.GDDoorObjects2= [];
gdjs._1048_1075_1088_1072Code.GDDoorObjects3= [];
gdjs._1048_1075_1088_1072Code.GDPrincessObjects1= [];
gdjs._1048_1075_1088_1072Code.GDPrincessObjects2= [];
gdjs._1048_1075_1088_1072Code.GDPrincessObjects3= [];
gdjs._1048_1075_1088_1072Code.GDFinalTextObjects1= [];
gdjs._1048_1075_1088_1072Code.GDFinalTextObjects2= [];
gdjs._1048_1075_1088_1072Code.GDFinalTextObjects3= [];
gdjs._1048_1075_1088_1072Code.GDDecorObjects1= [];
gdjs._1048_1075_1088_1072Code.GDDecorObjects2= [];
gdjs._1048_1075_1088_1072Code.GDDecorObjects3= [];
gdjs._1048_1075_1088_1072Code.GDCoin_9595TextObjects1= [];
gdjs._1048_1075_1088_1072Code.GDCoin_9595TextObjects2= [];
gdjs._1048_1075_1088_1072Code.GDCoin_9595TextObjects3= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595HObjects1= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595HObjects2= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595HObjects3= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595H2Objects1= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595H2Objects2= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595H2Objects3= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595V2Objects1= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595V2Objects2= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595V2Objects3= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595V3Objects1= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595V3Objects2= [];
gdjs._1048_1075_1088_1072Code.GDCloud_9595V3Objects3= [];
gdjs._1048_1075_1088_1072Code.GDFlagObjects1= [];
gdjs._1048_1075_1088_1072Code.GDFlagObjects2= [];
gdjs._1048_1075_1088_1072Code.GDFlagObjects3= [];
gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects1= [];
gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects2= [];
gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects3= [];
gdjs._1048_1075_1088_1072Code.GDCastles_9595BackgroundObjects1= [];
gdjs._1048_1075_1088_1072Code.GDCastles_9595BackgroundObjects2= [];
gdjs._1048_1075_1088_1072Code.GDCastles_9595BackgroundObjects3= [];


gdjs._1048_1075_1088_1072Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Castles_Background"), gdjs._1048_1075_1088_1072Code.GDCastles_9595BackgroundObjects2);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(35);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(585);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "2fcc3ba83d5dc889db171f33bd30a9888bb609d397fcba47ac4bb56ef3353492_07 - the town where i got the magic bottle (chiptune).aac", 1, true, 10, 1);
}
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDCastles_9595BackgroundObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDCastles_9595BackgroundObjects2[i].setColor("255;166;124");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1048_1075_1088_1072Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs._1048_1075_1088_1072Code.GDPlayerObjects1.length !== 0 ? gdjs._1048_1075_1088_1072Code.GDPlayerObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 100000000, 700, "", 0);
}
}

}


};gdjs._1048_1075_1088_1072Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1048_1075_1088_1072Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[k] = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1048_1075_1088_1072Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1048_1075_1088_1072Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[k] = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1048_1075_1088_1072Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1048_1075_1088_1072Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[k] = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1048_1075_1088_1072Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1048_1075_1088_1072Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[k] = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1048_1075_1088_1072Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1048_1075_1088_1072Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1048_1075_1088_1072Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._1048_1075_1088_1072Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs._1048_1075_1088_1072Code.GDPlayerObjects1[k] = gdjs._1048_1075_1088_1072Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1048_1075_1088_1072Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1048_1075_1088_1072Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs._1048_1075_1088_1072Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs._1048_1075_1088_1072Code.GDPlayerObjects1[k] = gdjs._1048_1075_1088_1072Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1048_1075_1088_1072Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._1048_1075_1088_1072Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


};gdjs._1048_1075_1088_1072Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin_Text"), gdjs._1048_1075_1088_1072Code.GDCoin_9595TextObjects2);
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDCoin_9595TextObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDCoin_9595TextObjects2[i].getBehavior("Text").setText(+(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedSmoothHeart"), gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects1.length;i<l;++i) {
    if ( gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects1[i].Value(null) == 0 ) {
        isConditionTrue_0 = true;
        gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects1[k] = gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects1[i];
        ++k;
    }
}
gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Игра", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
}

}


};gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._1048_1075_1088_1072Code.GDPlayerObjects2});
gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs._1048_1075_1088_1072Code.GDCoinObjects2});
gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._1048_1075_1088_1072Code.GDPlayerObjects2});
gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDSpikesObjects2Objects = Hashtable.newFrom({"Spikes": gdjs._1048_1075_1088_1072Code.GDSpikesObjects2});
gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._1048_1075_1088_1072Code.GDPlayerObjects2});
gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDLavaObjects2Objects = Hashtable.newFrom({"Lava": gdjs._1048_1075_1088_1072Code.GDLavaObjects2});
gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._1048_1075_1088_1072Code.GDPlayerObjects2});
gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs._1048_1075_1088_1072Code.GDDoorObjects2});
gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._1048_1075_1088_1072Code.GDPlayerObjects2});
gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDFlagObjects2Objects = Hashtable.newFrom({"Flag": gdjs._1048_1075_1088_1072Code.GDFlagObjects2});
gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._1048_1075_1088_1072Code.GDPlayerObjects1});
gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDPrincessObjects1Objects = Hashtable.newFrom({"Princess": gdjs._1048_1075_1088_1072Code.GDPrincessObjects1});
gdjs._1048_1075_1088_1072Code.asyncCallback12683780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1048_1075_1088_1072Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "WIN", false);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "db697220b0d8e5a160d7bb4376feb30edafb48fff8c406736eebcd4911edc6d2_Coins 4.aac", 3, false, 30, 1);
}
gdjs._1048_1075_1088_1072Code.localVariables.length = 0;
}
gdjs._1048_1075_1088_1072Code.idToCallbackMap.set(12683780, gdjs._1048_1075_1088_1072Code.asyncCallback12683780);
gdjs._1048_1075_1088_1072Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1048_1075_1088_1072Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._1048_1075_1088_1072Code.asyncCallback12683780(runtimeScene, asyncObjectsList)), 12683780, asyncObjectsList);
}
}

}


};gdjs._1048_1075_1088_1072Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs._1048_1075_1088_1072Code.GDCoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1048_1075_1088_1072Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDPlayerObjects2Objects, gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDCoinObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._1048_1075_1088_1072Code.GDCoinObjects2 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "c52f1dacc263a2a6dc94e712a2a148f909b73372fa8e0622cb237fdc6a72fd6c_Coins 8.aac", 2, false, 30, 1);
}
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDCoinObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1048_1075_1088_1072Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs._1048_1075_1088_1072Code.GDSpikesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDPlayerObjects2Objects, gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDSpikesObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._1048_1075_1088_1072Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("RedSmoothHeart"), gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "1f1ebe8108992cd14f6e6efd76a9b665945c890b833501122abe84f5c6519b24_Hit 5.aac", 3, false, 30, 1);
}
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i].setX(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i].setY(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects2[i].SetValue(gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects2[i].Value(null) - (1), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lava"), gdjs._1048_1075_1088_1072Code.GDLavaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1048_1075_1088_1072Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDPlayerObjects2Objects, gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDLavaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._1048_1075_1088_1072Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("RedSmoothHeart"), gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "1f1ebe8108992cd14f6e6efd76a9b665945c890b833501122abe84f5c6519b24_Hit 5.aac", 3, false, 30, 1);
}
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i].setX(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDPlayerObjects2[i].setY(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects2[i].SetValue(gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects2[i].Value(null) - (1), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs._1048_1075_1088_1072Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1048_1075_1088_1072Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDPlayerObjects2Objects, gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDDoorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= 10);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._1048_1075_1088_1072Code.GDDoorObjects2 */
gdjs.copyArray(runtimeScene.getObjects("FinalText"), gdjs._1048_1075_1088_1072Code.GDFinalTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lock_Closed"), gdjs._1048_1075_1088_1072Code.GDLock_9595ClosedObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "db697220b0d8e5a160d7bb4376feb30edafb48fff8c406736eebcd4911edc6d2_Coins 4.aac", 3, false, 30, 1);
}
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDLock_9595ClosedObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDLock_9595ClosedObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDDoorObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDFinalTextObjects2.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDFinalTextObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs._1048_1075_1088_1072Code.GDFlagObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1048_1075_1088_1072Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDPlayerObjects2Objects, gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDFlagObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(485);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(395);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1048_1075_1088_1072Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs._1048_1075_1088_1072Code.GDPrincessObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDPlayerObjects1Objects, gdjs._1048_1075_1088_1072Code.mapOfGDgdjs_9546_95951048_95951075_95951088_95951072Code_9546GDPrincessObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._1048_1075_1088_1072Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._1048_1075_1088_1072Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1048_1075_1088_1072Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}

{ //Subevents
gdjs._1048_1075_1088_1072Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs._1048_1075_1088_1072Code.eventsList5 = function(runtimeScene) {

{


gdjs._1048_1075_1088_1072Code.eventsList0(runtimeScene);
}


{


gdjs._1048_1075_1088_1072Code.eventsList1(runtimeScene);
}


{


gdjs._1048_1075_1088_1072Code.eventsList2(runtimeScene);
}


{


gdjs._1048_1075_1088_1072Code.eventsList4(runtimeScene);
}


};

gdjs._1048_1075_1088_1072Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1048_1075_1088_1072Code.GDPlatformerObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDPlatformerObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDPlatformerObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDPlayerObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDPlayerObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDSpikesObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDSpikesObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDSpikesObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCoinObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCoinObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCoinObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDLadderObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDLadderObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDLadderObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595VObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595VObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595VObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDLavaObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDLavaObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDLavaObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDLock_9595ClosedObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDLock_9595ClosedObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDLock_9595ClosedObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDDoorObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDDoorObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDDoorObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDPrincessObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDPrincessObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDPrincessObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDFinalTextObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDFinalTextObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDFinalTextObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDDecorObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDDecorObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDDecorObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCoin_9595TextObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCoin_9595TextObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCoin_9595TextObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595HObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595HObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595HObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595H2Objects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595H2Objects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595H2Objects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595V2Objects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595V2Objects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595V2Objects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595V3Objects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595V3Objects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595V3Objects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDFlagObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDFlagObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDFlagObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCastles_9595BackgroundObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCastles_9595BackgroundObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCastles_9595BackgroundObjects3.length = 0;

gdjs._1048_1075_1088_1072Code.eventsList5(runtimeScene);
gdjs._1048_1075_1088_1072Code.GDPlatformerObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDPlatformerObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDPlatformerObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDPlayerObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDPlayerObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDPlayerObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDSpikesObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDSpikesObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDSpikesObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCoinObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCoinObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCoinObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDLadderObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDLadderObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDLadderObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595VObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595VObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595VObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDLavaObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDLavaObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDLavaObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDLock_9595ClosedObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDLock_9595ClosedObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDLock_9595ClosedObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDDoorObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDDoorObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDDoorObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDPrincessObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDPrincessObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDPrincessObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDFinalTextObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDFinalTextObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDFinalTextObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDDecorObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDDecorObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDDecorObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCoin_9595TextObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCoin_9595TextObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCoin_9595TextObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595HObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595HObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595HObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595H2Objects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595H2Objects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595H2Objects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595V2Objects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595V2Objects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595V2Objects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595V3Objects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595V3Objects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCloud_9595V3Objects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDFlagObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDFlagObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDFlagObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDRedSmoothHeartObjects3.length = 0;
gdjs._1048_1075_1088_1072Code.GDCastles_9595BackgroundObjects1.length = 0;
gdjs._1048_1075_1088_1072Code.GDCastles_9595BackgroundObjects2.length = 0;
gdjs._1048_1075_1088_1072Code.GDCastles_9595BackgroundObjects3.length = 0;


return;

}

gdjs['_1048_1075_1088_1072Code'] = gdjs._1048_1075_1088_1072Code;
