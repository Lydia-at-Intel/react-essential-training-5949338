async function getData() {
  const res = await fetch("https://snowtooth-api-rest.fly.dev");
  return res.json();
}

export default async function MountainPage() {
  const data = await getData();
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1>Mountain Page</h1>
      <table>
        <thead>
          <tr>
            <th>lift name</th>
            <th>current status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lift) => (
            <tr key={lift.id}>
              <td>{lift.name}</td>
              <td>{lift.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>{JSON.stringify(data)}</p>
    </main>
  );
}
