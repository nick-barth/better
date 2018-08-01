const initialState = [
    {
      "id": 1,
      "username": "marymeeker",
      "real_name": "Mary Meeker",
      "verified": true
    },
    {
      "id": 2,
      "username": "ConanOBrien",
      "real_name": "Conan O'Brien",
      "verified": true
    },
    {
      "id": 3,
      "username": "baratunde",
      "real_name": "Baratunde",
      "verified": false
    },
    {
      "id": 4,
      "username": "nickbarth",
      "real_name": "Nick Barth",
      "verified": false,
      "active_user": true
    }
];

export default function reducer(state=initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

