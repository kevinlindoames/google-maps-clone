import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";
import { useEffect, useState } from "react";
import { getPlacesData } from "./api";

const places = [
  { name: "Sample Place1" },
  { name: "Sample Place1" },
  { name: "Sample Place1" },
  { name: "Sample Place1" },
  { name: "Sample Place1" },
  { name: "Sample Place1" },
  { name: "Sample Place1" },
  { name: "Sample Place1" },

];

const Home = () => {

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null)
  const [type, setType] = useState('restaurants');
  const [ratings, setRatings] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //get the users current Location on initial login

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  
  useEffect(() => {
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      console.log(data);
    });
  }, [coordinates, bounds]);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >

      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />

      <List places={places} isLoading={isLoading} />

      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
      />
    </Flex>
  );
};

export default Home;