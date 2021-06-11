gdjs.Escena_321Code = {};
gdjs.Escena_321Code.GDFondiniObjects1= [];
gdjs.Escena_321Code.GDFondiniObjects2= [];
gdjs.Escena_321Code.GDKygoObjects1= [];
gdjs.Escena_321Code.GDKygoObjects2= [];
gdjs.Escena_321Code.GDCofreObjects1= [];
gdjs.Escena_321Code.GDCofreObjects2= [];
gdjs.Escena_321Code.GDPuertaObjects1= [];
gdjs.Escena_321Code.GDPuertaObjects2= [];
gdjs.Escena_321Code.GDWallForRedFloorObjects1= [];
gdjs.Escena_321Code.GDWallForRedFloorObjects2= [];

gdjs.Escena_321Code.conditionTrue_0 = {val:false};
gdjs.Escena_321Code.condition0IsTrue_0 = {val:false};
gdjs.Escena_321Code.condition1IsTrue_0 = {val:false};


gdjs.Escena_321Code.mapOfGDgdjs_46Escena_95321Code_46GDKygoObjects1Objects = Hashtable.newFrom({"Kygo": gdjs.Escena_321Code.GDKygoObjects1});gdjs.Escena_321Code.mapOfGDgdjs_46Escena_95321Code_46GDPuertaObjects1Objects = Hashtable.newFrom({"Puerta": gdjs.Escena_321Code.GDPuertaObjects1});gdjs.Escena_321Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Escena_321Code.GDPuertaObjects1 */

gdjs.Escena_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Escena_321Code.GDPuertaObjects1.length;i<l;++i) {
    if ( gdjs.Escena_321Code.GDPuertaObjects1[i].hasAnimationEnded() ) {
        gdjs.Escena_321Code.condition0IsTrue_0.val = true;
        gdjs.Escena_321Code.GDPuertaObjects1[k] = gdjs.Escena_321Code.GDPuertaObjects1[i];
        ++k;
    }
}
gdjs.Escena_321Code.GDPuertaObjects1.length = k;}if (gdjs.Escena_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena 2", false);
}}

}


};gdjs.Escena_321Code.mapOfGDgdjs_46Escena_95321Code_46GDKygoObjects1Objects = Hashtable.newFrom({"Kygo": gdjs.Escena_321Code.GDKygoObjects1});gdjs.Escena_321Code.mapOfGDgdjs_46Escena_95321Code_46GDCofreObjects1Objects = Hashtable.newFrom({"Cofre": gdjs.Escena_321Code.GDCofreObjects1});gdjs.Escena_321Code.mapOfGDgdjs_46Escena_95321Code_46GDKygoObjects1Objects = Hashtable.newFrom({"Kygo": gdjs.Escena_321Code.GDKygoObjects1});gdjs.Escena_321Code.mapOfGDgdjs_46Escena_95321Code_46GDWallForRedFloorObjects1Objects = Hashtable.newFrom({"WallForRedFloor": gdjs.Escena_321Code.GDWallForRedFloorObjects1});gdjs.Escena_321Code.mapOfGDgdjs_46Escena_95321Code_46GDWallForRedFloorObjects1Objects = Hashtable.newFrom({"WallForRedFloor": gdjs.Escena_321Code.GDWallForRedFloorObjects1});gdjs.Escena_321Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Kygo"), gdjs.Escena_321Code.GDKygoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Puerta"), gdjs.Escena_321Code.GDPuertaObjects1);

gdjs.Escena_321Code.condition0IsTrue_0.val = false;
{
gdjs.Escena_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_321Code.mapOfGDgdjs_46Escena_95321Code_46GDKygoObjects1Objects, gdjs.Escena_321Code.mapOfGDgdjs_46Escena_95321Code_46GDPuertaObjects1Objects, false, runtimeScene, false);
}if (gdjs.Escena_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Escena_321Code.GDPuertaObjects1 */
{for(var i = 0, len = gdjs.Escena_321Code.GDPuertaObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDPuertaObjects1[i].setAnimationName("desvanecer");
}
}
{ //Subevents
gdjs.Escena_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cofre"), gdjs.Escena_321Code.GDCofreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Kygo"), gdjs.Escena_321Code.GDKygoObjects1);

gdjs.Escena_321Code.condition0IsTrue_0.val = false;
{
gdjs.Escena_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_321Code.mapOfGDgdjs_46Escena_95321Code_46GDKygoObjects1Objects, gdjs.Escena_321Code.mapOfGDgdjs_46Escena_95321Code_46GDCofreObjects1Objects, false, runtimeScene, false);
}if (gdjs.Escena_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Escena_321Code.GDCofreObjects1 */
{for(var i = 0, len = gdjs.Escena_321Code.GDCofreObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDCofreObjects1[i].setAnimationName("abrir");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kygo"), gdjs.Escena_321Code.GDKygoObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallForRedFloor"), gdjs.Escena_321Code.GDWallForRedFloorObjects1);

gdjs.Escena_321Code.condition0IsTrue_0.val = false;
{
gdjs.Escena_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_321Code.mapOfGDgdjs_46Escena_95321Code_46GDKygoObjects1Objects, gdjs.Escena_321Code.mapOfGDgdjs_46Escena_95321Code_46GDWallForRedFloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Escena_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Escena_321Code.GDKygoObjects1 */
/* Reuse gdjs.Escena_321Code.GDWallForRedFloorObjects1 */
{for(var i = 0, len = gdjs.Escena_321Code.GDKygoObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDKygoObjects1[i].separateFromObjectsList(gdjs.Escena_321Code.mapOfGDgdjs_46Escena_95321Code_46GDWallForRedFloorObjects1Objects, false);
}
}}

}


};

gdjs.Escena_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Escena_321Code.GDFondiniObjects1.length = 0;
gdjs.Escena_321Code.GDFondiniObjects2.length = 0;
gdjs.Escena_321Code.GDKygoObjects1.length = 0;
gdjs.Escena_321Code.GDKygoObjects2.length = 0;
gdjs.Escena_321Code.GDCofreObjects1.length = 0;
gdjs.Escena_321Code.GDCofreObjects2.length = 0;
gdjs.Escena_321Code.GDPuertaObjects1.length = 0;
gdjs.Escena_321Code.GDPuertaObjects2.length = 0;
gdjs.Escena_321Code.GDWallForRedFloorObjects1.length = 0;
gdjs.Escena_321Code.GDWallForRedFloorObjects2.length = 0;

gdjs.Escena_321Code.eventsList1(runtimeScene);
return;

}

gdjs['Escena_321Code'] = gdjs.Escena_321Code;
