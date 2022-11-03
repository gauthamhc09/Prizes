import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPrizes } from "../features/prizes/prizesSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPrizes = async () => {
      try {
        const response = await axios.get(
          "https://api.nobelprize.org/v1/prize.json"
        );
        dispatch(addPrizes(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchPrizes();
  }, []);

  return <div>Home</div>;
};

export default Home;
