var Thread = Java.type("java.lang.Thread");  
function execute(action) { out("Test Script: " + action.getName()); publishStart(); action.setExitCode(0); action.setResultText("done."); out("Test Script: Done"); return action; }  
function publishStart() { out("ColorSorter ConditionMonitoring Observation"); mqttManager.publish("Factory/ConditionMonitoring", '{"Observation":{"MachineID":123456789,"SensorTypeCode":"Temperature","LocationID":"C2.001","MeasureContent":25,"MeasureUnitCode":"CEL","DateTime":"2026-04-02T10:25:00Z"}}'); } 
function out(message){ output.print(message); } 