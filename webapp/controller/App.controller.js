sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.App", {
        increment: function () {
            let myTextElement = this.getView().byId("counter");
            let currentCount = myTextElement.getText();
            currentCount++;
            myTextElement.setText(currentCount);
        },
        decrement: function () {
            let myTextElement = this.getView().byId("counter");
            let currentCount = myTextElement.getText();
            currentCount--;
            if(currentCount < 0) {
                currentCount = 0;
                alert("Counter cannot be negative");
            }
            else {
                myTextElement.setText(currentCount);
            }
        }
    });
}
)