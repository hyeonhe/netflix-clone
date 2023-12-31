import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  return <></>;
}

export default Search;
