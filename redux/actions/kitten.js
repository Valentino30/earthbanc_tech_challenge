import axios from "axios";

import { GET_KITTENS } from "./types";
import { clearErrors, setErrors } from "./error";

export const getKittens = () => async (dispatch) => {
  try {
    const url = "https://api.pexels.com/v1/search?query=kitten";
    const API_KEY = "563492ad6f917000010000012cd6aa03ae184943a537ed1ebeed5b85";

    const response = await axios.get(url, {
      headers: { Authorization: API_KEY },
    });
    dispatch({
      type: GET_KITTENS,
      payload: response.data.photos,
    });
    dispatch(clearErrors());
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }
};
