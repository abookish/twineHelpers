/*to use, copy into your story's Javascript section
    call in Passages with <script>getInventoryBackground();</script>
    
    example use in a Footer tagged passage with defined inventory span:
        <span id="inventory"> </span>
        < script > getInventoryBackground();</script >*/

window.getInventoryText = function () {
    //this assumes a defined Harlowe variable string array "inventory"
    const inventory = Harlowe.State.variables["inventory"].sort()
    return inventory.join("")
}
window.getInventoryBackground = function () {
    const inventoryText = window.getInventoryText()

    if (inventoryText.length === 0) {
        return null
    }
    else {
        $('#inventory').addClass(`${inventoryText}`)
    }
}
