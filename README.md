# harvest-chrome-ext
Improve Harvest Estimate Experience with a Chrome extension.

# TODO
## General
 - [ ] Default client is <empty>
 - [ ] Live total hours count
 - [ ] Love total hours calculation for project management (20%)
 - [ ] Can choose a default type when adding a new row
    - [ ] And define a default hourly rate

## Templating system
The idea is to faciliate the creation of estimate by adding the feature of default "item type with pre-estimated contents".

Here the minimum data structure needed
```json
{
     "itemName: "Conception – Design fonctionnel",
     "itemType": "service",
     "defaultDescription: "Free text with with {tokonized} variables",
     "defaultEstimationInHours: 14,
}
```

 - [ ] Update the interface to add this magic button
       ![Example of interface](http://i.imgur.com/ab2Oqe0.png)
 - [ ] Item template should be shareable (eq. stored in a google spreadsheet)
 - [ ] Item template should support questionnable token. After adding an item template a serie of question is prompted to user to validate selectionned texts. Ex. if the description contain `{3 maquettes des pages clés (home, catégories, produits)}`. The extension will ask: ![Ask question](http://i.imgur.com/LEOCxtu.png)

## Firefox support
 - [ ] Port to a Firefox extension
