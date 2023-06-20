import React from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();

  // Fetch program details using the `id` parameter and render them here

  return <div>In Detail Page for Program ID: {id}</div>;
}
