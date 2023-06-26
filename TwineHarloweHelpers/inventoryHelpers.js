//to use, copy into your story's Javascript section
//this assumes an existing container with id "inventory" and a Harlowe variable string array "inventory"
window.getInventoryText = function () {
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