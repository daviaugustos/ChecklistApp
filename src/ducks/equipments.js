export const Types = {
  ADD: 'checklist/add',
  TOGGLE: 'checklist/toggle',
  FINISH: 'checklist/finish',
  FETCH_SUCCESS: 'checklist/fetch/success',
  GET_DATA: 'checklist/getData',
  COMPLETE_EQUIPMENT: 'checklist/send',
};

const INITIAL_STATE = {
  equipmentsList: [
    {
      name: 'Whoops, Nothing Here :(',
      id: 100,
      state: false,
      completed: false,
    },
  ],
};

export const toggleCheckbox = (id) => ({
  type: Types.TOGGLE,
  payload: id,
});

export const getData = () => ({type: Types.GET_DATA});

export const completeEquipment = (id) => ({
  type: Types.COMPLETE_EQUIPMENT,
  payload: id,
});

export default function equipments(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.FETCH_SUCCESS:
      return {...state, equipmentsList: payload};

    case Types.TOGGLE:
      console.log({
        ...state,
        equipmentsList: state.equipmentsList.map((equipment) => {
          if (payload === equipment.id) {
            return {
              ...equipment,
              state: !equipment.state,
            };
          }
          return equipment;
        }),
      });
      return {
        ...state,
        equipmentsList: state.equipmentsList.map((equipment) => {
          if (payload === equipment.id) {
            return {
              ...equipment,
              state: !equipment.state,
            };
          }
          return equipment;
        }),
      };

    default:
      return state;
  }
}
