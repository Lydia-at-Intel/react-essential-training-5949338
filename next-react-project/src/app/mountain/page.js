async function getData() {
  const res = await fetch("https://snowtooth-api-rest.fly.dev");
  return res.json();
}

export default async function MountainPage() {
  const data = await getData();
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1>Mountain Page</h1>
      <p>{JSON.stringify(data)}</p>
    </main>
  );
}
