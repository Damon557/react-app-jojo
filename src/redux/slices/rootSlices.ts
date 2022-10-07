import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Stand',
        price: "2000.00",
        description: "Inner strength",
        Attack_type: 'physical',
        Ability_type: 'Star platnum',
        max_speed: '140 mph',
        dimensions: '7ft',
        weight: '2000lbs',
        cost_of_production: 45000.00,
        series: 'jojo'

    },
    reducers:{
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => {state.price = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseAttack_type: (state, action) => { state.Attack_type = action.payload},
        chooseAbility_type: (state, action) => { state.Ability_type = action.payload},
        chooseSpeed: (state, action) => { state.max_speed = action.payload},
        chooseCost: (state, action) => { state.cost_of_production = action.payload},
        chooseSeries: (state, action) => { state.series = action.payload},
        chooseWeight: (state, action) => { state.weight = action.payload},
        chooseDim: (state, action) => { state.dimensions = action.payload}

    }
})

export const reducer = rootSlice.reducer;
export const {chooseName, choosePrice, chooseDescription, chooseAttack_type, chooseAbility_type, chooseSpeed, chooseCost, chooseSeries, chooseWeight, chooseDim} = rootSlice.actions;
