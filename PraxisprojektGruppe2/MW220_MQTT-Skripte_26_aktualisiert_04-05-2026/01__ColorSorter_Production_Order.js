var Thread = Java.type("java.lang.Thread");

function execute(action) {
    out("Test Script: " + action.getName());
    publishStart();
    action.setExitCode(0);
    action.setResultText("done.");
    out("Test Script: Done");
    return action;
}

function publishStart() {
    out("ColorSorter Production Order");
    mqttManager.publish("Factory/ProductionControl/Order",'{"ProductionOrder":{"ID":4711,"FinishedProductID":1234,"QuantityContent":1,"QuantityUnitCode":"ST","PlannedStartDateTime":"2026-04-02T10:20:00Z","Components":[{"ProductColorCode":"red","QuantityContent":1,"QuantityUnitCode":"ST"},{"ProductColorCode":"yellow","QuantityContent":2,"QuantityUnitCode":"ST"},{"ProductColorCode":"green","QuantityContent":0,"QuantityUnitCode":"ST"},{"ProductColorCode":"blue","QuantityContent":2,"QuantityUnitCode":"ST"}]}}');
}
function out(message){
     output.print(message);
}
