# twineHelpers
Some helper methods for the text-based game engine Twine

**setCurrentPath**: is designed for games with multiple ending outcomes, and will help you track the ending with the highest score so you can dynamically branch as you go. Just define each outcome as a varible and increment based on user choices. Then, input those variables in const arrayVarNames = ["variableNameReplaceMe"] in pathTrackingHelpers

The methods in **inventoryHelpers** are a simple inventory system for twine games. Create an array variable "inventory" and add to it in-game. Then, for a list of items in inventory, use **getInventoryText** 
