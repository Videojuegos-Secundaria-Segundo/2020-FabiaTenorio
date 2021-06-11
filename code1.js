gdjs.Escena_322Code = {};
gdjs.Escena_322Code.GDFondiuxObjects1= [];
gdjs.Escena_322Code.GDFondiuxObjects2= [];
gdjs.Escena_322Code.GDFondiuxObjects3= [];
gdjs.Escena_322Code.GDSueliuxObjects1= [];
gdjs.Escena_322Code.GDSueliuxObjects2= [];
gdjs.Escena_322Code.GDSueliuxObjects3= [];
gdjs.Escena_322Code.GDKygoObjects1= [];
gdjs.Escena_322Code.GDKygoObjects2= [];
gdjs.Escena_322Code.GDKygoObjects3= [];
gdjs.Escena_322Code.GDSueliux2Objects1= [];
gdjs.Escena_322Code.GDSueliux2Objects2= [];
gdjs.Escena_322Code.GDSueliux2Objects3= [];
gdjs.Escena_322Code.GDTsumukoganiObjects1= [];
gdjs.Escena_322Code.GDTsumukoganiObjects2= [];
gdjs.Escena_322Code.GDTsumukoganiObjects3= [];
gdjs.Escena_322Code.GDBalaObjects1= [];
gdjs.Escena_322Code.GDBalaObjects2= [];
gdjs.Escena_322Code.GDBalaObjects3= [];
gdjs.Escena_322Code.GDDoorObjects1= [];
gdjs.Escena_322Code.GDDoorObjects2= [];
gdjs.Escena_322Code.GDDoorObjects3= [];
gdjs.Escena_322Code.GDWallForRedFloorObjects1= [];
gdjs.Escena_322Code.GDWallForRedFloorObjects2= [];
gdjs.Escena_322Code.GDWallForRedFloorObjects3= [];
gdjs.Escena_322Code.GDNewObjectObjects1= [];
gdjs.Escena_322Code.GDNewObjectObjects2= [];
gdjs.Escena_322Code.GDNewObjectObjects3= [];

gdjs.Escena_322Code.conditionTrue_0 = {val:false};
gdjs.Escena_322Code.condition0IsTrue_0 = {val:false};
gdjs.Escena_322Code.condition1IsTrue_0 = {val:false};
gdjs.Escena_322Code.condition2IsTrue_0 = {val:false};


gdjs.Escena_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Escena_322Code.GDKygoObjects1, gdjs.Escena_322Code.GDKygoObjects2);


gdjs.Escena_322Code.condition0IsTrue_0.val = false;
gdjs.Escena_322Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Escena_322Code.GDKygoObjects2.length;i<l;++i) {
    if ( gdjs.Escena_322Code.GDKygoObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Escena_322Code.condition0IsTrue_0.val = true;
        gdjs.Escena_322Code.GDKygoObjects2[k] = gdjs.Escena_322Code.GDKygoObjects2[i];
        ++k;
    }
}
gdjs.Escena_322Code.GDKygoObjects2.length = k;}if ( gdjs.Escena_322Code.condition0IsTrue_0.val ) {
{
gdjs.Escena_322Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "b"));
}}
if (gdjs.Escena_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Escena_322Code.GDKygoObjects2 */
{for(var i = 0, len = gdjs.Escena_322Code.GDKygoObjects2.length ;i < len;++i) {
    gdjs.Escena_322Code.GDKygoObjects2[i].setAnimationName("run\n");
}
}}

}


{

/* Reuse gdjs.Escena_322Code.GDKygoObjects1 */

gdjs.Escena_322Code.condition0IsTrue_0.val = false;
gdjs.Escena_322Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Escena_322Code.GDKygoObjects1.length;i<l;++i) {
    if ( !(gdjs.Escena_322Code.GDKygoObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Escena_322Code.condition0IsTrue_0.val = true;
        gdjs.Escena_322Code.GDKygoObjects1[k] = gdjs.Escena_322Code.GDKygoObjects1[i];
        ++k;
    }
}
gdjs.Escena_322Code.GDKygoObjects1.length = k;}if ( gdjs.Escena_322Code.condition0IsTrue_0.val ) {
{
gdjs.Escena_322Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1"));
}}
if (gdjs.Escena_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Escena_322Code.GDKygoObjects1 */
{for(var i = 0, len = gdjs.Escena_322Code.GDKygoObjects1.length ;i < len;++i) {
    gdjs.Escena_322Code.GDKygoObjects1[i].setAnimationName("clik");
}
}}

}


};gdjs.Escena_322Code.mapOfGDgdjs_46Escena_95322Code_46GDKygoObjects1Objects = Hashtable.newFrom({"Kygo": gdjs.Escena_322Code.GDKygoObjects1});gdjs.Escena_322Code.mapOfGDgdjs_46Escena_95322Code_46GDWallForRedFloorObjects1Objects = Hashtable.newFrom({"WallForRedFloor": gdjs.Escena_322Code.GDWallForRedFloorObjects1});gdjs.Escena_322Code.mapOfGDgdjs_46Escena_95322Code_46GDWallForRedFloorObjects1Objects = Hashtable.newFrom({"WallForRedFloor": gdjs.Escena_322Code.GDWallForRedFloorObjects1});gdjs.Escena_322Code.mapOfGDgdjs_46Escena_95322Code_46GDKygoObjects1Objects = Hashtable.newFrom({"Kygo": gdjs.Escena_322Code.GDKygoObjects1});gdjs.Escena_322Code.mapOfGDgdjs_46Escena_95322Code_46GDTsumukoganiObjects1Objects = Hashtable.newFrom({"Tsumukogani": gdjs.Escena_322Code.GDTsumukoganiObjects1});gdjs.Escena_322Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Escena_322Code.GDKygoObjects1 */

