export const SET_FORM_INFO = 'SET_FORM_INFO';

const initialState = {
    postType: null,
    typeAnimal: null,
    sex: null,
    breed: null,
    color: null,
    height: null,
    features: null,
    description: null,
    location: null,
    phone: null,
    email: null,
    facebook: null,
    date: Date.now()
}

export const lostFoundFormReducer = (form = initialState, {type, payload}) => {
    switch (type) {
        case SET_FORM_INFO:
            return {
                ...form,
                postType: payload.postType,
                typeAnimal: payload.typeAnimal,
                sex: payload.sex,
                breed: payload.breed,
                color: payload.color,
                height: payload.height,
                features: payload.features,
                description: payload.description,
                location: payload.location,
                phone: payload.phone,
                email: payload.email,
                facebook: payload.facebook,
                date: payload.date
            }
        default:
            return form;
    }
}