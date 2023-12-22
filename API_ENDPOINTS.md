# API ENDPOINTS

- All endpoints will have the firebaseToken in the headers as a field called `firebaseToken`
- [MAIN TABLE] square brackets indicate which table the endpoint should get the bulk of the data from.

## LOGIN/REGISTER PAGE

### auth/register (post) [User]

- Input:
  ```
    {
        email:string - required    Do i need to validate if Email is Unique?;
        phoneNumber: string - required    Do i need to validate if Email is Unique?;
    }
  ```
- Output:

```
   {
    id: number;
    email:string;
    phoneNumber: string;
    skuduId: string;
    entityUsers[]: {
        id:number;
        entityId: number;
        roleId: number;
        bool: userEntity;   Indicates if the Entity is the users default User Entity
      }
    }
```

### auth/login (get) [User]

- Output:

```
   {
    id: number;
    skuduId: string;
    entityUsers[]: { User may be associated with many entities
        id:number;
        entityId: number;
        roleId: number;
        userEntity:bool;   Indicates if the Entity is the users default User Entity
      }
    }
```

### delivery-points/entity/{id} (get) [DeliveryPoint]

This endpoint should return all delivery points that belong to the entity with the provided id

- Output:

  ```
  List<{
    id: number;
    name: string;
    streetNumber: string;
    street: string;
    suburb: string;
    town: string;
    postalCode: string;
    region: string;
    province: string;
    country: string;
    googlePlaceId: string;
    isPublic:bool;
    location: {
        lat:number;
        lng: number;
      };
    locationType: {id:number; name:string};

  }>
  ```

## Delivery Management Page

### delivery-points/is-public (get) [DeliveryPoint]

- Output:
  ```
  List<{
    id: number;
    name: string;
    streetNumber: string;
    street: string;
    suburb: string;
    town: string;
    postalCode: string;
    region: string;
    province: string;
    country: string;
    googlePlaceId: string;
    isPublic:bool;
    location: {
        lat:number;
        lng: number;
      };
    locationType: {id:number; name:string};
  }>
  ```

### delivery-points/create (post) [DeliveryPoint]

- Input:

```
{
  name: string;
  streetNumber: string;
  street: string;
  suburb: string;
  town: string;
  postalCode: string;
  region: string;
  province: string;
  country: string;
  googlePlaceId: string;
  location: {
      lat:number;
      lng: number;
    };
  locationType: {id:number; name:string};
}
```

- Output

```
{
  id:number;
  name: string;
  streetNumber: string;
  street: string;
  suburb: string;
  town: string;
  postalCode: string;
  region: string;
  province: string;
  country: string;
  googlePlaceId: string;
  location: {
      lat:number;
      lng: number;
    };
  locationType: {id:number; name:string};
}
```

### location-types/all (get) [LocationType]

- Output:
  ```
  List<{id:number; name:string}>
  ```

### delivery-points/update (post) [DeliveryPoint]

- Input:

```
{
  id: number;
  name: string;
  streetNumber: string;
  street: string;
  suburb: string;
  town: string;
  postalCode: string;
  region: string;
  province: string;
  country: string;
  googlePlaceId: string;
  location: {
      lat:number;
      lng: number;
    };
  locationType: {id:number; name:string};
}
```

- Output

```
{
  id:number;
  name: string;
  streetNumber: string;
  street: string;
  suburb: string;
  town: string;
  postalCode: string;
  region: string;
  province: string;
  country: string;
  googlePlaceId: string;
  location: {
      lat:number;
      lng: number;
    };
  locationType: {id:number; name:string};
}
```

### delivery-points/delete (post) [DeliveryPoint]

- Input:

```
{
	id:number;
}
```

- Output:

```
{
	Id: number;
}
```

## Create/Edit Market

### entities/{id} (get) [Entity]

- Output:

```
{
  id:number;
  name:string;
  userEntity:boolean;
  registrationNumber:string;
  phoneNumber: string;
  maxUsers: number;
  tradingEntity[]: {
      id: number;
      name: string;
      equityScore: number;
      entityType: {
        id: number;
        name: string;
         };
      entityDelivery[]: {
        id: number;
        deliveryPointId: number;
        contactPerson: string;
        phoneNumber: string;
        email: string;
       };
    }
}
```