gdjs.Escena_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Escena_322Code.GDKygoObjects1.length;i<l;++i) {
    if ( gdjs.Escena_322Code.GDKygoObjects1[i].hasAnimationEnded() ) {
        gdjs.Escena_322Code.condition0IsTrue_0.val = true;
        gdjs.Escena_322Code.GDKygoObjects1[k] = gdjs.Escena_322Code.GDKygoObjects1[i];
        ++k;
    }
}
gdjs.Escena_322Code.GDKygoObjects1.length = k;}if (gdjs.Escena_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena 2", false);
}}

}


};gdjs.Escena_322Code.mapOfGDgdjs_46Escena_95322Code_46GDKygoObjects1Objects = Hashtable.newFrom({"Kygo": gdjs.Escena_322Code.GDKygoObjects1});gdjs.Escena_322Code.mapOfGDgdjs_46Escena_95322Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Escena_322Code.GDDoorObjects1});gdjs.Escena_322Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Kygo"), gdjs.Escena_322Code.GDKygoObjects1);

gdjs.Escena_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Escena_322Code.GDKygoObjects1.length;i<l;++i) {
    if ( gdjs.Escena_322Code.GDKygoObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Escena_322Code.condition0IsTrue_0.val = true;
        gdjs.Escena_322Code.GDKygoObjects1[k] = gdjs.Escena_322Code.GDKygoObjects1[i];
        ++k;
    }
}
gdjs.Escena_322Code.GDKygoObjects1.length = k;}if (gdjs.Escena_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Escena_322Code.GDKygoObjects1 */
{for(var i = 0, len = gdjs.Escena_322Code.GDKygoObjects1.length ;i < len;++i) {
    gdjs.Escena_322Code.GDKygoObjects1[i].setAnimationName("salta");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kygo"), gdjs.Escena_322Code.GDKygoObjects1);

gdjs.Escena_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Escena_322Code.GDKygoObjects1.length;i<l;++i) {
    if ( gdjs.Escena_322Code.GDKygoObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Escena_322Code.condition0IsTrue_0.val = true;
        gdjs.Escena_322Code.GDKygoObjects1[k] = gdjs.Escena_322Code.GDKygoObjects1[i];
        ++k;
    }
}
gdjs.Escena_322Code.GDKygoObjects1.length = k;}if (gdjs.Escena_322Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Escena_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Escena_322Code.condition0IsTrue_0.val = false;
{
gdjs.Escena_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Escena_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Kygo"), gdjs.Escena_322Code.GDKygoObjects1);
{for(var i = 0, len = gdjs.Escena_322Code.GDKygoObjects1.length ;i < len;++i) {
    gdjs.Escena_322Code.GDKygoObjects1[i].flipX(false);
}
}}

}


{


gdjs.Escena_322Code.condition0IsTrue_0.val = false;
{
gdjs.Escena_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Escena_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Kygo"), gdjs.Escena_322Code.GDKygoObjects1);
{for(var i = 0, len = gdjs.Escena_322Code.GDKygoObjects1.length ;i < len;++i) {
    gdjs.Escena_322Code.GDKygoObjects1[i].flipX(true);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Kygo"), gdjs.Escena_322Code.GDKygoObjects1);
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.Escena_322Code.GDKygoObjects1.length !== 0 ? gdjs.Escena_322Code.GDKygoObjects1[0] : null), -(10), -(200), 11742, 600, true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kygo"), gdjs.Escena_322Code.GDKygoObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallForRedFloor"), gdjs.Escena_322Code.GDWallForRedFloorObjects1);

gdjs.Escena_322Code.condition0IsTrue_0.val = false;
{
gdjs.Escena_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_322Code.mapOfGDgdjs_46Escena_95322Code_46GDKygoObjects1Objects, gdjs.Escena_322Code.mapOfGDgdjs_46Escena_95322Code_46GDWallForRedFloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Escena_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Escena_322Code.GDKygoObjects1 */
/* Reuse gdjs.Escena_322Code.GDWallForRedFloorObjects1 */
{for(var i = 0, len = gdjs.Escena_322Code.GDKygoObjects1.length ;i < len;++i) {
    gdjs.Escena_322Code.GDKygoObjects1[i].separateFromObjectsList(gdjs.Escena_322Code.mapOfGDgdjs_46Escena_95322Code_46GDWallForRedFloorObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kygo"), gdjs.Escena_322Code.GDKygoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tsumukogani"), gdjs.Escena_322Code.GDTsumukoganiObjects1);

gdjs.Escena_322Code.condition0IsTrue_0.val = false;
{
gdjs.Escena_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_322Code.mapOfGDgdjs_46Escena_95322Code_46GDKygoObjects1Objects, gdjs.Escena_322Code.mapOfGDgdjs_46Escena_95322Code_46GDTsumukoganiObjects1Objects, false, runtimeScene, false);
}if (gdjs.Escena_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Escena_322Code.GDKygoObjects1 */
{for(var i = 0, len = gdjs.Escena_322Code.GDKygoObjects1.length ;i < len;++i) {
    gdjs.Escena_322Code.GDKygoObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kygo"), gdjs.Escena_322Code.GDKygoObjects1);

gdjs.Escena_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Escena_322Code.GDKygoObjects1.length;i<l;++i) {
    if ( gdjs.Escena_322Code.GDKygoObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Escena_322Code.condition0IsTrue_0.val = true;
        gdjs.Escena_322Code.GDKygoObjects1[k] = gdjs.Escena_322Code.GDKygoObjects1[i];
        ++k;
    }
}
gdjs.Escena_322Code.GDKygoObjects1.length = k;}if (gdjs.Escena_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Escena_322Code.GDKygoObjects1 */
{for(var i = 0, len = gdjs.Escena_322Code.GDKygoObjects1.length ;i < len;++i) {
    gdjs.Escena_322Code.GDKygoObjects1[i].setAnimationName("daño");
}
}
{ //Subevents
gdjs.Escena_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Escena_322Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Kygo"), gdjs.Escena_322Code.GDKygoObjects1);

gdjs.Escena_322Code.condition0IsTrue_0.val = false;
{
gdjs.Escena_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_322Code.mapOfGDgdjs_46Escena_95322Code_46GDKygoObjects1Objects, gdjs.Escena_322Code.mapOfGDgdjs_46Escena_95322Code_46GDDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Escena_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Escena_322Code.GDDoorObjects1 */
{for(var i = 0, len = gdjs.Escena_322Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.Escena_322Code.GDDoorObjects1[i].setAnimationName("Open");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Escena_322Code.GDDoorObjects1);

gdjs.Escena_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Escena_322Code.GDDoorObjects1.length;i<l;++i) {
    if ( gdjs.Escena_322Code.GDDoorObjects1[i].hasAnimationEnded() ) {
        gdjs.Escena_322Code.condition0IsTrue_0.val = true;
        gdjs.Escena_322Code.GDDoorObjects1[k] = gdjs.Escena_322Code.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.Escena_322Code.GDDoorObjects1.length = k;}if (gdjs.Escena_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena3", false);
}}

}


};

gdjs.Escena_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Escena_322Code.GDFondiuxObjects1.length = 0;
gdjs.Escena_322Code.GDFondiuxObjects2.length = 0;
gdjs.Escena_322Code.GDFondiuxObjects3.length = 0;
gdjs.Escena_322Code.GDSueliuxObjects1.length = 0;
gdjs.Escena_322Code.GDSueliuxObjects2.length = 0;
gdjs.Escena_322Code.GDSueliuxObjects3.length = 0;
gdjs.Escena_322Code.GDKygoObjects1.length = 0;
gdjs.Escena_322Code.GDKygoObjects2.length = 0;
gdjs.Escena_322Code.GDKygoObjects3.length = 0;
gdjs.Escena_322Code.GDSueliux2Objects1.length = 0;
gdjs.Escena_322Code.GDSueliux2Objects2.length = 0;
gdjs.Escena_322Code.GDSueliux2Objects3.length = 0;
gdjs.Escena_322Code.GDTsumukoganiObjects1.length = 0;
gdjs.Escena_322Code.GDTsumukoganiObjects2.length = 0;
gdjs.Escena_322Code.GDTsumukoganiObjects3.length = 0;
gdjs.Escena_322Code.GDBalaObjects1.length = 0;
gdjs.Escena_322Code.GDBalaObjects2.length = 0;
gdjs.Escena_322Code.GDBalaObjects3.length = 0;
gdjs.Escena_322Code.GDDoorObjects1.length = 0;
gdjs.Escena_322Code.GDDoorObjects2.length = 0;
gdjs.Escena_322Code.GDDoorObjects3.length = 0;
gdjs.Escena_322Code.GDWallForRedFloorObjects1.length = 0;
gdjs.Escena_322Code.GDWallForRedFloorObjects2.length = 0;
gdjs.Escena_322Code.GDWallForRedFloorObjects3.length = 0;
gdjs.Escena_322Code.GDNewObjectObjects1.length = 0;
gdjs.Escena_322Code.GDNewObjectObjects2.length = 0;
gdjs.Escena_322Code.GDNewObjectObjects3.length = 0;

gdjs.Escena_322Code.eventsList2(runtimeScene);
return;

}

gdjs['Escena_322Code'] = gdjs.Escena_322Code;
