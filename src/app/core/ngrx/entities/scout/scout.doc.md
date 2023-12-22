# Actions

## Create

### ReqSearchMarket

-   This action searches the the database for matches according to the criteria provided.
-   Input: `MarketSearch` object model found in `componentModels`.
-   Output: Market Search Result for the provided criteria

### ReqCreateMarket

-   This action creates the market after showing the user search results.
-   Input: Full `market` object without the `id` field.
-   Output: Complete Market

## Read

### ReqScoutFormData

-   Retrieves all the data needed for the create/edit market page
-   Input: Optional value for the `scoutId` in case of an edit.
-   Output: `scout`, In the AppState; `crops` and `unitsOfMeasure`

### ReqUserScoutCards

-   Retrieves all the `scout cards` of the user's trading entities. (Currently the first trading entity will always be used.)
-   Output: `scout cards`

## Update

## Delete

# Selectors

-   Normal Entity state Selectors apply `getDeliveryPointIds, getDeliveryPointEntities, getAllDeliveryPoints, getTotalDeliveryPoints`

## getSearchResults

-   Returns the search result object

## getMarketFormData (Not Under marketSelectors)

-   Input: marketId or null for `create`
-   Returns the `crops`, `unitsOfMeasure` and `market` in an object. If the Market id does not exist a default market is provided.

## getCurrentFullScout

-   Returns the current scout that needs to be edited.
