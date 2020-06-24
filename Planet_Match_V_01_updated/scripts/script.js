const Scene = require('Scene');
const Patches = require('Patches');

Promise.all([
    Scene.root.findFirst('FailText'),
]).then(function (results) {

    const failText = results[0];

    // Get the output from the 'PatchValue' created in the To Script bridge and updated in the Patch Editor.
    Patches.outputs.getScalar('FailValue').then(failValue => {

        // assign the .text property of 'theText' to the patchValue.
        // convert the patchValue scalar signal to a string using the .toString() method.
        failText.text = failValue.toString();

        // update the blink count in the Debug Console
        Diagnostics.watch("Blink Count: ", failValue);

    });

});
