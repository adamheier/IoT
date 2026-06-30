var Thread = Java.type("java.lang.Thread");  
function execute(action) { out("Test Script: " + action.getName()); publishStart(); action.setExitCode(0); action.setResultText("done."); out("Test Script: Done"); return action; }  
function publishStart() { out("ColorSorter Production Confirmation"); mqttManager.publish("Factory/ProductionControl/Confirmation", '{"ProductionConfirmation":{"OrderReferenceID":4711,"ActualStartDateTime":"2026-04-02T10:25:00Z","ActualEndDateTime":"2026-04-02T10:30:00Z","StatusCode":"ok"}}');} 
function out(message){ output.print(message); } 