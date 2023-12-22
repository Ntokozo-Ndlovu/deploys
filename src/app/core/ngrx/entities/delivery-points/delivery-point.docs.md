# ACTIONS

## Create

### ReqCreateDeliveryPoint

-   Create the delivery point on the SQL database.
-   Input Provide the delivery Point with a random id, this id will be replaced on return of the api call.
-   Output: Complete Delivery Point

## Read

### ReqPublicDeliveryPoints

-   Loads the public delivery points from SQL
-   Output: List of delivery points

### ReqEntityDeliveryPoints

-   Load in all the delivery points for all Entities linked to the currently logged in user. (User must be logged in before this action can be called)
-   Output: List of delivery points belonging to the user's entities.

### ReqManagementData

-   Retrieves all data needed by the Delivery point management page.
-   Output: List of all delivery points the user has access to. All `regions` and all `locationTypes`

## Update

### ReqUpdateDeliveryPoint [NOT IMPLEMENTED FULLY]

-   Updates the delivery point on the SQL database.
-   Input: Updated `deliveryPoint`
-   Output: Updated Delivery Point

## Delete

### ReqDeleteDeliveryPoint [NOT IMPLEMENTED FULLY]

-   Deletes the Delivery Point from the SQL Database
-   Input: The `id` of the delivery point.
-   Output: Removes the associated delivery point

========================================================

# SELECTORS

-   Normal Entity state Selectors apply `getDeliveryPointIds, getDeliveryPointEntities, getAllDeliveryPoints, getTotalDeliveryPoints`

## getSetupDeliveryPointDetails

-   Returns `deliveryPoints`, `locationTypes` and `regions` in one object.

## getManageDeliveryPointDetails

-   Returns the user `deliveryPoints`, `publicDeliveryPoints`, `regions` and the `locationTypes` in an object.

## getDeliveryPointById

-   Input: `{id: number}`
-   Returns the delivery point with the provided id.
