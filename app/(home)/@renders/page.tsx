export const dynamic = "force-dynamic";

export default async function RendersPage() {
  const loadTime = 5900;

  await sleep(loadTime);

  return (
    <div className="text-3xl font-bold tracking-tighter">
      <div>Renders Page loaded after {loadTime}ms</div>
    </div>
  );
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
