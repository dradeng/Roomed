import {LIST_PAGE_LOADED, LIST_PAGE_UNLOADED, UPDATE_FIELD_LIST} from '../constants/actionTypes';

/*
const defaultState = {
    num_Beds: 0,
    title:'',
    num_Capable_of_Housing: 0,
    num_Bathrooms: 0,
    num_Bedrooms: 0,
    price: 0,
    minimum_Stay: 0,
    start_date: '',
    end_date: '',
    address: '',
    zipcode: 0,
    housing_Type1: 0,
    housing_Type2: 0,
    furnished: false,
    private_Bathroom: false,
    essentials: false,
    wifi: false,
    tv: false,
    heat: false,
    air_Conditioning: false,
    desk: false,
    fireplace: false,
    iron: false,
    pets: false,
    private_Entrance: false,
    smoke_Detector: false,
    carbon_Monoxide_Detector: false,
    first_Aid_Kit: false,
    safety_Card: false,
    fire_Extinguisher: false,
    bedroom_Lock: false,
    living_Room: false,
    kitchen: false,
    laundry_Washer: false,
    laundry_Dryer: false,
    parking: false,
    hot_tub: false,
    elevator: false,
    gym: false,
};
*/
export default (state = {}, action) => {
    switch (action.type) {
        case LIST_PAGE_LOADED:
            return {
                ...state
            };
        case LIST_PAGE_UNLOADED:
            return {
                ...state
            };
        case UPDATE_FIELD_LIST:
            console.log(action);
            return { ...state, [action.key]: action.value };
        default:
            return state;
    }
};
