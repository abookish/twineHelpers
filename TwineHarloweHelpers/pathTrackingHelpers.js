/*to use, copy into your story's Javascript section
    call in Passages with <script>setCurrentPath();</script>*/
window.setCurrentPath = function () {
    const arrayVarNames = ["variableNameReplaceMe"] //add the Harlowe variable names you will use to track each path score as comma-separated strings
    let currentMax = 0
    let currentPathString = ""
    arrayVarNames.forEach(varName => {
        if (Harlowe.State.variables[varName] > currentMax) {
            currentMax = Harlowe.State.variables[varName]
            Harlowe.State.variables['currentPathString'] = varName
        }
    })
}