### crops/all (get) [Crop]

- Output:

```
List<{
  id:number;
  name: string;
}>
```

### crops/grades/{id} (get) [Grade]

- Output:

```
List<{
  id:number;
  name: string;
}>

### unitsOfMeasure/all (get) [UnitOfMeasures]

- Output:

```

List<{
id:number;
name: string;
}>

### markets/search (post) [Market]

- The purpose of this endpoint is to display to the user how much interest there is in the market.
- This endpoint does not create the market it merely searches the matches the market would have made.

- Input:

```

{
  marketType: string;
  tradingEntityId: number;
  cropId: number;
  dateFrom: Date;
  dateTo: Date;
  deliveryPointId: number;
  radius: number;
  unitOfMeasureId: number;
  quantity: number;
  status: string;
  isPublic: boolean;
}

```

- Output:

```
{
  marketType: string;
  tradingEntityId: number;
  crop: {
    id:number;
    name: string;
  };
  dateFrom: Date;
  dateTo: Date;
  deliveryPoint: {
    id:number;
    name: string;
    locationType: {id:number; name:string};
  };
  radius: number;
  quantity: number;
  unitOfMeasureId: number;
  isPublic:boolean

  buyers?: number;
  sellers?: number;
  lots: number;
}
```

### markets/create (post) [Offer]

- Input:

```

{
  offerType: string;
  tradingEntityId: number;
  cropId: number;
  dateFrom: Date;
  dateTo: Date;
  deliveryPointId: number;
  radius: number;
  unitOfMeasureId: number;
  quantity: number;
  status: string;
  isPublic: boolean;
}

```

- Output:

```
{
  id: number
  marketType: string;
  tradingEntityId: number;
  crop:{
    id: number;
    name: string;
  };
  dateFrom: Date;
  dateTo: Date;
  deliveryPoint: {
    id: number;
    name: string;
    streetNumber: string;
    street: string;
    suburb: string;
    town: string;
    postalCode: string;
    region: string;
    province: string;
    country: string;
    googlePlaceId: string;
    location: {
        lat:number;
        lng: number;
      };
  };
  radius: number;
  unitOfMeasure: {
    id: number;
    name: string;
  };
  quantity: number;
  status: string;
  isPublic: boolean;

  buyers?: number;
  sellers?: number;
  lots: number;
}
```

### markets/update (post) [Market]

The update the market should only be allowed if there are no lots linked to the market.

- Input:

```

{
id: number;
  marketType: string;
  crop: {
    id: number;
    name:string;
  };
cropId: number

 dateFrom: Date;
 dateTo: Date;
 deliveryPointId: number;
 unitOfMeasureId: number;
status: string;

  quantity: number;
  radius: number;
  isPublic: boolean;
}

```

- Output:

```
{
  id: number
  offerType: string;
  tradingEntityId: number;
  crop:{
    id: number;
    name: string;
  };
  dateFrom: Date;
  dateTo: Date;
  deliveryPoint: {
    id: number;
    name: string;
    streetNumber: string;
    street: string;
    suburb: string;
    town: string;
    postalCode: string;
    region: string;
    province: string;
    country: string;
    googlePlaceId: string;
    location: {
        lat:number;
        lng: number;
      };
  };
  radius: number;
  unitOfMeasure: {
    id: number;
    name: string;
  };
  quantity: number;
  status: string;
  isPublic: boolean;

  buyers?: number;
  sellers?: number;
  lots: number;
}
```

### markets/{id} (get) [Market]

- Reads the market with the provided Id

- Output: `Market`

```
{
  id: number
  offerType: string;
  tradingEntityId: number;
  crop:{
    id: number;
    name: string;
  };
  dateFrom: Date;
  dateTo: Date;
  deliveryPoint: {
    id: number;
    name: string;
    streetNumber: string;
    street: string;
    suburb: string;
    town: string;
    postalCode: string;
    region: string;
    province: string;
    country: string;
    googlePlaceId: string;
    location: {
        lat:number;
        lng: number;
      };
  };
  radius: number;
  unitOfMeasure: {
    id: number;
    name: string;
  };
  quantity: number;
  status: string;
  isPublic: boolean;

  buyers?: number;
  sellers?: number;
  lots: number;
}
```
