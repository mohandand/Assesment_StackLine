import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'

const direction = {
    weekEnding: "asc",
    retailSales: "asc",
    wholesaleSales: "asc",
    unitsSold: "asc",
    retailerMargin: "asc"
  };
  
export const productSlice = createSlice({
  name: 'product', 
  initialState:{
    productData : {}
  },
  reducers: {  
    fetchdata: (state,action) => {
       state.productData={...action.payload};
    },
    sortdata : (state, action) => {
      if (Object.getOwnPropertyNames(state.productData).length > 0) {
        const currentState = current(state)
        var key = action.payload;
        const salesValues = currentState["productData"].sales
        const sales = salesValues.map(salesObj => {
          return Object.assign({}, salesObj);
        });
        let sortedSales;
        if (key === "weekEnding") {
          sortedSales = sales.sort(
            (a, b) =>
              direction[key] === "asc"
              ? new Date(b[key]).getTime() - new Date(a[key]).getTime()
              : new Date(a[key]).getTime() - new Date(b[key]).getTime()
          );
        } else {
          sortedSales = sales.sort(
            (a, b) =>
              direction[key] === "asc" ? b[key] - a[key] : a[key] - b[key]
          );
        }

        direction[key] = direction[key] === "asc" ? "desc" : "asc";
       const temporary = {
          brand: currentState["productData"].brand,
          details: currentState["productData"].details,
          id: currentState["productData"].id,
          image:currentState["productData"].image,
          retailer:currentState["productData"].retailer,
          reviews:currentState["productData"].reviews,
          sales:sortedSales,
          subtitle:currentState["productData"].subtitle,
          tags:currentState["productData"].tags,
          title:currentState["productData"].title
       }
        state.productData={...temporary};

      } else {
        state.productData={...action.payload};
      }
    }
  }
});

export const { fetchdata,sortdata } = productSlice.actions

export default productSlice.reducer