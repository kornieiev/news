"use client";

export default function error({ error }) {
  console.log(error.message);
  return (
    <div id='error'>
      <h1>Not found</h1>
      <p>Unfortunately, we could not find the requested article.</p>
      <p>{error.message}</p>
    </div>
  );
}
